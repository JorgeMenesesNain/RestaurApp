import React, { useEffect } from "react";
import { useCategory } from "../../hooks";

export function Categories() {
  const { loading, categories, getCategories } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <h3>Categorias</h3>
      {loading ? <p>Cargando</p> : <h2>Lista de categhorias</h2>}
    </div>
  );
}
