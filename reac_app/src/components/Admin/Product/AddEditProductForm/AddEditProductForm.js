import React, { useState, useEffect, useCallback } from "react";
import { Form, Image, Button, Dropdown, Checkbox } from "semantic-ui-react";
import { map } from "lodash";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCategory, useProduct } from "../../../../hooks";
import "./AddEditProductForm.scss";

/* add-edit-product-form
 */
export function AddEditProductForm() {
  return (
    <Form className="add-edit-product-form">
      <Form.Input name="title" placeholder="Nombre del producto" />
      <Form.Input type="number" name="price" placeholder="precio" />
      <Dropdown placeholder="Categoria" fluid selection search />
      <div className="add-edit-product-form__active">
        <Checkbox toggle />
        Producto activo
      </div>
      <Button type="button" fluid>
        Subir imagen
      </Button>

      <Button type="submit" primary fluid content="Crear" />
    </Form>
  );
}
