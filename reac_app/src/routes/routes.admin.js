import {AdminLayout} from "../Layouts"
import {HomeAdmin, UsersAdmin} from "../pages/Admin"

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
        exact: true

    },
    {
        path: "/admin/users",
        layout: AdminLayout,
        component: UsersAdmin,
        exact: true
    },
];
export default routesAdmin;