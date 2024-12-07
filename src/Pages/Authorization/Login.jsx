import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Button from '../../Components/Helpers/Button'
import LoadingBtn from '../../Components/Helpers/LoadingButton'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState()
    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }

    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setErrorMsg()
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }

    const [ isLoading, setIsLoading ] = useState(false)
    const handleLogin = async () => {
        if(!formData?.email){
            setErrorMsg('Provide a email address')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        if(!formData?.password){
            setErrorMsg('Provide a password')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        try {
            setIsLoading(true)
            navigate('/')
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-bg-1'>
      <div className="card1 w-[500px] phone:w-[95%] flex flex-col gap-5 bg-bg-2">
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-[24px] font-bold text-black'>Login</h2>
            <p className='text-[14px] font-normal text-black'>welcome to Bethlehem</p>
        </div>

        <div className="inputGroup">
            <input type="email" onChange={handleChange} id='email' className="input" placeholder='Email' />
        </div>

        <div className="inputGroup relative">
            <input type={ showPassword ? 'text': 'password' } onChange={handleChange} id='password' className="input" placeholder='Password' />
            {
                        showPassword ? (
                            <span onClick={togglePassword} className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2">
                                <FaEye className="text-[20px]" />
                            </span>
                        ) : (
                            <span onClick={togglePassword} className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2">
                                <FaEyeSlash
                                 className="text-[20px]" />
                            </span>
                        )
                    }
        </div>
        <Link to={''} className='text-end text-mainColor1 text-[15px] font-medium'>Forgot Password</Link>

        <p className='text-[15px] font-medium text-center text-mainColor1'>{errorMsg}</p>

        
        <div className="">
            {
                isLoading ? (
                    <LoadingBtn text={`loging...`} />
                ) : (
                    <Button text={`Login`} onCLick={handleLogin} disabled={isLoading} style={`text-[18px]`} />
                )
            }
        </div>

        <p className='text-[15px] font-medium text-start text-black'>New to Bethlehem? <Link to={`/`} className='text-mainColor1'>Signup</Link></p>

      </div>
    </div>
  )
}

export default Login
