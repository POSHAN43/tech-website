
const MainHeader = () =>{
    return(
        <>
        <div className=" text-[rgb(24,33,84)] flex justify-between py-6 px-8 border-0 border-b fixed w-full bg-white z-30">
          <h1 className="text-xl subpixel-antialiased font-bold">Poshan Kumar</h1>
              <ul className="hidden text-xs subpixel-antialiased sm:flex font-extraligh">
                <li className="mr-6">EXPERIENCE</li>
                <li className="mr-6">EDUCATION</li>
                <li className="mr-6">SKILLS</li>
                <li className="mr-6">PROJECTS</li>
                <li className="mr-6">BLOGS</li>
                <li className="mr-6">CONTACT</li>
              </ul>
        </div>
        </>
    )
}
export default MainHeader;