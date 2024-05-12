import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";


const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user)
    const selectedUserHandle = (user) => {
        dispatch(setSelectedUser(user))
    }
    return (
        <>
            <div onClick={() => selectedUserHandle(user)} className={` ${selectedUser?._id === user?._id ? 'bg-zinc-200 text-black' :'text-teal-400'} flex gap-2  hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={user?.profilePhoto} alt="user-profile" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-2">
                        <p className="font-bold">{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    );
};

export default OtherUser;