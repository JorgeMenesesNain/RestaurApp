import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { map, size, forEach } from "lodash";
import { useOrder, useTable, usePayment } from "../../hooks";
import { OrderHistoryItem } from "../../components/Client";

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

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {map(orders, (order) => (
            <OrderHistoryItem key={order.id} order={order} />
          ))}
        </>
      )}
    </div>
  );
}
