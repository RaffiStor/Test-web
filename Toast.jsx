"use client";

export default function Toast({

  text,
  show

}){

  if(!show) return null;

  return(

    <div
      className="
      fixed
      top-5
      right-5
      bg-green-500
      text-white
      px-5
      py-3
      rounded-xl
      shadow-lg
    "
    >

      {text}

    </div>

  );

}