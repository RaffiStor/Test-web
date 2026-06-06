"use client";

export default function Navbar() {

function logout() {

  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "username"
  );

  window.location.href =
  "/login";

}

  const username =
    typeof window !== "undefined"
      ? localStorage.getItem("username")
      : "Admin";

  return (

    <nav
      className="
      bg-white
      px-6
      py-4
      shadow-sm
      flex
      justify-between
      items-center
      border-b
    "
    >

      <div>

        <h1
          className="
          text-xl
          font-bold
          text-blue-700
        "
        >
          SMPNSATUKURUN
        </h1>

        <p className="text-slate-500 text-sm">
          School Management System
        </p>

      </div>

      <div
        className="
        flex
        items-center
        gap-3
      "
      >

        <div
          className="
          w-10
          h-10
          rounded-full
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          font-bold
        "
        >
          R
        </div>

        <div>

          <p className="font-semibold">
            {username}
          </p>

          <p className="text-xs text-slate-500">
            Administrator
          </p>

        </div>

      </div>

    </nav>

  );
}