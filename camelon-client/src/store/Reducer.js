import { createSlice, current } from "@reduxjs/toolkit";
import { locations } from './locations'

const initialState = {
    locations: locations,
}

const camelonSlice = createSlice({
    name: "newsListing",
    initialState,
    reducers: {

    }
})

export default camelonSlice.reducer