import React from 'react'

const SongItem = ({song}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={song.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{song.name}</p>
        <p className='text-slate-200 text-sm'>{song.desc}</p>
    </div>
  )
}

export default SongItem