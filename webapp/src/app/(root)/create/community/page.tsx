import CreateCommunity from "@/components/create-community/create-community";
import React from "react";

export const metadata = {
  title: "Create Community | Synths",
  description: "Create a new community on Synths",
};

export default function page() {
  return (
    <div>
      <CreateCommunity />
    </div>
  );
}
