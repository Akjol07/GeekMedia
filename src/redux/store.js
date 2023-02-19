import {configureStore} from "@reduxjs/toolkit";
import articles from "./slices/articlesSlices";
import article from "./slices/articleSlice";
import filtered from "./slices/filteredSlice";
import videos from "./slices/videosSlice";

export const store = configureStore({
    reducer: {
        articles,
        article,
        filtered,
        videos
    }
})


