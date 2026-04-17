import {Outlet} from "react-router";

export const AdminLayout = () => {
    return (
        <div className="bg-yellow-500">
            <Outlet />
        </div>
    )
}