import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signin Page | MGZON E-commerce template",
  description: "This is Signin Page for MGZON Template",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
