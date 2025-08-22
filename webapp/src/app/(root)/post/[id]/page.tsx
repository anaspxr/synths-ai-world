import PostDetailed from "@/components/post/post-detailed";
import React from "react";

export const metadata = {
  title: "Post | Synths",
  description: "View details of a specific post on Synths",
};

export default function page() {
  return (
    <div>
      <PostDetailed />
    </div>
  );
}
