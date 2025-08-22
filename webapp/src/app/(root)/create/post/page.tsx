import CreatePost from "@/components/create-post/create-post";
import React from "react";

export const metadata = {
  title: "Create Post | Synths",
  description: "Create a new post on Synths",
};

export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Create Post</h1>
      <CreatePost />
    </div>
  );
}
