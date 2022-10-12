import React from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "./AddEditUserForm.scss";

export function AddEditUserForm() {
  return (
    <Form className="add-edit-user-form">
      <Form.Input name="username" placeholder="Nombre de usuario" />
      <Form.Input name="email" placeholder="Correo electronico" />
      <Form.Input name="first_name" placeholder="nombre" />
      <Form.Input name="last_name" placeholder="apellidos" />
      <Form.Input name="password" type="password" placeholder="contraseña" />

      <div className="add-edit-user-form__active">
        <Checkbox toggle /> Usuario activo
      </div>

      <div className="add-edit-user-form__staff">
        <Checkbox toggle /> Usuario staff
      </div>

      <Button type="submit" primary fluid content="Crear" />
    </Form>
  );
}
