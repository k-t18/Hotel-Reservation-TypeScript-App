import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addReservation, removeReservation } from "../store/reducers/reservation";
import { RootState } from "../store/store";
import "../App.css";
import { addCustomers } from "../store/reducers/customers";

const ReservationCard = () => {
    const [custname, setcustname] = useState<string>("");
    const [datetime, setdatetime] = useState<string>("");

    const showReservation = useSelector((state: RootState) => state.reservationReducer.customers);
    const dispatch = useDispatch();

    const handleAddReservation = (e: any) => {
        e.preventDefault();
        const d = new Date(datetime);
        console.log(custname, d.toLocaleString());
        dispatch(addReservation({ customers: { custname: custname, time: d.toLocaleString() } }));
        console.log(showReservation);
        // console.log(typeof (datetime));
    }

    const handleRemoveReservation = (i: number, n: string) => {
        // console.log(i);
        dispatch(removeReservation(i));
        dispatch(addCustomers({ customers: { custname: n } }))
    }
    return (

        <>

            <div className="reservation-container">

                <h3>Reservations : {showReservation.length}</h3>

                <div>
                    {showReservation.map((item: any, index: any) =>

                        <div key={index} className="customers-list" onClick={() => handleRemoveReservation(index, item.customers.custname)}>
                            <p >{item.customers.custname}</p>
                            <p>{item.customers.time}</p>
                        </div>

                    )}
                </div>

                <div>
                    <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setcustname(e.target.value)} />
                    <input type="datetime-local" name="" id="" onChange={(e) => setdatetime(e.target.value)} /><br />
                    <button onClick={handleAddReservation}>Add</button>
                </div>

            </div>



        </>

    )
}

export default ReservationCard