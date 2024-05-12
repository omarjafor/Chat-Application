

const OtherUser = () => {
    return (
        <>
            <div className='flex gap-2 text-teal-400 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer'>
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
            <div className='divider my-0 py-0 h-1'></div>
        </>
    );
};

export default OtherUser;