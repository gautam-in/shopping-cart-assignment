import RegisterForm from "../../components/Form/RegisterForm";
import RootLayout from "../../layouts/Layout";

export default function RegisterPage() {
  return (
    <RootLayout>
      <div className="flex-col flex md:flex-row p-10 gap-10 justify-center">
        <div className="flex flex-col mt-12 gap-6">
          <h1 className="text-3xl font-bold">Signup</h1>
          <p className="text-sm">
            We do not share your personal details with anyone.
          </p>
        </div>
        <RegisterForm />
      </div>
    </RootLayout>
  );
}
