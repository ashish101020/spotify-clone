import React from "react";
import { assets } from "../Assets/frontend-assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded dlex-col justify-around">
        <br />
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <br />
        <div className="flex item-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
        <br />
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex p-4 item-center justify-between">
          <div className="flex item-center gap-3">
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex item-center gap-3">
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounder font-semibold flex flex-col item-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create playlist</button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounder font-semibold flex flex-col item-start justify-start gap-1 pl-4">
          <h1>Let's find somepodcast to follow</h1>
          <p className="font-light">we will keep you update on new episode</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
