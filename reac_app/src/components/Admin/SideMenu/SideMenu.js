import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";
import "./SideMenu.scss";

export function SideMenu(props) {
  const { children } = props;
  const { pathname } = useLocation();
  return (
    <div className="side-menu-admin">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const { pathname } = props;
  const { auth } = useAuth();

  if (auth.me?.is_staff) {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        {/* -------------------------Home ----------------------------*/}
        <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
          <Icon name="home" />
          Pedidos
        </Menu.Item>
        {/* ----------------------------Mesas---------------------------- */}
        {auth.me?.rol === "ADMIN" && (
          <Menu.Item
            as={Link}
            to={"/admin/tables"}
            active={pathname === "/admin/tables"}
          >
            <Icon name="table" />
            Mesas
          </Menu.Item>
        )}
        {/* ----------------------------Historial de pagos---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/payments-history"}
          active={pathname === "/admin/payments-history"}
        >
          <Icon name="history" />
          Historial de pagos
        </Menu.Item>
        {/* ----------------------------Categorias---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/categories"}
          active={pathname === "/admin/categories"}
        >
          <Icon name="folder" />
          Categorias
        </Menu.Item>
        {/* ----------------------------Productos---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/products"}
          active={pathname === "/admin/products"}
        >
          <Icon name="cart" />
          Productos
        </Menu.Item>
        {/* ----------------------------cocina---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/cocina"}
          active={pathname === "/admin/cocina"}
        >
          <Icon name="fire" />
          Cocina
        </Menu.Item>
        {/* ----------------------------Bodega---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/bodega"}
          active={pathname === "/admin/bodega"}
        >
          <Icon name="warehouse" />
          Bodega
        </Menu.Item>
        {/* ----------------------------Solo los Staff pueden ver los---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/users"}
          active={pathname === "/admin/users"}
        >
          <Icon name="users" />
          Usuarios
        </Menu.Item>
      </Menu>
    );
  }
  if (auth.me?.rol === "FINANZAS") {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        <Menu.Item
          as={Link}
          to={"/admin/payments-history"}
          active={pathname === "/admin/payments-history"}
        >
          <Icon name="history" />
          Historial de pagos
        </Menu.Item>
      </Menu>
    );
  }
  if (auth.me?.rol === "COCINA") {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        <Menu.Item
          as={Link}
          to={"/admin/categories"}
          active={pathname === "/admin/categories"}
        >
          <Icon name="folder" />
          Categorias
        </Menu.Item>
        {/* ----------------------------Productos---------------------------- */}
        <Menu.Item
          as={Link}
          to={"/admin/products"}
          active={pathname === "/admin/products"}
        >
          <Icon name="cart" />
          Productos
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={"/admin/cocina"}
          active={pathname === "/admin/cocina"}
        >
          <Icon name="fire" />
          Cocina
        </Menu.Item>
      </Menu>
    );
  }
  if (auth.me?.rol === "BODEGA") {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        <Menu.Item
          as={Link}
          to={"/admin/bodega"}
          active={pathname === "/admin/bodega"}
        >
          <Icon name="warehouse" />
          Bodega
        </Menu.Item>
      </Menu>
    );
  }
  if (auth.me?.rol === "GARZON") {
    return (
      <Menu fixed="left" borderless className="side" vertical>
        <Menu.Item as={Link} to={"/admin"} active={pathname === "/admin"}>
          <Icon name="home" />
          Pedidos
        </Menu.Item>
      </Menu>
    );
  }
}
