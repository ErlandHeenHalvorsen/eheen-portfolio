import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="m-1.5 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
