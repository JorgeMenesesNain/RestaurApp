import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage } from "../../components/Admin";
import { usePayment } from "../../hooks";

export function PaymentsHistory() {
  const { loading, payments, getPayments } = usePayment();

  useEffect(() => {
    getPayments();
  }, []);

  console.log(payments);

  return (
    <>
      <HeaderPage title="Hitorial de pagos" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h2>Tabla de pagos</h2>
      )}
    </>
  );
}
