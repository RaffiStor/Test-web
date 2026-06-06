"use client";

import Link from "next/link";

export default function Sidebar() {

  const menus = [

    {
      name:"Dashboard",
      url:"/dashboard",
      icon:"🏠"
    },

    {
      name:"Data Siswa",
      url:"/siswa",
      icon:"🎓"
    },

    {
      name:"Data Guru",
      url:"/guru",
      icon:"👨‍🏫"
    },

    {
      name:"Pengumuman",
      url:"/pengumuman",
      icon:"📢"
    },

    {
      name:"Upload File",
      url:"/upload",
      icon:"📂"
    }
 
    {
     name:"Users",
     url:"/users",
     icon:"👥"
    }
    
    {
    name:"Activity",
    url:"/activity",
    icon:"📋"
    }
  ];

  return (

    <aside
      className="
      w-72
      bg-blue-700
      text-white
      min-h-screen
      p-5
    "
    >

      <div className="mb-10">

        <h1
          className="
          text-2xl
          font-bold
        "
        >
          SMPNSATUKURUN
        </h1>

        <p className="text-blue-200">
          by Raffi
        </p>

      </div>

      <div className="space-y-2">

        {menus.map((menu,index)=>(

          <Link
            key={index}
            href={menu.url}
            className="
            flex
            items-center
            gap-3
            p-4
            rounded-xl
            hover:bg-blue-600
            transition
            "
          >

            <span>{menu.icon}</span>

            <span>{menu.name}</span>

          </Link>

        ))}

      </div>

    </aside>

  );
}
