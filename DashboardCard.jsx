export default function DashboardCard({
  title,
  value,
  icon
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-300
      border
    "
    >

      <div className="
        flex
        justify-between
        items-center
      ">

        <div>

          <p className="text-slate-500">
            {title}
          </p>

          <h2 className="
            text-4xl
            font-bold
            mt-2
          ">
            {value}
          </h2>

        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
}