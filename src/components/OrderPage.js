import React, { useState, useEffect } from 'react';
import FormOrder from "./FormOrder";

function OrderPage() {
    const [orderItems, setOrderItems] = useState([])
        console.log(orderItems)
    useEffect(()=>
    {
        console.log(orderItems)
    }, [orderItems])

    const handleAddItem = (items) => {
        setOrderItems(prevState => (
            [...prevState, items]
        ))
    }
    console.log(orderItems)

    return (
        <FormOrder handleAddItem = {handleAddItem} />
        
    )

}
export default OrderPage
