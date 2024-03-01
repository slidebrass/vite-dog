import { createSlice } from "@reduxjs/toolkit";

const dogRootSlice = createSlice ({
    name: "root",
    initialState: {
        image_count: "Image Count",
        breed_id: "Breed Id",
        // breed_name: "Breed Name",
    },
    reducers: {
        chooseImage_Count: (state, action) => { state.image_count = action.payload },
        chooseBreed_Id: (state, action) => { state.breed_id = action.payload },
        // chooseBreed_Name: (state, action) => { state.breed_name = action.payload }
    }
})

export const reducer = dogRootSlice.reducer;
export const { chooseImage_Count, chooseBreed_Id } = dogRootSlice.actions