import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage } from "../../components/Admin";
import { useTable } from "../../hooks";

export function OrdersAdmin() {
  const { loading, tables, getTables } = useTable();

  useEffect(() => {
    getTables();
  }, []);

  return (
    <>
      <HeaderPage title="Restaurante" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h2>Lista de mesas</h2>
      )}
      {/* <TablesListAdmin tables={tables} /> */}
    </>
  );
}
