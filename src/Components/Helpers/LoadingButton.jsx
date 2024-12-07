
import { FaSpinner } from "react-icons/fa";

function LoadingBtn({ text, style }) {
  return (
    <button
      className={`w-full pad1 bg-mainColor1 text-white flex items-center justify-center px-5 py-4 rounded-[20px] text-[17px] font-medium ${style}`}
      disabled 
    >
        <FaSpinner className="animate-spin mr-2 text-[20px]" />
        {text}
    </button>
  );
}

export default LoadingBtn;
