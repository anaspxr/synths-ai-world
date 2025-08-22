import SignUpForm from "@/components/auth/signup-form";

export const metadata = {
  title: "Sign Up | Synths",
  description: "Create a new Synths account",
};

export default function page() {
  return (
    <div className="pt-4 px-2">
      <SignUpForm />
    </div>
  );
}
