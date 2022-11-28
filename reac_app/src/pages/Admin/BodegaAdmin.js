import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableInsumoAdmin,
  AddEditInsumoForm,
} from "../../components/Admin";
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

  /* agregar un insumo */
  const addInsumo = () => {
    setTitleModal("Agregar Insumo");
    setContentModal(
      <AddEditInsumoForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateInsumo = (data) => {
    setTitleModal("Actualizar Insumo");
    setContentModal(
      <AddEditInsumoForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        insumos={data}
      />
    );
    openCloseModal();
  };

  return (
    <>
      <HeaderPage
        title="Bodega"
        btnTitle="Añadir nuevo insumo"
        btnClick={addInsumo}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableInsumoAdmin insumos={insumos} updateInsumo={updateInsumo} />
      )}
      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
