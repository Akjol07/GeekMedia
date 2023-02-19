import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {links} from "./links";
import axios from "axios";

const initialState = {
    articles: [],
    categories: [],
    load: true
}

export const getArticles = createAsyncThunk('articles/getArticles',  async () => {
    const {data} = await axios.get(links.BASE_URL+"posts/")
    return data?.results;
});

export const getCategory = createAsyncThunk('category', async (_,{dispatch}) => {
    const {data} = await axios.get(links.BASE_URL+'categories/')
    dispatch(setCategory(data))
})


const articlesSlices = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categories = action.payload
        }
    },
    extraReducers(building) {
        building
            .addCase(getArticles.pending, (state) =>{
                state.load = true;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.load = false;
            })
    }
});

export default articlesSlices.reducer;
export const {setCategory} = articlesSlices.actions
export const articlesSelect = state => state?.articles?.articles;
export const loadArticlesSelect = state => state?.articles?.load;
export const categoriesSelect = state => state?.articles?.categories
