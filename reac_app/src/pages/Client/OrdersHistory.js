import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrder, useTable, usePayment } from "../../hooks";

export function OrdersHistory() {
  const { loading, orders, getOrdersByTable, addPaymentToOrder } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();

  console.log(orders);

  useEffect(() => {
    (async () => {
      const table = await getTableByNumber(tableNumber);
      const idTableTemp = table[0].id;

      getOrdersByTable(idTableTemp, "", "ordering=-status,-created_at");
    })();
  }, []);

  return (
    <div>
      <h1>Historial de pedidos</h1>
    </div>
  );
}
