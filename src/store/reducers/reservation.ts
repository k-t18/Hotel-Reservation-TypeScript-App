import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// interface ReservationState {
//     custname: string;
//     time:string
// }

interface ReservationState {
    customers: any
}
// interface Arr extends Array<ReservationState>
// {
//     customers:any
// }
const initialState: ReservationState = {
    customers: []

}

const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<ReservationState>) => {
            console.log(action.payload)
            state.customers.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.customers.splice(action.payload, 1)
        }
    }

})

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer