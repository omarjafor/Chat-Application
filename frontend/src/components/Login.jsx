import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/user/login`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            navigate('/')
            console.log(res);
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        setUser({
            username: "",
            password: ""
        })
    }
    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-3xl text-white font-bold text-center">Login</h1>
                <form action="" onSubmit={onSubmitHandler}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">User Name</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" name="" id="" placeholder="Type your username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" name="" id="" placeholder="Type your password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <p className="text-center mt-3 mb-2 text-white">Don&apos;t have an account? <Link to='/register' className="bg-cyan-400 rounded-md p-2 ml-2 text-black font-bold">Register</Link></p>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm font-bold mt-2 border border-slate-700">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;