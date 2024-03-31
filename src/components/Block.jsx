import React from 'react'
import { FiList } from "react-icons/fi";

function Block({name}) {
    const handleOnDrag = (e,name) =>{
      e.dataTransfer.setData("widgetType",name);
    }
  return (
    <div className='w-48 flex bg-slate-50 m-4 text-black p-3 align items-center'
        draggable
        onDragStart={(e)=>{handleOnDrag(e,name)}} 
        >
        <FiList />
        <h5 className='ml-3'>{name}</h5>
    </div>
  )
}

export default Block