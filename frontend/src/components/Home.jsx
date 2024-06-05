import { useEffect } from "react";
import MessageBox from "./MessageBox";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';
import { setSocket } from "../redux/socketSlice";
import { setOnlineUsers } from "../redux/userSlice";

const Home = () => {
    
    const { socket } = useSelector(store => store.socket);
    const { authUser } = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authUser) {
            const socket = io('http://localhost:8080', {
                query: {
                    userId: authUser._id
                }
            });
            dispatch(setSocket(socket));

            socket.on('getOnlineUsers', (onlineUsers) => {
                dispatch(setOnlineUsers(onlineUsers));
            });
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                dispatch(setSocket(null));
            }
        }
    }, [authUser, dispatch, socket])

    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <MessageBox />
        </div>
    );
};

export default Home;