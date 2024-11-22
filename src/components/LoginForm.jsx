

const LoginForm = () => {
  return (
    <div className=" w-full h-full ||  md:w-[450px] md:h-96  ||  bg-black bg-opacity-80">
        <div className="mt-52 p-16 || md:mt-0">
            <h1 className="text-white text-4xl font-bold">
                Sign In
            </h1>
            <div className="mt-10">
                <input className="my-3 bg-black border-[1px] border-gray-500 pr-24 pl-3 py-3.5 rounded-md" type="email" name="" id="" placeholder="Email or Mobile Number"/>
                <input className="my-3 bg-black border-[1px] border-gray-500 pr-24 pl-3 py-3.5 rounded-md" type="email" name="" id="" placeholder="Password"/>
            </div>
            <div className="my-3">
                <input className="bg-red-600 w-72 text-white p-2 cursor-pointer rounded-md" type="button" value="Sign In" />
            </div>
            
        </div>
        
    </div>
  )
}

export default LoginForm