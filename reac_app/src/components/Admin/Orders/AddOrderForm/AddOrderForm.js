import React, { useState, useEffect } from "react";
import { Form, Image, Button, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { useProduct, useOrder } from "../../../../hooks";
import "./AddOrderForm.scss";

export function AddOrderForm(props) {
  const { idTable, openCloseModal } = props;
  const [productsFormat, setProductsFormat] = useState([]);
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setProductsFormat(formatDropdownData(products));
  }, [products]);

  return (
    <Form className="add-order-form">
      <Dropdown
        placeholder="Productos"
        fluid
        selection
        search
        options={productsFormat}
      />
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

function formatDropdownData(data) {
  return map(data, (item) => ({
    key: item.id,
    text: item.title,
    value: item.id,
  }));
}
