import { Link, useNavigate } from "react-router-dom"
import Button from "./Helpers/Button"
import { BsPersonCircle } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
    const navigate = useNavigate()
    const user = false

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
        navigate('/signup')
    }
    const handleDeposit = () => {

    }
  return (
    <div className={`${user ? 'bg-dark-green-2' : 'bg-dark-green-1'} bg-red w-full flex items-center justify-between h-[50px] px-8 tablet:px-4 phone:px-3` }>
     
      <div className="">
        <h1 className="text-[20px] font-font-1 text-white font-bold">Logo</h1>
      </div>

      <div className="">
        {
            user ? (
                <div className="flex items-center gap-5 phone:gap-4">
                    <div className="flex flex-col items-center justify-center text-white text-[12px] phone:text-[10px] font-semibold">
                        <p>NGN</p>
                        <p>0.00</p>
                    </div>
                    <div className="">
                        <Button text={`Deposit`} onCLick={handleDeposit} style={`!py-1 !text-[14px] !rounded-[10px] !bg-green`} />
                    </div>
                    <div className="cursor-pointer">
                        <Link to='/profile'>
                            <BsPersonCircle className="text-white text-[21px]" />
                        </Link>
                    </div>
                    <div className="cursor-pointer">
                        <Link>
                            <IoMdNotificationsOutline className="text-white text-[21px]" />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <div className="">
                        <Button text={'Login'} onCLick={handleLogin} style={`!bg-transparent !border-[1px] !border-mainColor1 !rounded-[10px] !py-1 !text-[14px]`} />
                    </div>
                    <div className="">
                        <Button text={'Signup'} onCLick={handleSignup} style={`!py-1 !text-[14px] !rounded-[10px]`} />
                    </div>
                </div>
            )
        }
      </div>

    </div>
  )
}

export default Navbar
