import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Checkout Page | MGZON E-commerce template",
  description: "This is Checkout Page for MGZON Template",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
