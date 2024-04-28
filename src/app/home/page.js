"use client";
import { useState } from "react";
import MainHeader from "@/components/MainHeader"
import Image from "next/image";
import Profile from "@/components/Images/profile.JPG"
import Facebok from "@/components/Images/facebook.png"
import LinkedIn from "@/components/Images/linkedin.png"
import Twitter from "@/components/Images/twitter.png"
import Instagram from "@/components/Images/instagram.png"
import Github from "@/components/Images/github.png"
import Script from "next/script"
import Modal from "@/components/Modal"
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null)
    const closeModal=()=>{
        setShowModal(false);
    }
    const openModal=(id)=>{
        setCurrentProject(id)
        setShowModal(true)

    }
    const callLeft =(val)=>{
        return `left-[${val}%]`
    }
    const Skills = [
        {
            name:"Language",
            lan:[
                {
                    name: "Java",
                    star:'80%'
                },
                {
                    name: "JavaScript",
                    star:'90%'
                },
                {
                    name: "python",
                    star: '60%'
                }
            ]
        },
        {
            name: "Framwork",
            lan:[
                {
                    name: "React Js",
                    star: '85%'
                },
                {
                    name: "Next Js",
                    star: '85%'
                },
                {
                    name: "Redux",
                    star: '70%'
                },
                {
                    name: "Vue JS",
                    star: '90%'
                },
                {
                    name: "Vuex",
                    star: '90%'
                },
                {
                    name: "Fast API",
                    star: "70%"
                },
                {
                    name: "Node Js",
                    star: '60%'
                }
            ]
        },
        // {
        //     name: "Mark up Language",
        //     lan:[
        //         {
        //             name:"CSS",
        //             star:80
        //         },
        //         {
        //             name:"Tailwind CSS",
        //             star:85
        //         }
        //     ]
        // }
    ]
    const Projects = [
        {
        id: 1,
        name: "Console Product",
        Roles: "Frontend & Backend",
        technology: "React JS, Javascript, Fast API",
        description: "This website serves as a distributor, manufacturer, and customer portal. Also referred to as an onboarding web portal, the portal offers the distributor an API signature that they can use to verify whether the product is compatible with their business. Additionally, it provides user administration, logs, API keys, API monitoring, and a support system. The administrator can monitor their data with a graphical depiction of the API request.",
        RolesResponsibility: [{
            id:1,
            name:"Developed console product by using ReactJs and NextJs."
        },{
            id:1,
            name:"Build user authentication, forget password and integrate with AWS Cognito."
        },{
            id:2,
            name:" Implement module functionalities and integrate with backend APIs for user management, managing organization, API listing, API monitoring, API logs, API keys."
        },{
            id:3,
            name:"Build a customer support system with the help of Jira service management (JSM) using its rest API call."
        },{
            id:4,
            name:"Implement functionalities role base access control for customers in frontend as well as backend."
        },{
            id:5,
            name:"Implement backend APIs for modules like API log, user management, managing the organization, API monitoring, API listing using fast API framework."
        }]
    },{
        id: 2,
        name: "Insurance Product",
        Roles: "Frontend & Backend",
        technology: "React JS, Javascript, Fast API",
        description: "A web application that allows B2B and B2C transactions without the need for paperwork to obtain insurance. Customers are free to choose their distributor and insurance company. The customer might begin their journey through an agent or on their own.  This programme provided a bridge between the manufacturer and distributor, resolving real-world challenges. Purchasing insurance from a reputable distributor and manufacturer is more convenient for the customer.",
        RolesResponsibility: [{
            id:1,
            name:"Developed and design new pages for existing product by using React Js and NextJs."
        },{
            id:2,
            name:"Resolved bugs and worked on feature enhancement."
        },{
            id:3,
            name:"Implement generic form validation."
        },{
            id:4,
            name:"Integrated manufacturer payment gateway with UI."
        },{
            id:5,
            name:"Implemented dynamic validation in UI."
        },{
            id:6,
            name:"Implemented rest Api at application layer by using Fast API."
        },{
            id:7,
            name:"Implemented encryption and decryption request, response for backend as well as fronted."
        }]
    },{
        id: 3,
        name: "Fixed Deposit",
        Roles: "Frontend",
        technology: "React JS, Javascript",
        description: "This website connects manufacturers and distributors. Customers can open a fixed deposit account with the appropriate bank in accordance with the best offer available, suitability, and flexibility. Customers can connect with this application directly or indirectly without completing paperwork. One major issue was resolved: instead of having to visit each branch or their own product, customers could now access all of the products in one place by using this application.",
        RolesResponsibility: [{
            id:1,
            name:"Developed UI from scratch by using Tailwind CSS, React JS and Next JS."
        },{
            id:2,
            name:"Integrated frontend and backend with a generic API call."
        },{
            id:3,
            name:"Design develops and maintains the application as per user stories defined."
        },{
            id:4,
            name:"developed reusable components and distributed over the application."
        },{
            id:5,
            name:"Centralized the API request and response."
        },{
            id:6,
            name:"Implement backend APIs for modules like API log, user management, managing the organization, API monitoring, API listing using fast API framework."
        }]
    },{
        id: 4,
        name: "Saving Product",
        Roles: "Frontend & Backend",
        technology: "React JS, Javascript Fast API",
        description: "This website connects manufacturers and distributors. Customers can open a Saving account with the appropriate bank in accordance with the best offer available, suitability, and flexibility. Customers can connect with this application directly or indirectly without completing paperwork. One major issue was resolved: instead of having to visit each branch or their own product, customers could now access all of the products in one place by using this application.",
        RolesResponsibility: [{
            id:1,
            name:"Integrated UI with the backend APIs."
        },{
            id:2,
            name:"implemented proxy API to call another service at application layer with the help of Fast API."
        },{
            id:3,
            name:"Involved in production bugs."
        },{
            id:4,
            name:"Manage 2-3 member in team, Jira task assignment, and story creation."
        },{
            id:5,
            name:"Implemented encryption and decryption request, response for backend as well as fronted"
        }]
    },{
        id: 5,
        name: "Health UI",
        Roles: "Frontend",
        technology: "React JS, Javascript",
        description: "A web application that allows B2B and B2C transactions without the need for paperwork to obtain health insurance. Customers are free to choose their distributor and health insurance company. The customer might begin their journey through an agent or on their own. This programme provided a bridge between the manufacturer and distributor, resolving real-world challenges. Purchasing insurance from a reputable distributor and manufacturer is more convenient for the customer.",
        RolesResponsibility: [{
            id:1,
            name:"Developed, design and maintain new UI from scratch by using VueJs."
        },{
            id:2,
            name:"Working as a team lead and managing 2-3 members."
        },{
            id:3,
            name:"Participated with the business team to understand the design requirement."
        },{
            id:4,
            name:"Integrating backend API with UI.\item Developed proxy APIs by using fast API."
        },{
            id:5,
            name:"Implement functionalities role base access control for customers in frontend as well as backend."
        },{
            id:6,
            name:"Implement backend APIs for modules like API log, user management, managing the organization, API monitoring, API listing using fast API framework."
        }]
    }]
    return (
      <>
        <MainHeader />
        <div className="md:flex">
          <div className=" h-[400px] md:h-[600px] md:w-[85%] bg-[rgb(247,246,246)]"></div>
          <div className=" h-[400px] md:h-[600px] w-full bg-[rgb(230,218,206)]">
          </div>
        </div>
        <div className="absolute flex justify-center top-[113px] md:top-[206px] left-0 right-0">
          <div className="bg-white  mx-10 md:flex md:w-[600px] w-[350px] shadow-2xl rounded-md">
            <div className="md:w-1/2 bg-[rgb(244,236,230)] flex justify-center h-80 rounded-t-md">
              <div className="text-[rgb(24,33,84)]">
                <Image src={Profile} className="w-40 h-40 mt-8 rounded-full" />
                <h1 className=" font-light text-[20px] mt-6 text-center">
                  Poshan Kumar
                </h1>
                <p className="text-sm font-medium text-center">
                  SOFTWARE ENGINEER
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:w-1/2">
              <div className="text-[rgb(24,33,84)] font-sans tracking-normal w-48">
                <ul>
                  <li className="my-4">
                    <p className="text-sm font-medium ">Mobile Number:</p>
                    <span className="text-sm font-light ">+91 9575708736</span>
                  </li>
                  <li className="my-4">
                    <p className="text-sm font-medium ">Email:</p>
                    <span className="text-sm font-light ">
                      poshankk43@gmail.com
                    </span>
                  </li>
                  <li className="my-4">
                    <p className="text-sm font-medium ">Date of Birth:</p>
                    <span className="text-sm font-light ">
                      29 November 1994
                    </span>
                  </li>
                  <li className="my-4">
                    <p className="text-sm font-medium ">Address:</p>
                    <span className="text-sm font-light ">
                      Makundpur, Korba, Chhattisgarh, 495671{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center top-[715px] md:top-[524px] left-0 right-0">
          <div className="flex justify-center py-4 bg-[rgb(24,33,83)] w-[350px] md:w-[600px] mx-10 mt-2 rounded-md">
            <ul className="flex">
              <li className="mr-6">
              <a href="https://www.linkedin.com/feed/">
                <Image src={LinkedIn} width={30} height={30} />
                </a>
              </li>
              <li className="mr-6">
                <a href="https://www.linkedin.com/feed/">
                <Image src={Facebok} width={30} height={30} />
                </a>
              </li>
              <li className="mr-6">
                <Image src={Twitter} width={30} height={30} />
              </li>
              <li className="mr-6">
              <a href="https://www.instagram.com/poshan_ak47/">
                <Image src={Instagram} width={30} height={30} />
                </a>
              </li>
              <li className="mr-6">
              <a href="https://github.com/POSHAN43">
                <Image src={Github} width={30} height={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Introduction */}
        <div className="flex justify-center bg-[rgb(241,241,241)] py-10">
          <div className="w-60 md:w-80 text-[rgb(24,33,84)] text-center">
            <h1 className="mb-4 text-lg ">Hello! I am Poshan</h1>
            <p className="font-sans text-sm leading-5 tracking-normal font-extralight">
              I am a Software Engineer, having 3+ year experience in IT
              industry, Experience in Javascript, ReactJs, Redux, NextJs, VueJs,
              Vuex along with backend fastApi. Eager to take on new challenging
              tasks that utilize my knowledge and skil. I am very harworking,
              flexible and commited.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="py-10 border-b">
          <h1 className="text-center text-xl text-[rgb(24,33,84)]">
            EXPERIENCE
          </h1>
        </div>

        {/* EXPERIENCE CONTENT */}
        <div className="text-[rgb(24,33,84)] my-6 flex justify-center items-center md:hidden">
          <ul className="mx-12 list-disc w-96">
            <li className="mb-4">
              <h1 className="text-sm font-medium tracking-normal">
                2023 - Present
              </h1>
              <p className="text-sm font-light tracking-normal">
                Software Engineer
              </p>
              <p className="text-xs font-light tracking-normal">
                PROPERTY PISTOL REALTY PVT. LTD.
              </p>
              <span className="text-sm tracking-normal font-extralight">
                Working as a frontend developer to manage the product and
                providing quality, standards. Working with high potential team
                member and colaborate ideas with product management.
              </span>
            </li>
            <li>
              <h1 className="text-sm font-medium tracking-normal">
                2021 - 2023
              </h1>
              <p className="text-sm font-light tracking-normal">SDE-II</p>
              <p className="text-xs font-light tracking-normal">
                9 PLATFORM TECHNOLOGY PVT. LTD. (1SILVERBULLET)
              </p>
              <span className="text-sm tracking-normal font-extralight">
                Working as a frontend developer to manage the product and
                providing quality, standards. Working with high potential team
                member and colaborate ideas with product management.
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Content desktop view */}
        <div className="hidden md:block bg-[rgb(247,246,246)]">
          <div className="text-[rgb(24,33,84)] py-6 flex justify-center ">
            <ul>
              <li className="mb-24 text-right">
                <h1 className="text-xs font-medium tracking-normal">
                  2023 - Present
                </h1>
                <p className="text-sm font-light tracking-normal">
                  Software Engineer
                </p>
              </li>
              <li className="ml-16 text-right">
                <p className="text-xs font-normal tracking-normal">
                  9 PLATFORM TECHNOLOGY PVT. LTD. (1SILVERBULLET)
                </p>
                <span className="text-sm tracking-normal font-extralight ">
                  Working as a frontend developer to manage the product and
                  providing quality, standards. Working with high potential team
                  member and colaborate ideas with product management.
                </span>
              </li>
            </ul>
            <div className="relative h-[230px] border-r left-[34px] top-[9px]"></div>
            <ul className="z-10 mx-12 list-disc">
              <li className="mb-8 mr-16">
                <p className="text-xs font-normal tracking-normal">
                  PROPERTY PISTOL REALTY PVT. LTD.
                </p>
                <span className="text-sm tracking-normal font-extralight">
                  Working as a frontend developer to manage the product and
                  providing quality, standards. Working with high potential team
                  member and colaborate ideas with product management.
                </span>
              </li>
              <li>
                <h1 className="text-xs font-medium tracking-normal">
                  2021 - 2023
                </h1>
                <p className="text-sm font-light tracking-normal">SDE-II</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Education */}
        <div className="py-6 border-t border-b">
          <h1 className="text-center text-xl tracking-normal text-[rgb(24,33,84)]">
            EDUCATION
          </h1>
        </div>

        {/* Education Content */}
        <div className="text-[rgb(24,33,84)] mt-6 flex justify-center items-center md:hidden">
          <ul className="mx-12 list-disc w-96">
            <li className="mb-4">
              <h1 className="text-sm font-medium tracking-normal">
                2019 - 2021
              </h1>
              <p className="text-sm font-light tracking-normal">M.tech</p>
              <p className="text-sm font-light tracking-normal">NIT Rourkela</p>
              <span className="text-sm tracking-normal font-extralight">
                Computer Science Specialization
              </span>
            </li>
            <li className="mb-4">
              <h1 className="text-sm font-medium tracking-normal">
                2014 - 2018
              </h1>
              <p className="text-sm font-light tracking-normal">B.Tech</p>
              <p className="text-sm font-light tracking-normal">NIT Raipur</p>
              <span className="text-sm tracking-normal font-extralight">
                Computer Science and Engineering
              </span>
            </li>
            <li className="mb-4">
              <h1 className="text-sm font-medium tracking-normal">2011-2012</h1>
              <p className="text-sm font-light tracking-normal">Intermediate</p>
              <p className="text-sm font-light tracking-normal">
                Govt. H. S. School Barpali Sargbudiya (Korba)
              </p>
              <span className="text-sm tracking-normal font-extralight">
                Physics, Chemestry, Maths
              </span>
            </li>
            <li className="mb-4">
              <h1 className="text-sm font-medium tracking-normal">2010-2011</h1>
              <p className="text-sm font-light tracking-normal">
                Matriculation
              </p>
              <p className="text-sm font-light tracking-normal">
                Govt. H. S. School Sohagpur (Korba)
              </p>
              <span className="text-sm tracking-normal font-extralight">
                Physics, Chemestry, Maths
              </span>
            </li>
          </ul>
        </div>

        {/* Education Desktop view */}
        <div className="hidden md:block">
          <div className="text-[rgb(24,33,84)] mt-6 flex justify-center">
            <ul className="text-right">
              <li className="mb-6">
                <h1 className="text-xs font-medium tracking-normal">
                  2019 - 2021
                </h1>
                <p className="text-sm font-light tracking-normal">M.tech</p>
              </li>
              <li className="mb-6">
                <p className="text-xs font-normal tracking-normal">
                  NIT Raipur
                </p>
                <span className="text-sm tracking-normal font-extralight">
                  Computer Science and Engineering
                </span>
              </li>
              <li className="mb-6">
                <h1 className="text-xs font-medium tracking-normal">
                  2011-2012
                </h1>
                <p className="text-sm font-light tracking-normal">
                  Intermediate
                </p>
              </li>
              <li className="mb-6">
                <p className="text-xs font-normal tracking-normal">
                  Govt. H. S. School Sohagpur (Korba)
                </p>
                <span className="text-sm tracking-normal font-extralight">
                  Physics, Chemestry, Maths
                </span>
              </li>
            </ul>
            <div className="relative h-64 border-r left-[34px] top-[9px]"></div>
            <ul className="z-10 mx-12 list-disc ">
              <li className="mb-4">
                <p className="text-xs font-normal tracking-normal">
                  NIT Rourkela
                </p>
                <span className="text-sm tracking-normal font-extralight">
                  Computer Science Specialization
                </span>
              </li>
              <li className="mb-4">
                <h1 className="text-xs font-medium tracking-normal">
                  2014 - 2018
                </h1>
                <p className="text-sm font-light tracking-normal">B.Tech</p>
              </li>
              <li className="mb-4">
                <p className="text-xs font-normal tracking-normal">
                  Govt. H. S. School Barpali Sargbudiya (Korba)
                </p>
                <span className="text-sm tracking-normal font-extralight">
                  Physics, Chemestry, Maths
                </span>
              </li>
              <li className="mb-4">
                <h1 className="text-xs font-medium tracking-normal">
                  2010-2011
                </h1>
                <p className="text-sm font-light tracking-normal">
                  Matriculation
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="py-6 mt-4 border-t border-b">
          <h1 className="text-center text-xl tracking-normal text-[rgb(24,33,84)]">
            Projects
          </h1>
        </div>

        {/* Projects Content */}
        {/* <div className="md:flex md:h-[1000px]">
        <div className=" md:w-[70%] bg-[rgb(230,218,206)]">gdtghd</div>
          <div className=" w-full bg-[rgb(247,246,246)]">gdfg</div>
          </div> */}
        <div className="text-[rgb(24,33,84)] flex justify-center items-center bg-[rgb(230,218,206)]">
        
          <div className="grid grid-cols-1 gap-4 mt-16 ">
            {Projects.map((item,index) => {
              return (
                <div key={index} className="bg-[rgb(247,246,246)] h-[460px] w-[350px] md:w-[600px] md:h-[350px] shadow-2xl mb-16 rounded-tl-lg rounded-br-lg md:flex ">
                  <div className="h-[70%] md:h-[350px] md:w-[60%]">
                    <div className="flex mt-6">
                    <div className="bg-[rgb(56,73,161)] w-2 h-12"></div>
                    <div className="ml-4">
                    <h1 className="text-base font-bold ">{item.name}</h1>
                    <p className="text-sm text-slate-800">{item.Roles}</p>
                    </div>
                    </div>
                    <div className="text-[rgb(24,33,84)] flex justify-center mt-2">
                        <p className="text-[14px] text-justify w-80 font-extralight">{item.description}</p>
                    </div>
                    <div className="flex justify-center mt-4 w-[350px]">
                        <button className="p-2 text-base text-white font-normal border rounded-md bg-[#3f964b]  border-slate-500" onClick={()=>openModal(index)}>Roles & Responsibilities</button>
                    </div>
                  </div>
                  <div className="h-[30%] md:h-[350px] md:w-[40%] bg-[rgb(112,126,198)] rounded-br-lg"></div>
                </div>
              );
            })}
          </div>
        </div>
       
       {/* Skills */}
       <div className="py-6 border-t border-b">
          <h1 className="text-center text-xl tracking-normal text-[rgb(24,33,84)]">
            Skills
          </h1>
        </div>
        
        {/* Skills Content */}
        
            <div className="flex justify-center mt-4">
            <ul className="ml-10 list-disc">
                {
                    Skills.map((item,index)=>{
                        return(
                            
                            <li key={index}>
                                <h1 className="text-base font-bold text-[rgb(24,33,84)]">{item.name}</h1>
                                <ul>
                                    {
                                        item.lan.map((data,ind)=>{
                                            return(
                                                <li key={ind} className="relative mb-4 mr-16">
                                                <p className="text-sm text-slate-600">{data.name}</p>
                                                
                                                <input type="range" min='0' max='100' className="w-[350px] range-slider bg-gradient-to-r from-violet-500 to-fuchsia-500"/>
                                                <div className={`selector h-[50px] w-[50px] absolute top-[27px] ml-[14px]`} style={{'left':`${data.star}`}}>
                                                    <div className="select-btn"></div>
                                                    <div className="select-value">{data.star}</div>
                                                </div>
                                               
                                               </li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                           </li>
                
                        )
                    })
                }
            </ul>
                
            </div>
        
        {/* Skills */}
       <div className="flex justify-center border bg-[rgb(247,246,246)] mt-4 pb-8">
        <div>
       <h1 className="text-center text-xl tracking-normal text-[rgb(24,33,84)] my-6">
            CONTACT ME
          </h1>
    
        <div className="w-[380px] md:w-[700px] md:flex md:justify-between">
          <div className="">
            <form className="md:w-[350px] text-sm text-[rgb(24,33,84)] subpixel-antialiased font-light">
              <div className="flex justify-between mb-2">
              <label>
                <p>First Name</p>
                <input type="text" className=" border border-slate-400 focus:outline-none focus:ring-1 focus:ring-[rgb(56,73,161)]"/>
              </label>
              <label>
                <p>Last Name</p>
                <input type="text" className=" border border-slate-500 focus:outline-none focus:ring-1 focus:ring-[rgb(56,73,161)]"/>
              </label>
              </div>

              <label>
                <p>Email</p>
                <input type="text" className="w-full mb-2 border h-7 border-slate-400 focus:outline-none focus:ring-1 focus:ring-[rgb(56,73,161)]"/>
              </label>
              <label>
                <p>Type your message here...</p>
                <textarea type="text" className="w-full h-24 mb-2 border border-slate-400 focus:outline-none focus:ring-1 focus:ring-[rgb(56,73,161)]"/>
              </label>

              <button type="submit" className="w-full py-1 border border-slate-400 bg-[rgb(56,73,161)] text-white">Submit</button>
            </form>
          </div>
          <div className="flex items-center justify-center my-4 md:w-[350px]">
              <div className="text-[rgb(24,33,84)] font-sans tracking-normal">
                <div className="text-center">
                   <p className="text-xl font-bold md:text-left">Poshan Kumar</p>
                    <span className="text-sm font-normal">SOFTWARE ENGINEER</span>
                </div>
                <ul className="flex justify-between w-[380px] md:w-[120px] md:block">
                  <li className="my-4">
                    <p className="text-sm font-medium ">Mobile Number:</p>
                    <span className="text-sm font-light ">+91 9575708736</span>
                  </li>
                  <li className="my-4">
                    <p className="text-sm font-medium ">Email:</p>
                    <span className="text-sm font-light ">
                      poshankk43@gmail.com
                    </span>
                  </li>
                </ul>
                <div className="w-full border border-t-0 border-slate-400"></div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="py-6 border-t-0 border-b-0">
          <h1 className="text-center text-xs tracking-normal text-[rgb(24,33,84)]">
          © 2024 By Poshan Kumar
          </h1>
        </div>
        {/* MODEL */}
        {showModal ? (
        <Modal closeModal={closeModal} openModal={openModal} Projects={Projects} currentProject={currentProject}/>
        ) : null}
      </>
    );
}
export default Home