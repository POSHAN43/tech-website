import Profile from "@/components/Images/profile.JPG"
import Image from "next/image";
import Phone from "@/components/Images/phone.png"
const Tailwind = () => {
    return (
        <>
            <nav className="bg-purple-800 text-white flex justify-between">
                <span className="flex items-center ml-4 font-semibold">PhonesMania</span>
                <ul className="px-20 py-4 flex space-x-3 justify-end cursor-pointer">
                    <li>Home</li>
                    <li>About</li>
                    <li>Catlogue</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <main className="bg-fuchsia-100 py-40 pl-20 flex justify-around">
                <div className="main ">
                    <div className="text-3xl">
                        The best phone in the town
                    </div>
                    <p className="text-xs font-extralight w-1/2">A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.</p>
                    <div className="mt-4">
                        <button className="bg-purple-800 rounded-xl text-sm px-5 py-2 text-white mr-4 hover:bg-slate-700">Buy Now</button>
                        <button className="bg-purple-800 rounded-xl text-sm px-5 py-2 text-white hover:bg-slate-700">Contact Us</button>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image src={Phone} className="w-80 h-80"/>
                </div>
            </main>
        </>
    )
}
export default Tailwind;