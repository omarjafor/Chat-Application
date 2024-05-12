import Messages from "./Messages";
import SendInput from "./SendInput";


const MessageBox = () => {
    return (
        <div className="md:min-w-[550px] flex flex-col">
            <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg" alt="user-profile" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-2">
                        <p className="font-bold">Omar Jafor Chowdhury</p>
                    </div>
                </div>
            </div>
            <Messages />
            <SendInput />
        </div>
    );
};

export default MessageBox;