import React from "react";
import { Button, Image } from "semantic-ui-react";
import classNames from "classnames";
import moment from "moment";
import { PREPARACION_STATUS } from "../../../../utils/constants";
import { useOrder } from "../../../../hooks";
import "./CocinaItemAdmin.scss";

export function CocinaItemAdmin(props) {
  const { order, onReloadOrders } = props;
  const { title, image } = order.product_data;

  const { checkPreparacionOrder } = useOrder();

  const onCheckPreparacionOrder = async () => {
    await checkPreparacionOrder(order.id);
    onReloadOrders();
  };

  return (
    <div
      className={classNames("cocina-item-admin", {
        [order.preparacion.toLowerCase()]: true,
      })}
    >
      <div className="cocina-item-admin__time">
        <span>{moment(order.created_at).format("HH:mm")}</span> {" - "}
        <span>{moment(order.created_at).startOf("secods").fromNow()}</span>
      </div>
      <div className="cocina-item-admin__product">
        <Image src={image} />
        <p>{title}</p>
      </div>

      {order.preparacion === PREPARACION_STATUS.PREPARANDO && (
        <Button primary onClick={onCheckPreparacionOrder}>
          Marcar preparado
        </Button>
      )}
    </div>
  );
}
