import React from "react";
import { useParams, Link } from "react-router-dom";

export function Products() {
  const { tableNumber, idCategory } = useParams();

  return (
    <div>
      <Link to={`/client/${tableNumber}`}>Volver a categorias</Link>
      <h1>Products</h1>
    </div>
  );
}
