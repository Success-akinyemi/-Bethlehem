import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Carousel({ data, style, link, autoScroll }) {
  const [scrollIndex, setScrollIndex] = useState(1); 
  const containerRef = useRef(null);

  const extendedData = [
    data[data.length - 1], 
    ...data,
    data[0], 
  ];

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setScrollIndex((prev) => prev + 1); 
      }, 3000);

      return () => clearInterval(interval); 
    }
  }, [autoScroll]);

  useEffect(() => {
    if (containerRef.current) {
      const itemWidth =
        containerRef.current.scrollWidth / extendedData.length;

      containerRef.current.scrollTo({
        left: scrollIndex * itemWidth,
        behavior: "smooth",
      });

      if (scrollIndex === 0) {
        setTimeout(() => {
          containerRef.current.scrollTo({
            left: data.length * itemWidth,
            behavior: "auto",
          });
          setScrollIndex(data.length);
        }, 500);
      } else if (scrollIndex === extendedData.length - 1) {
        setTimeout(() => {
          containerRef.current.scrollTo({
            left: itemWidth,
            behavior: "auto",
          });
          setScrollIndex(1);
        }, 500);
      }
    }
  }, [scrollIndex, extendedData.length, data.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex w-full gap-4 overflow-x-auto scrollbar-hide px-4"
      >
        {extendedData.map((item, idx) => (
          <Link
            key={idx}
            to={ item?.link ? `/${item?.link}` : ''}
            className={`bg-gradient-to-b from-dark-green to-dark-gray ${style}`}
          >
            <img
              alt={item?.name || "Carousel slider"}
              src={item?.image}
              className="w-full h-full object-cover object-center"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
