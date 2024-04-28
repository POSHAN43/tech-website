


const Modal = ({closeModal,openModal, Projects, currentProject}) => {
  
  return (
    <>
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-md mx-auto my-6 md:max-w-2xl">
              <div className="relative flex flex-col w-full bg-[rgb(247,244,244)] border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t ">
                  <div>
                  <h3 className="text-base text-[rgb(24,33,84)] font-bold">{Projects[currentProject].name}</h3>
                  <p className="text-sm text-slate-800">Roles & Responsibilities</p>
                  </div>
                  <button
                    className="float-right text-black bg-transparent border-0"
                    onClick={() => closeModal(false)}
                  >
                    <span className="block w-6 h-6 py-0 text-lg font-light text-black opacity-7">
                      x
                    </span>
                  </button>
                </div>
                <div>
                    <ul className="ml-10 my-4 antialiased list-disc text-[rgb(24,33,84)] text-sm leading-loose">
                        {
                            Projects[currentProject].RolesResponsibility.map((item,index)=>{
                                return(
                                    <>
                                    <li key={index}>{item.name}</li>
                                    </>
                                )
                            })
                        }
                        {/* <li>Developed console product by using ReactJs and NextJs.</li>
                        <li>Build user authentication, forget password and integrate with AWS Cognito.</li>
                        <li>Implement module functionalities and integrate with backend APIs for user management, managing organization, API listing, API monitoring, API logs, API keys.</li>
                        <li>Build a customer support system with the help of Jira service management (JSM) using its rest API call.</li>
                        <li>Implement functionalities role base access control for customers in frontend as well as backend.</li>
                        <li>Implement backend APIs for modules like API log, user management, managing the organization, API monitoring, API listing using fast API framework.</li> */}
                    </ul>
                </div>
                
                <div className="flex items-center justify-end p-6 h-20 border-t border-solid rounded-b bg-[rgb(56,73,161)] border-blueGray-200">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </>
      
    </>
  );
};

export default Modal;