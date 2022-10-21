import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { forEach } from "lodash";
import { HeaderPage, AddOrderForm } from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { ListOrderAdmin } from "../../components/Admin/TableDetails";
import { useOrder, useTable } from "../../hooks";

export function TableDetailsAdmin() {
  const [reloadOrders, setReloadOrders] = useState(false);
  const { id } = useParams();
  const { loading, orders, getOrdersByTable } = useOrder();
  const { table, getTable } = useTable();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getOrdersByTable(id, "", "ordering=-status,created_at");
  }, [id, reloadOrders]);

  useEffect(() => {
    getTable(id);
  }, [id]);

  const onReloadOrders = () => setReloadOrders((prev) => !prev);
  const openCloseModal = () => setShowModal((prev) => !prev);

  const onCreatePayment = async () => {
    const result = window.confirm(
      "¿Estas seguro de generar la cuenta de la mesa?"
    );

    if (result) {
      let totalPayment = 0;
      forEach(orders, (order) => {
        totalPayment += Number(order.product_data.price);
      });

      const resultTypePayment = window.confirm(
        "¿Pago con tarjeta pusa ACEPTAR con efectivo pusa CANCELAR"
      );

      const paymentData = {
        table: id,
        totalPayment: totalPayment,
        paymentType: resultTypePayment ? "CARD" : "CASH",
        statusPayment: "PENDING",
      };
      console.log(paymentData);
    }
  };

  return (
    <>
      <HeaderPage
        title={`Mesa ${table?.number || ""}`}
        btnTitle="Añadir pedidos"
        btnClick={openCloseModal}
        btnTitleTwo="Generar Cuenta"
        btnClickTwo={onCreatePayment}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando ...
        </Loader>
      ) : (
        <ListOrderAdmin orders={orders} onReloadOrders={onReloadOrders} />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title="Generar pedido"
      >
        <AddOrderForm
          idTable={id}
          openCloseModal={openCloseModal}
          onReloadOrders={onReloadOrders}
        />
      </ModalBasic>
    </>
  );
}
