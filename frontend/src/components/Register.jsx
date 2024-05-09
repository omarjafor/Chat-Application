import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });
    const handleCheckbox = (gender) => {
        setUser({...user, gender})
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "" })
    }
    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-3xl text-white font-bold text-center">Register</h1>
                <form action="" onSubmit={onSubmitHandler}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input 
                        className="w-full input input-bordered h-10" 
                        type="text" name="" id="" 
                        placeholder="Type Full Name" 
                        onChange={(e)=>setUser({...user, fullName:e.target.value})}
                        value={user.fullName}/>
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">User Name</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" name="" id="" placeholder="Type User Name" onChange={(e) => setUser({ ...user, username: e.target.value })} value={user.username}/>
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" name="" id="" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" name="" id="" placeholder="Confirm Password" onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} value={user.confirmPassword}/>
                    </div>
                    <div className="flex items-center my-4 text-white">
                        <div className="flex items-center">
                            <p>Male</p>
                            <input 
                            type="checkbox" 
                            checked={user.gender == "male"}
                            onChange={()=>handleCheckbox("male")}
                            className="checkbox mx-2 checkbox-accent " />
                        </div>
                        <div className="flex items-center">
                            <p>Female</p>
                            <input type="checkbox" 
                            checked={user.gender == "female"}
                            onChange={() => handleCheckbox("female")} 
                            className="checkbox mx-2 checkbox-accent" />
                        </div>
                    </div>
                    <p className="text-center text-white">Already have an account? <Link to='/login' className="bg-cyan-400 rounded-md p-2 ml-2 text-black font-bold"> Login</Link></p>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2 font-bold border border-slate-700">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;