import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface OrderState {
    orders: any
}

const initialState: OrderState = {
    orders: []
}
const Orders = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrders: (state, action: PayloadAction<OrderState>) => {
            state.orders.push(action.payload);
        }
    }
})

export const { addOrders } = Orders.actions
export default Orders.reducer