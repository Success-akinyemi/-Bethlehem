import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { punters } from "../data/punters";

function TopPuntersList() {
    const punter = punters

  return (
    <div className="relative w-full overflow-hidden">

      {/* Scrollable container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth">
        
        <div className="flex cursor-pointer flex-col items-center justify-center">
            <div className="w-[49px] h-[49px] rounded-full bg-bg-2 flex items-center justify-center gap-1">
                <div className="flex rounded-full item-center justify-center h-[21px] w-[21px] bg-mainColor1">
                    < IoIosAdd className='text-white flex items-center justify-center m-auto text-[19px]' />
                </div>
            </div>
            <p className="text-white text-[13px] phone:text-[10px] font-semibold">Add Punter</p>
        </div>
        {punter.map((item, idx) => (
            <Link to={`/punter/${item._id}`} key={idx} className="">

                <div className="relative flex cursor-pointer flex-col items-center justify-center gap-1">
                    <div className="w-[49px] h-[49px] overflow-hidden rounded-full bg-bg-2 flex items-center justify-center">
                        <img alt={item?.name || 'punter image'} src={item?.profileImg} className="w-full h-full" />
                    </div>
                    <p className="text-white text-[12px] phone:text-[10px] font-semibold">{item?.name}</p>
                </div>

            </Link>
        ))}

      </div>
    </div>
  );
}

export default TopPuntersList;
