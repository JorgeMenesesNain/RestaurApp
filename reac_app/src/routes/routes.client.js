import { ClientLayout, BasicLayout } from "../Layouts";
import { SelectTable, Categories } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: BasicLayout,
    component: SelectTable,
    exact: true,
  },
  {
    path: "/client/:tableNumber",
    layout: ClientLayout,
    component: Categories,
    exact: true,
  },
];
export default routesClient;
