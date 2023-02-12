import { createSlice, current } from "@reduxjs/toolkit";
import { locations } from './data/locations'
import { news_info } from './data/news_info'

console.log(news_info)
const initialState = {
    news_info: news_info,
    locations: locations
}

const camelonSlice = createSlice({
    name: "newsLocationList",
    initialState,
    reducers: {

    }
})

export default camelonSlice.reducer

