import Image from "next/image"
import logo from "../../../public/logo.png"
import Link from "next/link"

// export default function Navbar() {
//     return(
//       <div className='flex w-full h-10 justify-between fixed order-1'>
//             <Image src={logo} alt="logo" className=" w-10 h-10"/>
//             <ul className="flex justify-center gap-5 p-2 items-center">
//                 <Link href={"../"}>Home</Link>
//                 <Link href={"../About"}>About</Link>
//                 <Link href={""}>Contact</Link>
//                 <Link href={"#"}>Blog</Link>
//             </ul>
//       </div>
//     )
//   }
export default function Navbar() {
    return (
      <div className='flex w-full h-16 justify-between fixed top-0 bg-gray-800 text-white items-center rounded-full m-4 mr-10 p-10'>
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <ul className="flex justify-center gap-5 p-2 items-center">
          <Link href="/">Home</Link>
          <Link href="/Applications">Applications</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </ul>
      </div>
    );
  }
  