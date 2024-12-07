import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoCheckbox } from "react-icons/io5"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import Button from '../../Components/Helpers/Button'
import LoadingBtn from '../../Components/Helpers/LoadingButton'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
    const [ isAgreed, setIsAgreed ] = useState(false)
    const [ errorMsg, setErrorMsg ] = useState()
    const togglePassword = () => {
        setShowPassword((prev) => !prev)
    }
    const toggleConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev)
    }
    const handleAgreed = (value) => {
        setIsAgreed(!value)
        setFormData({ ...formData, agreed: !value})
    }

    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setErrorMsg()
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }

    const [ isLoading, setIsLoading ] = useState(false)
    const handleSignup = async () => {
        if(!formData?.name){
            setErrorMsg('Provide a full name')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        if(!formData?.email){
            setErrorMsg('Provide a email address')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        if(!formData?.phoneNumber){
            setErrorMsg('Provide a Phone Number')
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
        if(!formData?.confirmPassword){
            setErrorMsg('Enter confirm password')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        if(formData?.password !== formData?.confirmPassword){
            setErrorMsg('password and confirm password do not match') 
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        if(!formData?.agreed){
            setErrorMsg('Agree to terms and conditions')
            setTimeout(() => {
                setErrorMsg()
            }, 3000)
            return
        }
        try {
            setIsLoading(true)
            navigate('/login')
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-bg-1'>
      <div className="card1 w-[500px] phone:w-[95%] flex flex-col gap-5 bg-bg-2">
        <div className="flex flex-col items-center justify-center">
            <h2 className='text-[24px] font-bold text-black'>Sign up</h2>
        </div>

        <div className="inputGroup">
            <input type="text" onChange={handleChange} id='name' className="input" placeholder='Name' />
        </div>

        <div className="inputGroup">
            <input type="email" onChange={handleChange} id='email' className="input" placeholder='Email' />
        </div>

        <div className="inputGroup">
            <input type="number" onChange={handleChange} id='phoneNumber' className="input" placeholder='Phone Number' />
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

        <div className="inputGroup relative">
            <input type={ showConfirmPassword ? 'text' : 'password' } onChange={handleChange} id='confirmPassword' className="input" placeholder='Confirm password' />
            {
                        showPassword ? (
                            <span onClick={toggleConfirmPassword} className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2">
                                <FaEye className="text-[20px]" />
                            </span>
                        ) : (
                            <span onClick={toggleConfirmPassword} className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2">
                                <FaEyeSlash className="text-[20px]" />
                            </span>
                        )
                    }
        </div>

        <div className="flex flex-row justify-start items-center gap-3">
            {
                isAgreed ? (
                    <div onClick={() => handleAgreed(true)} className="">
                        <IoCheckbox className='text-mainColor1 text-[24px]' />
                    </div>
                ) : (
                    <div onClick={() => handleAgreed(false)} className="">
                        <MdOutlineCheckBoxOutlineBlank className='text-mainColor1 text-[24px]' />
                    </div>
                )
            }
            <p className='text-textColor1 text-[13px] font-normal'>I have read and agree to the <span className='text-mainColor1'>Terms of use</span> and <span className='text-mainColor1'>Privacy notice.</span></p>
        </div>

        <p className='text-[15px] font-medium text-center text-mainColor1'>{errorMsg}</p>

        
        <div className="">
            {
                isLoading ? (
                    <LoadingBtn text={`Signing up...`} />
                ) : (
                    <Button text={`Signup`} onCLick={handleSignup} disabled={isLoading} style={`text-[18px]`} />
                )
            }
        </div>

        <p className='text-[15px] font-medium text-start text-black'>Already have an account? <Link to={`/login`} className='text-mainColor1'>login</Link></p>

      </div>
    </div>
  )
}

export default Signup
