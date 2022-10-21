import React from "react";
import { Form, Image, Button, Dropdown } from "semantic-ui-react";
import "./AddOrderForm.scss";

export function AddOrderForm(props) {
  const { idTable, openCloseModal } = props;
  return (
    <Form className="add-order-form">
      <Dropdown placeholder="Productos" fluid selection search />
      <div className="add-order-form__list">
        {/* for de prtoductos seleccionado */}
      </div>

      <Button
        type="submit"
        primary
        fluid
        content="Añadir productos a la mesa"
      />
    </Form>
  );
}
