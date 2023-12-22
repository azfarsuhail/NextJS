import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Navbar() {
  return(
    <div className='order-2  justify-center items-center flex-col md:flex-row'>
      <Image src={logo} alt="logo" className=" w-23 h-23"/>
        <h1>Welcome to Google</h1>
    </div>
  )
}
