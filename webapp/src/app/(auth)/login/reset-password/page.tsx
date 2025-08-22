import ResetPasswordForm from "@/components/auth/reset-password-form";
import React from "react";

export const metadata = {
  title: "Reset Password | Synths",
  description: "Reset your Synths account password",
};

export default function page() {
  return (
    <div className="pt-4 px-2">
      <ResetPasswordForm />
    </div>
  );
}
