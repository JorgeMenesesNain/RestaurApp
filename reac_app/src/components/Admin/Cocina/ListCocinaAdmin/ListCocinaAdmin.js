import React from "react";
import { map } from "lodash";
import { CocinaItemAdmin } from "../";
import "./ListCocinaAdmin.scss";

export function ListCocinaAdmin(props) {
  const { orders, onReloadOrders } = props;
  return (
    <div className="list-cocina-admin">
      {map(orders, (order) => (
        <CocinaItemAdmin
          key={order.id}
          order={order}
          onReloadOrders={onReloadOrders}
        />
      ))}
    </div>
  );
}
