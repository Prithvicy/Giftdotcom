import React, { useEffect, useState } from "react";
import "./Orders.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { collection, query, where, getDocs, orderBy, onSnapshot, doc } from "firebase/firestore"; // Firebase v9+ modular imports

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h2>Orders</h2>
      {orders.map(order => ( // Corrected: Now iterating over each order in orders
        <div className="order" key={order.id}> {/* Added key for React list rendering */}
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          <p className="order__id">
            <small>{order.id}</small>
          </p>
          {order.data.basket?.map((item, index) => ( // Corrected: Iterating over items in each order's basket
            <CheckoutProduct
              key={index} // Added key for React list rendering, consider a more stable key if available
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          ))}
          <CurrencyFormat
            renderText={(value) => (
              <h3 className="order__total">Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      ))}
    </div>
  );
}

export default Orders;
