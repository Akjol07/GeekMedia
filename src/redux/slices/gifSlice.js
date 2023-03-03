import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from "./links";
import axios from "axios";

const initialState = {
    gifs: [],
    load: true
}

export const getGifs = createAsyncThunk('gifs', async () => {
    const {data} = await axios.get(links.BASE_URL+'reclam/')
    return data
})

const gifSlice = createSlice({
    name: 'gifSlice',
    initialState,
    reducers: {},
    extraReducers(build){
        build
            .addCase(getGifs.pending, (state) => {
                state.load = true
            })
            .addCase(getGifs.fulfilled, (state, action) => {
                state.gifs = action.payload
                state.load = false
            })
    }
})

export default gifSlice.reducer;
export const gifSelect = state => state.gifs;