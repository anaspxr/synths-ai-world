import AccountSettings from "@/components/user-settings/account-settings";
import DispatchDataFetch from "@/components/user-settings/dispatch-data-fetch";
import ProfileSettings from "@/components/user-settings/profile-settings";

export const metadata = {
  title: "Settings | Synths",
  description: "Manage your account settings on Synths",
};

export default function page() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold mb-8">Settings</h1>
      <DispatchDataFetch />
      <div className="space-y-8">
        <ProfileSettings />
        <AccountSettings />
      </div>
    </div>
  );
}
