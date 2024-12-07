import FootNav from "../Components/FootNav"
import Carousel from "../Components/Helpers/Carousel"
import Search from "../Components/Helpers/Search"
import MenuSlider from "../Components/MenuSlider"
import Navbar from "../Components/Navbar"
import TopPuntersList from "../Components/TopPuntersList"
import { advert } from "../data/Advert"

function Dashboard() {
    const user = false
    const carouselData = advert
  return (
    <div className={`page ${user ? '!pageGradient' : ''}`}>

        <div className="fixed top-0 left-0 w-full">
            <Navbar />
        </div>

        <div className="mt-[60px]">
            <MenuSlider />
        </div>

        <div className="mt-6">
            <TopPuntersList />
        </div>

        <div className="flex mt-4 items-center justify-center w-full phone:w-full">
            <div className="flex w-[500px]">
                <Search />
            </div>
        </div>

        <div className="mt-4">
            <Carousel autoScroll={true} data={carouselData} style={`min-w-[300px] h-[209px] rounded-[20px]`} />
        </div>
      
        <FootNav />
    </div>
  )
}

export default Dashboard
