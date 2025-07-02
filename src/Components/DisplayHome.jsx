import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../Assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className=" flex overflow-auto">
          {albumsData.map((album) => (
            <AlbumItem key={album.id} album={album} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest his</h1>
        <div className=" flex overflow-auto">
          {songsData.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
