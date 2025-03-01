import React from "react";
import { ChildrenType } from "../layout";
import Navbar from "@/components/Layouts/Navbar/Navbar";
import Footer from "@/components/Layouts/Footer/Footer";

const MainLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-310px)]">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
