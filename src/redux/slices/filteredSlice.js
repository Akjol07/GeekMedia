import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from "./links";
import axios from "axios";

const initialState = {
    filtered: {
        articles: [],
        load: true
    }
}

export const getArticlesByCategory = createAsyncThunk('filltered/category', async (params) => {
    const {data} = await axios.get(links.BASE_URL+"posts/", {params: params})
    console.log(params)
    return data?.results;
})

const filteredSlice = createSlice({
    name: 'filteredSlice',
    initialState,
    reducers: {},
    extraReducers(build){
        build
            .addCase(getArticlesByCategory.pending, (state) => {
                state.filtered.load = true
            })
            .addCase(getArticlesByCategory.fulfilled, (state, action) => {
                state.filtered.articles = action.payload
                state.filtered.load = false
            })
    }
})

export default filteredSlice.reducer
export const articlesByCategory = state => state?.filtered?.filtered