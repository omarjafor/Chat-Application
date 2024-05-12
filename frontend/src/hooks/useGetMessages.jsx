import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user);
    
    useEffect( () => {
        const fetchGetMessages = async() => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchGetMessages();
    } , [selectedUser])
};

export default useGetMessages;