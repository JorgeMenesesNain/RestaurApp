import React from "react";
import { Button, Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import { ORDER_STATUS } from "../../../../utils/constants";
import { useOrder } from "../../../../hooks";
import "moment/locale/es";
import "./OrderItemAdmin.scss";

export function OrderItemAdmin(props) {
  const { order, onReloadOrders } = props;
  const { title, image } = order.product_data;
  const { checkDeliveredOrder } = useOrder();

  const onCheckDeliveredOrder = async () => {
    await checkDeliveredOrder(order.id);
    onReloadOrders();
  };

  return (
    <div>
      {order.preparacion === "LISTO" ? (
        <div
          className={classNames("order-item-admin", {
            [order.status.toLowerCase()]: true,
          })}
        >
          <div className="order-item-admin__time">
            <span>{moment(order.created_at).format("HH:mm")}</span> {" - "}
            <span>{moment(order.created_at).startOf("secods").fromNow()}</span>
          </div>
          <div className="order-item-admin__product">
            <Image src={image} />
            <p>{title}</p>
          </div>

          {order.status === ORDER_STATUS.PENDING && (
            <Button primary onClick={onCheckDeliveredOrder}>
              Marcar entregado
            </Button>
          )}
        </div>
      ) : (
        <div
          className={classNames("order-item-admin", {
            [order.preparacion.toLowerCase()]: true,
          })}
        >
          <div className="order-item-admin__time">
            <span>{moment(order.created_at).format("HH:mm")}</span> {" - "}
            <span>{moment(order.created_at).startOf("secods").fromNow()}</span>
          </div>
          <div className="order-item-admin__product">
            <Image src={image} />
            <p>{title}</p>
          </div>

          {order.status === ORDER_STATUS.PENDING && (
            <Button primary onClick={onCheckDeliveredOrder}>
              Marcar entregado
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
