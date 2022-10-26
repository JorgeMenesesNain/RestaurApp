import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "./SelectTable.scss";

export function SelectTable() {
  const [tableNum, setTableNum] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    setError(null);
    if (!tableNum) {
      setError("No has introducido ninguna mesa");
    } else {
      console.log("Entrandop en la mesa");
    }
  };

  return (
    <div className="select-table">
      <div className="select-table__content">
        <h1>Bienvenido a Siglo XXI</h1>
        <h2>Introduce tu numero de mesa</h2>

        <Form onSubmit={onSubmit}>
          <Form.Input
            placeholder="Ejemplo: 135, 873, 904, 337"
            type="number"
            onChange={(_, data) => setTableNum(data.value)}
          />
          <Button primary fluid>
            Entrar
          </Button>
        </Form>

        <p className="select-table__content-error">{error}</p>
      </div>
    </div>
  );
}
