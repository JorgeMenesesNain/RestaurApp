import React from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useInsumo } from "../../../../hooks";
import "./AddEditInsumoForm.scss";

export function AddEditInsumoForm(props) {
  const { onClose, onRefetch, insumos } = props;
  const { addInsumo, updateInsumo } = useInsumo();

  const formik = useFormik({
    initialValues: initialValues(insumos),
    validationSchema: Yup.object(insumos ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      if (insumos) await updateInsumo(insumos.id, formValue);
      else await addInsumo(formValue);
      onRefetch();
      onClose();
    },
  });

  const options = [
    { key: "KILOGRAMOS", text: "Kilogramos", value: "KILOGRAMOS" },
    { key: "LITROS", text: "Litros", value: "LITROS" },
    { key: "CAJAS", text: "Cajas", value: "CAJAS" },
  ];
  return (
    <Form className="add-edit-insumo-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="nombre"
        placeholder="Nombre de producto"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      />
      <Form.Input
        name="cantidad"
        type="number"
        placeholder="Cantidad"
        value={formik.values.cantidad}
        onChange={formik.handleChange}
        error={formik.errors.cantidad}
      />
      <Dropdown
        placeholder="Medida"
        fluid
        selection
        search
        options={options}
        value={formik.values.medida}
        error={formik.errors.medida}
        onChange={(_, data) => formik.setFieldValue("medida", data.value)}
      />

      <Button
        type="submit"
        primary
        fluid
        content={insumos ? "Actualizar" : "Agregar"}
      />
    </Form>
  );

  function initialValues(data) {
    return {
      nombre: data?.nombre || "",
      cantidad: data?.cantidad || "",
      medida: data?.medida || "",
    };
  }

  function newSchema() {
    return {
      nombre: Yup.string().required(true),
      cantidad: Yup.number().required(true),
      medida: Yup.string().required(true),
    };
  }

  function updateSchema() {
    return {
      nombre: Yup.string(),
      cantidad: Yup.number().required(true),
      medida: Yup.string(),
    };
  }
}
