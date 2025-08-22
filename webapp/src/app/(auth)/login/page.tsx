import LoginForm from "@/components/auth/login-form";

export const metadata = {
  title: "Login | Synths",
  description: "Login to your Synths account",
};

export default function page() {
  return (
    <div className="pt-4 px-2">
      <LoginForm />
    </div>
  );
}
