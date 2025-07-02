import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({album}) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/album/${album.id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={album.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{album.name}</p>
        <p className='text-slate-200 text-sm'>{album.desc}</p>
    </div>
  )
}

export default AlbumItem