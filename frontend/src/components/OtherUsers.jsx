import { useSelector } from "react-redux";
import useOtherUsers from "../hooks/useOtherUsers";
import OtherUser from "./OtherUser";


const OtherUsers = () => {
    // custom hook 
    useOtherUsers();
    const { otherUsers } = useSelector(store=>store.user);
    if(!otherUsers) return;

    return (
        <div className="overflow-auto flex-1">
            {
                otherUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user}/>
                    )
                })
            }
        </div>
    );
};

export default OtherUsers;