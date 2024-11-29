
import {useForm} from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {signUpUser} from "../utils/slice/UserDataSlice"
import {setCookie, getCookie} from "../utils/cookie"
import { useEffect } from "react"
const SignUpForm = () => {
    // if the access token is present then redirect to HOME page || No need of Form
    useEffect(()=>{
        if(getCookie("at")){
            return navigate("/")
        }
    }, [])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // read userData state from redux
    const currentUser = useSelector((state) => state.userData.user)
    const isLoading = useSelector((state) => state.userData.isLoading)
    const error = useSelector((state) => state.userData.error)
  
    const rhfOnSubmit = (data) =>{
        
        // calling redux thunk function to handle sign up 
        dispatch(signUpUser(data))

    }
    

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm()


    // check whether sign up happened or not

    if(!isLoading && !error && currentUser){
        console.log(" Signed UP 😎 ")
        const {stsTokenManager} = JSON.parse(currentUser)
        
        // need to set the access token as cookie and redirect to Home page
        setCookie("at", stsTokenManager.accessToken, 30)
        return navigate("/")
    }
    // not signed up then render the below form
    return (
        <div className=" w-full h-full ||  md:w-[450px] md:h-[550px]  ||  bg-black bg-opacity-80">
            <div className="mt-52 p-16 || md:mt-0">
                <h1 className="text-white text-4xl font-bold">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(rhfOnSubmit)}>
                    <div className="mt-10 text-white">
                    <input className="my-3 bg-black border-[1px] border-gray-500 w-72 pl-3 py-3.5 rounded-md" 
                            type="text" name="email"  placeholder="Username" 
                            {...register("username", {
                            required: "Please enter your Username",
                            minLength: {
                                value: 5,
                                message: "Username must be at least 5 characters long!"
                            }
                        })}/>
                        {errors.username && <p className="text-red-600"> {errors.username?.message || "Invalid Input"} </p>}

                    <input className="my-3 bg-black border-[1px] border-gray-500 w-72 pl-3 py-3.5 rounded-md" 
                        type="email" name="email"  placeholder="Email or Mobile Number" 
                        {...register("email", {
                        required: "Please enter your email or mobile number!",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: "Please enter a valid email address!"
                        }
                    })}/>
                    {errors.email && <p className="text-red-600"> {errors.email?.message || "Invalid Input"} </p>}

                    <input className="my-3 bg-black border-[1px] border-gray-500 w-72 pl-3 py-3.5 rounded-md" type="password" name="password"  placeholder="Password" {...register("password", {
                        required: "Please Enter Password",
                        minLength: {
                            value:8,
                            message: "Password must be at least 8 characters long!"
                        }
                    })}/>
                    {errors.password && <p className="text-red-600"> {errors.password?.message || "Invalid Input"}</p>}
                    
                    </div>
                    <div className="my-3">
                        <input className="bg-red-600 w-72 text-white p-2 cursor-pointer rounded-md" type="submit" disabled={isLoading} value={isLoading ? "Loading": "Sign Up"} />
                    </div>
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                </form>
                <p className="text-white mt-4">If you're a user already then <Link to="/signin" className="text-red-600 font-bold"> sign-in</Link>. </p>
            </div>
            
        </div>
    )
}

export default SignUpForm