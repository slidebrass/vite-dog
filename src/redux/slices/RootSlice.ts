import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Breed Name",
        breed_group: "Breed Group",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseBreed_Group: (state, action) => {state.breed_group = action.payload}
    }
}) 

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBreed_Group } = rootSlice.actions