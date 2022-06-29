import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrders } from '../store/reducers/orders';
import { RootState } from '../store/store';
import "../App.css";

interface IMenu {
    customer: string,
    categ: string
}
const MenuCard: FC<IMenu> = ({ customer, categ }) => {
    const menuItems = useSelector((state: RootState) => state.menuReducer.items);
    const dispatch = useDispatch();

    const newArr = menuItems.filter((item: any) => {
        return item.itemcategory === categ
    })

    const handleUpdateItems = (e: any) => {
        e.preventDefault();
        console.log(e.target.parentElement.children[0].innerText);
        console.log(e.target.parentElement.children[1].innerText);

        // dispatch(addReservation({ customers: { custname: custname, time: d.toLocaleString() } }));
        dispatch(addOrders({
            orders: {
                cust: customer,
                orderedItems: {
                    dishname: e.target.parentElement.children[0].innerText,
                    dishprice: e.target.parentElement.children[1].innerText
                }
            }
        }
        ))
    }
    // console.log(newArr);
    return (

        <div className='menu-container'>

            <h4>List</h4>

            {newArr[0].itemsname.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        <p>{item.item} </p>
                        <p>
                            {item.price}</p>
                        <button onClick={handleUpdateItems}>Add</button>
                    </div>
                )
            })}
        </div>


    )
}

export default MenuCard;