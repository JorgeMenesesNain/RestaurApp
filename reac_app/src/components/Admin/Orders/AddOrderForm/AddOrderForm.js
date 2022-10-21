import React, { useState, useEffect } from "react";
import { Form, Image, Button, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
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

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Creando pediddos");
      console.log(formValue);
    },
  });

  return (
    <Form className="add-order-form" onSubmit={formik.handleSubmit}>
      <Dropdown
        placeholder="Productos"
        fluid
        selection
        search
        options={productsFormat}
        value={null}
        onChange={(_, data) =>
          formik.setFieldValue("products", [
            ...formik.values.products,
            data.value,
          ])
        }
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

function initialValues() {
  return {
    products: [],
  };
}

function validationSchema() {
  return {
    products: Yup.array().required(true),
  };
}
