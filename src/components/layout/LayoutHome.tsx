import { Outlet, Link } from "react-router-dom";

const LayoutHome = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/connection">Connection</Link>
                    </li>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                </ul>
            </nav> */}

            <Outlet />
        </>
    )
};

export default LayoutHome;