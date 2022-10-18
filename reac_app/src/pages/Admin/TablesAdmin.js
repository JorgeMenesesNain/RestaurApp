import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useTable } from "../../hooks";
import { HeaderPage } from "../../components/Admin";

export function TablesAdmin() {
  const { loading, tables, getTables } = useTable();

  useEffect(() => {
    getTables();
  }, []);

  console.log(tables);
  return (
    <>
      <HeaderPage title="Mesas" btnTitle="Crear nueva Mesa" />

      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h2>Lista de mesas</h2>
      )}
    </>
  );
}
