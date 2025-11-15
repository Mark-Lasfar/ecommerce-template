import React from "react";
import BlogGrid from "@/components/BlogGrid";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Grid Page | MGZON E-commerce template",
  description: "This is Blog Grid Page for MGZON Template",
  // other metadata
};

const BlogGridPage = () => {
  return (
    <main>
      <BlogGrid />
    </main>
  );
};

export default BlogGridPage;
