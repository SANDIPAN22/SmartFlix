import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { signInUser } from "../utils/slice/UserDataSlice"
import {setCookie, getCookie} from "../utils/cookie"
import { useEffect } from "react"
const LoginForm = () => {
    // if the access token is present then redirect to HOME page || No need of LoginForm
    useEffect(()=>{
        if(getCookie("at")){
            return navigate("/")
        }
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {user : currentUser, isLoading, error} = useSelector((state)=> state.userData)



    const rhfOnSubmit = (data) =>{
        
        dispatch(signInUser(data))
    }

    
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm()
    
    // check whether sign in happened or not

    if(!isLoading && !error && currentUser){
        console.log("✅ Login Done ")
        const {stsTokenManager} = JSON.parse(currentUser)
        
        // need to set the access token as cookie and redirect to Home page
        setCookie("at", stsTokenManager.accessToken, 30)
        return navigate("/")
    }
    // if not sign in then render the form
    return (
        <div className=" w-full h-full ||  md:w-[450px] md:h-[475px]  ||  bg-black bg-opacity-80">
            <div className="mt-52 p-16 || md:mt-0">
                <h1 className="text-white text-4xl font-bold">
                    Sign In
                </h1>
                <form onSubmit={handleSubmit(rhfOnSubmit)}>
                    <div className="mt-10 text-white">
                        <input className="my-3 bg-black border-[1px] border-gray-500 w-72 pl-3 py-3.5 rounded-md" 
                            type="email" name="email"  placeholder="Email or Mobile Number" 
                            {...register("email", {
                            required: "Please enter your email or mobile number",
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Please enter a valid email address"
                            }
                        })}/>
                        {errors.email && <p className="text-red-600"> {errors.email?.message || "Invalid Input"} </p>}
                        <input className="my-3 bg-black border-[1px] border-gray-500 w-72 pl-3 py-3.5 rounded-md" type="password" name="password"  placeholder="Password" {...register("password", {
                            required: "Please Enter Password",
                            minLength: {
                                value:8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}/>
                        {errors.password && <p className="text-red-600"> {errors.password?.message || "Invalid Input"}</p>}
                    </div>
                    <div className="my-3">
                        <input className="bg-red-600 w-72 text-white p-2 cursor-pointer rounded-md" type="submit" disabled={isLoading} value={isLoading ? "Loading...": "Sign In"} />
                    </div>
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                </form>
                <p className="text-white mt-4">If you're new here then <Link to="/signup" className="text-red-600 font-bold"> sign-up</Link>. </p>
            </div>
            
        </div>
    )
}

export default LoginForm