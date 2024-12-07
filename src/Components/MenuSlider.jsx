import { Link, useLocation } from "react-router-dom";
import { menu } from "../data/menu"; 

function MenuSlider() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Shadow effects for scrolling effect */}
      <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none" />

      {/* Scrollable container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            to={`${item.link}`}
            className={`text-white font-bold border-[2px] py-2 px-4 text-[14px] rounded-full whitespace-nowrap ${
              isActive(`${item.link}`) ? 'border-mainColor1' : 'border-transparent'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuSlider;
