import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../Assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekBar = useRef();
  const [count, setCount] = useState(1);
  const [track, setTrack] = useState(songsData[count]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      minute: 0,
      second: 0,
    },
    totalTime: {
      minute: 0,
      second: 0,
    },
  });
  const prev = async() => {
    await setCount((prevCount) =>
      prevCount > 0 ? prevCount - 1 : songsData.length - 1
    );
  };

  const next = async () => {
    await setCount((prevCount) =>
      prevCount < songsData.length - 1 ? prevCount + 1 : 0
    );
  };

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const seeksong = async(e) =>{
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth) * audioRef.current.duration);
  };

  useEffect(() => {
    if (count >= 0 && count < songsData.length) {
      setTrack(songsData[count]);
    }
  }, [count]);

  useEffect(() => {
    if (playStatus && audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [track]);
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        setTime({
          currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBar,
    seekbg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    prev,
    next,
    playWithId,
    seeksong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
