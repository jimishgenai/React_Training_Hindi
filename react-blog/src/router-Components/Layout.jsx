import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="container-fluid mh-100">
            <div class="card">
                <div class="row g-0">
                    <div class="col-3 col-sm-2 pt-5">
                        <Navbar />
                    </div>
                    <div class="col-5 col-sm-10">
                        <div class="card-body">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};