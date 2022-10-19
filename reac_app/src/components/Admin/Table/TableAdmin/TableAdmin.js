import React, { useState, useEffect } from "react";
import { Button, Icon, Checkbox } from "semantic-ui-react";
import { ReactComponent as IcTable } from "../../../../assets/table.svg";
import { getOrdersByTableApi } from "../../../../api/orders";
import { ORDER_STATUS } from "../../../../utils/constants";
import "./TableAdmin.scss";

export function TableAdmin(props) {
  const { table } = props;

  useEffect(
    () => {
      (async () => {
        console.log(table.id);
        const response = await getOrdersByTableApi(
          table.id,
          ORDER_STATUS.PENDING
        );
        console.log(response);
        /* setOrders(response); */
      })();
    },
    [
      /* reload */
    ]
  );

  return (
    <div className="table-admin">
      <IcTable />
      <p>Mesa {table.number} </p>
    </div>
  );
}
