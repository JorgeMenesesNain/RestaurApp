import React, { useEffect } from "react";
import { useUser } from "../../hooks";
import { HeaderPage } from "../../components/Admin";

export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <HeaderPage title="Usuarios" />
      <h1>Estamos en Users Admin</h1>
    </>
  );
}
