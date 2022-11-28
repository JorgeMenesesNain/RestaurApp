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
  const { loading, insumos, getInsumos, deleteInsumo } = useInsumo();

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
  /*Editar  insumo*/
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

  const onDeleteInsumo = async (data) => {
    const result = window.confirm(`¿Eliminar Insumo ${data.number}?`);
    if (result) {
      await deleteInsumo(data.id);
      onRefetch();
    }
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
        <TableInsumoAdmin
          insumos={insumos}
          updateInsumo={updateInsumo}
          deleteInsumo={onDeleteInsumo}
        />
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
