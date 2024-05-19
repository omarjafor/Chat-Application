import { useSelector } from "react-redux";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    useGetMessages();
    const { messages } = useSelector(store => store.message);
    const { selectedUser } = useSelector(store => store.user);
    return (
        <div className="px-4 flex-1 overflow-auto" >
            {
                
                messages ? (messages?.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    )
                })) 
         : (
                        <div className='h-full flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-white'>No Messages With, </h1>
                            <h1 className='text-4xl my-2 text-white font-bold'>{selectedUser?.fullName} </h1>
                            <h1 className='text-2xl text-white'>Let&apos;s start conversation</h1>
                        </div>
                )
            }
        </div >
    );
};

export default Messages;