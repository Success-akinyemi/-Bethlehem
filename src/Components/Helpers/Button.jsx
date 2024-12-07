
function Button({ disabled, onCLick, style, text }) {
  return (
    <button disabled={disabled} onClick={onCLick} className={`bg-mainColor1 text-white cursor-pointer flex items-center justify-center w-full px-5 py-4 rounded-[20px] ${style}`}>
      {text}
    </button>
  )
}

export default Button
