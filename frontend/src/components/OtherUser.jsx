

const OtherUser = (props) => {
    const user = props.user;
    return (
        <>
            <div className='flex gap-2 text-teal-400 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer'>
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src={user?.profilePhoto} alt="user-profile" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between gap-2">
                        <p className="font-bold">{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    );
};

export default OtherUser;