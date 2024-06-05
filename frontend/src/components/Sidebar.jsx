import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSearching } from "../redux/userSlice";

const Sidebar = () => {
    const { otherUsers, searching } = useSelector(store => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOuthandle = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
            navigate('/login');
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    const searchHandler = (e) => {
        e.preventDefault();
        const searchResult = otherUsers?.find((user) => user?.fullName?.toLowerCase().includes(searching.toLowerCase()));
        if (!searchResult){
            toast.error('User not found!')
        }
    }

    return (
        <div className="border-r border-slate-500 p-4 flex flex-col">
            <form onSubmit={searchHandler} action="" className="flex items-center gap-2">
                <input 
                value={searching}
                    onChange={(e) => dispatch(setSearching(e.target.value))}
                className="input input-bordered rounded-md" type="text" name="" id="" placeholder="Search......" />
                <button type="submit" className="btn bg-zinc-700 text-white">
                    <BiSearchAlt2 className='w-6 h-6 outline-none' />
                </button>
            </form>
            <div className="divider px-3"></div>
            <OtherUsers />
            <div className="mt-2">
                <button onClick={logOuthandle} className="btn btn-sm">Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;