import { MdOutlineEmail } from "react-icons/md";

function Profile() {
    const user = false
    const bgBlack = true

  return (
    <div className={`pageBlack flex flex-col items-center`}>
        <h1 className="title mt-8 w-full">MY ACCOUNT</h1>

        <div className="mt-4 flex flex-col gap-4 rounded-[15px] w-[60%] phone:w-[95%] py-6 px-3 bg-dark-green-3">
            <div className="bg-dark-green card2">
                <div className="flex items-start justify-between">
                    <div className=""></div>
                    
                    <div className="">
                        <MdOutlineEmail className="text-[28px] text-[#FCDDEC]" />
                    </div>
                </div>

                <div className=""></div>

                <div className=""></div>

            </div>

            <div className="bg-dark-green card2"></div>

            <div className="bg-dark-green card2"></div>

            <div className="bg-dark-green card2"></div>

            <div className="bg-dark-green card2"></div>

        </div>
    </div>
  )
}

export default Profile
