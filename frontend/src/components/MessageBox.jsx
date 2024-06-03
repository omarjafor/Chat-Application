import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";
import { useEffect } from "react";
import { setSelectedUser } from "../redux/userSlice";

const MessageBox = () => {
    const { selectedUser, authUser } = useSelector(store => store.user);
    
    const dispatch = useDispatch();
    useEffect( () => {
        return () => dispatch(setSelectedUser(null))
    } , [dispatch])
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className="md:min-w-[550px] flex flex-col">
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                            <div className="avatar online">
                                <div className="w-12 rounded-full">
                                    <img src={selectedUser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className="flex justify-between gap-2">
                                    <p className="font-bold"> {selectedUser?.fullName} </p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi, { '' + authUser?.fullName} </h1>
                        <h1 className='text-2xl text-white'>Let&apos;s start conversation</h1>
                    </div>
                )
            }
        </>

    );
};

export default MessageBox;