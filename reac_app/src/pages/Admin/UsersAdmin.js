import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableUsers,
  AddEditUserForm,
} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { useUser } from "../../hooks";

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const { loading, users, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo usuario");
    setContentModal(<AddEditUserForm />);
    openCloseModal();
  };

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Nuevo usuario"
        btnClick={addUser}
      />
      {loading ? (
        <Loader active inline="centered">
          Cargando ...
        </Loader>
      ) : (
        <TableUsers users={users} />
      )}

      <ModalBasic
        show={showModal}
        title={titleModal}
        onClose={openCloseModal}
        children={contentModal}
      ></ModalBasic>
    </>
  );
}
