import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { useOrder } from "../../../../hooks";
import "./PaymentProductList.scss";

export function PaymentProductList(props) {
  const { payment } = props;
  const [orders, setOrders] = useState([]);
  const { getOrdersByPayment } = useOrder();

  useEffect(() => {
    (async () => {
      const response = await getOrdersByPayment(payment.id);
      setOrders(response);
    })();
  }, []);

  return (
    <div>
      <h2>PaymentProductList</h2>
    </div>
  );
}
