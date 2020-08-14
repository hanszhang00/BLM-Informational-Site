import React from "react";
// import "../css/main.css"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={open} toggle={toggle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
