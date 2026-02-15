import logo from "../../public/logo.svg";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="flex w-full justify-between items-center px-10 py-5 shadow overflow-hidden">
            <div className="px-3 py-2 flex text-2xl gap-3 items-center relative isolate">
                <div className="absolute right-5 scale-75 top-1/2 blur shadow w-full h-full">
                    <div className="px-3 py-2 flex text-2xl gap-3 items-center relative isolate">
                        <div className="w-full h-full absolute bg-white opacity-70"></div>
                        <Image src={logo} alt="Bolt Studios Logo" width={50}/>
                        <span className="font-bold">Bold Studio</span>
                    </div>
                </div>
                <Image className="z-10" src={logo} alt="Bolt Studios Logo" width={50}/>
                <span className="z-10 font-bold">Bold Studio</span>
            </div>
            <div className="px-2">
                <ul className="flex font-inter gap-5 items-center">
                    <a href="">Home</a>
                    <a href="">Design</a>
                    <a href="">About</a>
                    <Button>Start Building</Button>
                </ul>
            </div>
        </nav>

    )
}