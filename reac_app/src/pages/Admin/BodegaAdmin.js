import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableInsumoAdmin } from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { useInsumo } from "../../hooks";

export function BodegaAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, insumos, getInsumos } = useInsumo();

  useEffect(() => {
    getInsumos();
  }, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  return (
    <>
      <HeaderPage
        title="Bodega"
        btnTitle="Añadir nuevo insumo"
        btnClick={() => console.log("Añadir")}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableInsumoAdmin insumos={insumos} />
      )}
    </>
  );
}
