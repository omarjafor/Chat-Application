import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
                <h1 className="text-3xl text-white font-bold text-center">Register</h1>
                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" name="" id="" placeholder="Type Full Name"/>
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">User Name</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" name="" id="" placeholder="Type User Name" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" name="" id="" placeholder="Password" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" name="" id="" placeholder="Confirm Password" />
                    </div>
                    <div className="flex items-center my-4 text-white">
                        <div className="flex items-center">
                            <p>Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2 checkbox-accent " />
                        </div>
                        <div className="flex items-center">
                            <p>Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2 checkbox-accent" />
                        </div>
                    </div>
                    <p className="text-center text-white">Already have an account? <Link to='/login' className="bg-cyan-400 rounded-md p-2 ml-2 text-black font-bold"> Login</Link></p>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;