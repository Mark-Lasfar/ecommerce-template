import BlogDetails from "@/components/BlogDetails";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Details Page | MGZON  E-commerce template",
  description: "This is Blog Details Page for MGZON Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <main>
      <BlogDetails />
    </main>
  );
};

export default BlogDetailsPage;
