import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import Image from "next/image";
  import Link from "next/link";
  import logo from "../../../public/logo.png";
  
  export default function Navbar() {
    return (
      <div className="w-full flex  bg-slate-500 justify-between fixed top-0 z-50">
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <ul className="flex justify-center gap-5 p-2 items-center ">
          <Link href="/" className="hidden md:flex">Home</Link>
          <Link className="hidden md:flex" href="/About">About</Link>
          <Link className="hidden md:flex" href="/Applications">Applications</Link>
          <Link className="hidden md:flex" href="/Contact">Contact</Link>
          <Sheet>
            <SheetTrigger className="md:hidden">{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>
}</SheetTrigger>
            <SheetContent className=" bg-slate-700">
              <SheetHeader>
                <SheetTitle className=" text-white">Menu</SheetTitle>
                <SheetDescription className="text-slate-300">
                  <ul className="flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/Applications">Applications</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ul>
      </div>
    );
  }
  