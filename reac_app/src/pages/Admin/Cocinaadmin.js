import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";

import { HeaderPage, ListCocinaAdmin } from "../../components/Admin";

import { useOrder } from "../../hooks";

export function Cocinaadmin() {
  const [reloadOrders, setReloadOrders] = useState(false);
  const { loading, orders, getOrdersByTable } = useOrder();

  useEffect(() => {
    getOrdersByTable("", "", "PREPARANDO", "");
  }, [reloadOrders]);
  console.log(orders);

  const onReloadOrders = () => setReloadOrders((prev) => !prev);

  return (
    <>
      <HeaderPage title="Cocina" />
      {loading ? (
        <Loader active inline="centered">
          Cargando ...
        </Loader>
      ) : (
        <ListCocinaAdmin orders={orders} onReloadOrders={onReloadOrders} />
      )}
    </>
  );
}
