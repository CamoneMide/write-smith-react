const Button = ({label, href}) => {
  return (
    <a className='text-[#FFF] bg-[#013321] text-[13px] font-[600] ftRoboto py-[15px] px-[50px] rounded-[4px]' href={href}>{label}</a>
  )
}

export default Button