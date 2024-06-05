import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null,
        otherUsers: null,
        selectedUser: null,
        onlineUsers:null,
        searching:''
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        },
        setOtherUser: (state, action) => {
            state.otherUsers = action.payload
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
        setSearching: (state, action) => {
            state.searching = action.payload
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload
        }
    }
});
export const { setAuthUser, setOtherUser, setSelectedUser, setSearching, setOnlineUsers } = userSlice.actions;
export default userSlice.reducer;