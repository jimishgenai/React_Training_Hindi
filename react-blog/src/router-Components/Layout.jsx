import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="container-fluid mh-100">
            <div className="card">
                <div className="row g-0">
                    <div className="col-3 col-sm-2 pt-5">
                        <Navbar />
                    </div>
                    <div className="col-5 col-sm-10">
                        <div className="card-body">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};