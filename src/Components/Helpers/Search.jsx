import SearchImg from '../../assets/search.png'

function Search({ handleChange, id, onClick }) {
  return (
    <div className="flex items-center gap-2 w-full border-[2px] px-3 py-[3px] rounded-full border-mainColor1">
      <div onClick={onClick} className="">
        <img alt='search' src={SearchImg} className='w-[20px]' />
      </div>
      <input id={id} onChange={handleChange} className="w-full bg-transparent border-none outline-none text-white placeholder:text-white" />
    </div>
  )
}

export default Search
