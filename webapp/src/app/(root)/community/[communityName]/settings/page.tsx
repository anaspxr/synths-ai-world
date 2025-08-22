import CommunitySettings from "@/components/community/community-settings";
import React from "react";

export const metadata = {
  title: "Community Settings | Synths",
  description: "Manage your community settings on Synths",
};

export default function page() {
  return (
    <div>
      <CommunitySettings />
    </div>
  );
}
