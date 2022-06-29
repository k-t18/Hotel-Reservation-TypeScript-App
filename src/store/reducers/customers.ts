import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customerstate {
    customers?: any,
    orders?: any
}

const initialState: Customerstate = {
    customers: [],
    orders: []
}


const CustomerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomers: (state, action: PayloadAction<Customerstate>) => {
            console.log(action.payload);
            state.customers.push(action.payload);
            state.orders = ""
        },
        addOrders: (state, action: PayloadAction<Customerstate>) => {
            state.customers = "";
            // console.log(typeof state.orders);
            console.log(action.payload);
            state.orders.push(action.payload);
        }
    }

})

export const { addCustomers, addOrders } = CustomerSlice.actions
export default CustomerSlice.reducer