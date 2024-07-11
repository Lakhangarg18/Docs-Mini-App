import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref=useRef(null);
  const data = [
    {
      desc: "Lorem ipsum jh ijsd iwjdkk jdkndksjc cnk",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" },
    },
    {
      desc: "Lorem ipsum jh ijsd iwjdkk jdkndksjc cnk",
      filesize: ".8mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "Green" },
    },
    {
      desc: "Lorem ipsum jh ijsd iwjdkk jdkndksjc cnk",
      filesize: ".2mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "Blue" },
    },
  ];
  return <div ref={ref} className="fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap ">
    {data.map((item,index)=>(
      <Card data={item} reference={ref}/>
    ))}
  </div>;
}

export default Foreground;
