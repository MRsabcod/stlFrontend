import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        imgUrl: '',
        transparent: true,
    },
    reducers: {
        setImgUrl: (state, action) => {
            state.imgUrl = action.payload;
        },
        setTransparent: (state, action) => {
            state.transparent = action.payload;
        },
    },
})

export const { setImgUrl, setTransparent } = userSlice.actions;

export default userSlice.reducer;