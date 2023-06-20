import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/course"> Course / Schedule </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/alumni"> Alumni </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/gallery"> Gallery </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
