import LoginForm from "../../components/Form/LoginForm";
import RootLayout from "../../layouts/Layout";

export default function SigninPage() {
  return (
    <RootLayout>
      <div className="flex-col flex md:flex-row p-10 items-center gap-10 justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-sm">
            Get access to your own orders, wishlist and recommandations.
          </p>
        </div>
        <LoginForm />
      </div>
    </RootLayout>
  );
}
