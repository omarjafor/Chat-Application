import { useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUser } from "../redux/userSlice";


const useOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get('http://localhost:8080/api/v1/user/');
                // store redux 
                dispatch(setOtherUser(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    }, [dispatch])
};

export default useOtherUsers;