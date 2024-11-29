import { Outlet } from "react-router-dom"
const LoginPage = () => {
  return (
    <>  <div className="background-image w-screen h-screen bg-no-repeat bg-cover  bg-fixed   "
        style={{backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.7),
                    rgba(0, 0, 0, 0)), url('https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg')`, }}
    >

        <img className="absolute || md:w-56 md:ml-56" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        
        <div className="flex justify-center items-center  w-full h-full">
            <Outlet/>
        </div>

            
            
        </div>
    </>
  )
}

export default LoginPage