import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import io from 'socket.io-client';

const Home = () => {
    const [socket, setSocket] = useState(null);
    const {authUser} = useSelector(store => store.user);

    useEffect( () => {
        if(authUser){
            const socket = io('http://localhost:8080', {

            });
            setSocket(socket);
        }
    } , [authUser])

    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <MessageBox />
        </div>
    );
};

export default Home;