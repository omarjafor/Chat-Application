import { useEffect } from "react";
import MessageBox from "./MessageBox";
import Sidebar from "./Sidebar";

const Home = () => {

    useEffect( () => {

    } , [])

    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <MessageBox />
        </div>
    );
};

export default Home;