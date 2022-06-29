import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface MenuState {
    items: any
}

const initialState: MenuState = {
    items: [
        {
            "itemcategory": "starters",
            "itemsname": [
                { "item": "starters1", "price": 90 },
                { "item": "starters2", "price": 60 },
                { "item": "starters3", "price": 45 }
            ]
        },

        {
            "itemcategory": "maincourse",
            "itemsname": [
                { "item": "main-course1", "price": 190 },
                { "item": "main-course2", "price": 160 },
                { "item": "main-course3", "price": 145 }
            ]
        },

        {
            "itemcategory": "desert",
            "itemsname": [
                { "item": "desert1", "price": 290 },
                { "item": "desert2", "price": 260 },
                { "item": "desert3", "price": 245 }
            ]
        },
    ]
}

const MenuSlice = createSlice({
    name: "menu-items",
    initialState,
    reducers: {
        menu: (state, action: PayloadAction<MenuState>) => {
            state.items = action.payload;
        }
    }
})

export const { menu } = MenuSlice.actions;

export default MenuSlice.reducer;