import { createSlice } from "@reduxjs/toolkit";

const dogRootSlice = createSlice ({
    name: "root",
    initialState: {
        image_count: "Image Count",
        breed_group: "Breed Group",
        breed_name: "Breed Name",
    },
    reducers: {
        chooseImage_Count: (state, action) => { state.breed_name = action.payload },
        chooseBreed_Group: (state, action) => { state.breed_group = action.payload },
        chooseBreed_Name: (state, action) => { state.breed_name = action.payload }
    }
})

export const reducer = dogRootSlice.reducer;
export const { chooseImage_Count, chooseBreed_Group, chooseBreed_Name } = dogRootSlice.actions