import React from "react";
import { assets, songsData } from "../Assets/assets";
const Player = () => {
  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white -x-4">
      <div className="hidden lg:flex items-center gap-4 pl-5">
        <img className="w-12 " src={songsData[0].image} alt="" />
        <div className="">
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center fap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>1:06</p>

          <div className="relative max-w-[500px] w-[60vw] h-1 bg-gray-300 rounded-full cursor-pointer">
            <div
              className="absolute top-0 left-0 h-full bg-green-800 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>

          <p>3:20</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>

    </div>
  );
};

export default Player;
