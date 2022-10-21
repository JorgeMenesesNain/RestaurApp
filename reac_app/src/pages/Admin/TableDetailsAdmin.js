import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { HeaderPage } from "../../components/Admin";
import { ListOrderAdmin } from "../../components/Admin/TableDetails";
import { useOrder } from "../../hooks";

export function TableDetailsAdmin() {
  const [reloadOrders, setReloadOrders] = useState(false);
  const { id } = useParams();
  const { loading, orders, getOrdersByTable } = useOrder();

  useEffect(() => {
    getOrdersByTable(id, "", "ordering=-status,created_at");
  }, [reloadOrders]);

  const onReloadOrders = () => setReloadOrders((prev) => !prev);

  return (
    <>
      <HeaderPage title={`Mesa ****`} />
      {loading ? (
        <Loader active inline="centered">
          Cargando ...
        </Loader>
      ) : (
        <ListOrderAdmin orders={orders} onReloadOrders={onReloadOrders} />
      )}
    </>
  );
}
