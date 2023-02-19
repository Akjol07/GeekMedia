import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from "./links";
import axios from "axios";

const initialState = {
    videos: {count: 0},
    load: true
}

export const getVideos = createAsyncThunk('videos', async (params) => {
    const {data} = await axios.get(`${links.BASE_URL}media/`, {params})
    return data;
})


const videosSlice = createSlice({
    name: 'videosSlice',
    initialState,
    reducers: {},
    extraReducers(build){
        build
            .addCase(getVideos.pending, (state) => {
                state.load = true
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload
                state.load = false
            })
    }
})

export default videosSlice.reducer;
export const videosSelect = state => state.videos
