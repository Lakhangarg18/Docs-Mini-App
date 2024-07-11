import React from 'react'
import { FaFileInvoice } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragTransition={{bounceStiffness:100,bounceDamping:10}}className='relative w-60 h-72 rounded-[45px] px-8 py-10 text-white overflow-hidden  bg-zinc-900/90'>
    <FaFileInvoice/>
    <p className='leading-tight text-sm mt-5 font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0 w-full left-0 '>
      <div className='flex items-center justify-between px-8 py-3 mb-5'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
         {data.close==='false' ? <LuDownload size=".7em" color="#fff"/> : <IoCloseSharp size=".7em" color="#fff"/> }
         
        </span>
      </div>
      {data.tag.isOpen ? (
        <div className={`tag w-full  py-4 ${data.tag.tagColor==="blue"? "bg-pink-600" : "bg-green-500"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>) : null}
      
    </div>
      
    </motion.div>
  )
}

export default Card
