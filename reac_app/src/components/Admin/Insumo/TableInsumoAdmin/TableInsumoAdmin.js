import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableInsumoAdmin.scss";

export function TableInsumoAdmin(props) {
  const { insumos, updateInsumo, deleteInsumo } = props;
  return (
    <Table className="insumos-users-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Cantidad</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(insumos, (insumos, index) => (
          <Table.Row key={index}>
            <Table.Cell className="insumos-users-admin__text">
              {insumos.nombre}
            </Table.Cell>
            <Table.Cell className="insumos-users-admin__text">{`${insumos.cantidad}   ${insumos.medida}`}</Table.Cell>
            <Actions
              insumos={insumos}
              updateInsumo={updateInsumo}
              deleteInsumo={deleteInsumo}
            />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );

  function Actions(props) {
    const { insumos } = props;

    return (
      <Table.Cell textAlign="right">
        <Button icon onClick={() => updateInsumo(insumos)}>
          <Icon name="pencil" />
        </Button>
        <Button icon negative onClick={() => deleteInsumo(insumos)}>
          <Icon name="trash" />
        </Button>
      </Table.Cell>
    );
  }
}
