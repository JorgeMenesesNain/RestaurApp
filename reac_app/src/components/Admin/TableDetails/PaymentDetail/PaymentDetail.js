import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { usePayment, useOrder } from "../../../../hooks";
import "./PaymentDetail.scss";

export function PaymentDetail(props) {
  const { payment, orders, openCloseModal, onReloadOrders } = props;
  return (
    <div className="payment-detail">
      <Table striped>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Mesa:</Table.Cell>
            <Table.Cell>## 4 ##</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Total:</Table.Cell>
            <Table.Cell>## 38 ## €</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Forma de pago:</Table.Cell>
            <Table.Cell>## TARJETA ##</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Button primary fluid onClick={() => console.log("Pagado")}>
        Marcar como pagado y cerrar mesa
      </Button>
    </div>
  );
}
/* 
<div className="payment-detail">
<Table striped>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Mesa:</Table.Cell>
      <Table.Cell>## 4 ##{/* {payment.table_data.number} *}/</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Total:</Table.Cell>
      <Table.Cell>## 38 ##{/* {payment.totalPayment}  €</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Forma de pago:</Table.Cell>
      <Table.Cell>
        ## TARJETA ##
        {/*  <Icon name={getIconPayment(payment.paymentType)} /> }
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>

<Button primary fluid onClick={onCloseTable}>
  Marcar como pagado y cerrar mesa
</Button>
</div> */
