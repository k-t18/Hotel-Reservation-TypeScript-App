import { FC, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store";
import "../App.css";

interface ICustomer {
    setvals(x: string, y: string): void

}

const CustomerCard: FC<ICustomer> = ({ setvals }) => {
    let x: any;
    const [category, setcategory] = useState<string>('starters');

    const [order, setorder] = useState([]);

    const customerslist = useSelector((state: RootState) => state.customerReducer.customers);
    const orderlist = useSelector((state: RootState) => state.ordersReducer.orders);

    console.log(orderlist);

    const handleChange = (e: any) => {
        setcategory(e.target.value)
    }

    const handleItemsUpdate = (e: any) => {
        e.preventDefault();
        setvals(e.target.parentElement.parentElement.children[0].innerText, category);
        // setactiveCustomer(e.target.parentElement.parentElement.children[0].innerText);
        // console.log(e.target.parentElement.parentElement.children[0].innerText);
    }
    const total = orderlist.filter((item: any) => item.orders.cust === "Laith").reduce(function (accumulator: any, curValue: any) {

        return accumulator + parseInt(curValue.orders.orderedItems.dishprice)

    }, 0)
    console.log(total);
    // const [customerslist, setcustomerslist] = useState(customerData);

    // useEffect(() => {
    //     setcustomerslist(customerData) 
    //     console.log(customerslist);
    // }, [customerData])

    // const mapOrder = orderlist.filter((item: any) => {
    //     return
    // })


    return (
        <>
            <div className="customer-container">


                <h4>customers List</h4>

                <div>
                    {customerslist.map((item: any, index: any) => {
                        x = item.customers.custname
                        return (
                            <div className="customer-div" key={index}>
                                <p>{item.customers.custname}</p>

                                <div>
                                    <select onChange={(e) => handleChange(e)}>
                                        <option value="starters">starters</option>
                                        <option value="maincourse">main-course</option>
                                        <option value="desert">desert</option>
                                    </select>
                                </div>
                                <div>
                                    <button onClick={handleItemsUpdate}>Show List</button>
                                </div>

                                <div>

                                    {orderlist.filter((item: any) => item.orders.cust === x).map((filteredItem: any, index: number) =>
                                    (
                                        <div key={index}>
                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <p>{filteredItem.orders.orderedItems.dishname}</p>
                                                <p>{filteredItem.orders.orderedItems.dishprice}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div>

                                    {orderlist.filter((item: any) => item.orders.cust === x).reduce((accumulator: any, currVal: any) => (

                                        // return {accumulator + parseInt(currVal.orders.orderedItems.dishprice)}

                                        <>
                                            <div>
                                                Total: {accumulator + parseInt(currVal.orders.orderedItems.dishprice)}
                                            </div>
                                        </>

                                    ), 0)}

                                </div>



                            </div>
                        )
                    })}

                </div>
            </div>

            {/* <div>

                {category === "starters" ?
                    <div>
                        <div>
                            <p>st-1</p>
                            <p>90</p>
                            <button>Add</button>
                        </div>
                        <div>
                            <p>st-2</p>
                            <p>68</p>
                            <button>Add</button>
                        </div>
                        <div>
                            <p>st-3</p>
                            <p>45</p>
                            <button>Add</button>
                        </div>
                    </div> : ""}

                {category === "main-course" ? <div>
                    <div>
                        <p>m-1</p>
                        <p>90</p>
                        <button>Add</button>
                    </div>
                    <div>
                        <p>m-2</p>
                        <p>68</p>
                        <button>Add</button>
                    </div>
                    <div>
                        <p>m-3</p>
                        <p>45</p>
                        <button>Add</button>
                    </div>
                </div> : ""}

                {category === "desert" ? <div>
                    <div>
                        <p>d-1</p>
                        <p>90</p>
                        <button>Add</button>
                    </div>
                    <div>
                        <p>d-2</p>
                        <p>68</p>
                        <button>Add</button>
                    </div>
                    <div>
                        <p>d-3</p>
                        <p>45</p>
                        <button>Add</button>
                    </div>
                </div> : ""}



            </div> */}
        </>
    )
}

export default CustomerCard


// {category === "starters" ? <ul>
//                     <li>starters1</li>
//                     <li>starters2</li>
//                     <li>starters3</li>
//                 </ul> : ""}

//                 {category === "main-course" ? <ul>
//                     <li>main-course-1</li>
//                     <li>main-course-2</li>
//                     <li>main-course-3</li>
//                 </ul> : ""}

//                 {category === "desert" ? <ul>
//                     <li>desert-1</li>
//                     <li>desert-2</li>
//                     <li>desert-3</li>
//                 </ul> : ""}