import { configureStore } from "@reduxjs/toolkit";
import reservation from "./reducers/reservation";
import customer from "./reducers/customers";
import menu from "./reducers/menu";
import order from "./reducers/orders";
export const store = configureStore({
    reducer: {
        reservationReducer: reservation,
        customerReducer: customer,
        menuReducer: menu,
        ordersReducer: order
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;