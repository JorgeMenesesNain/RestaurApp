import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { map, size, forEach } from "lodash";
import { useOrder, useTable, usePayment } from "../../hooks";
import { OrderHistoryItem } from "../../components/Client";
import { ModalConfirm } from "../../components/Common";
import { Button } from "semantic-ui-react";

export function OrdersHistory() {
  const [showTypePayment, setShowTypePayment] = useState(false);
  const { loading, orders, getOrdersByTable, addPaymentToOrder } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();

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
          {size(orders) > 0 && (
            <Button primary fluid onClick={() => setShowTypePayment(true)}>
              Pedir la cuenta
            </Button>
          )}
          {map(orders, (order) => (
            <OrderHistoryItem key={order.id} order={order} />
          ))}
        </>
      )}

      <ModalConfirm
        title="Pagar con tarjeta o efectivo"
        show={showTypePayment}
        onCloseText="Efectivo"
        onClose={() => console.log("Pagar efectivo")}
        onConfirmText="Tarjeta"
        onConfirm={() => console.log("Pagar tarjeta")}
      />
    </div>
  );
}
