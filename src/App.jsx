import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      [FIXED_CONTENT]

      <nav>
        <Link to="/sead/">Index</Link>
        {" | "}
        <Link to="/sead/relatorios">Relatorios</Link>
      </nav>

      <Outlet />

      [FIXED_CONTENT]
    </>
  );
}