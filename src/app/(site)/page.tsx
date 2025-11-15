import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MGZON | MGZON E-commerce template",
  description: "This is Home for MGZON Template",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
