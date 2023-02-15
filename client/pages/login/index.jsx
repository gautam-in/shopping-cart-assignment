import AuthForm from "@/src/components/auth/AuthForm";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sabka Bazaar | Login</title>
      </Head>
      <div>
        <Header />
        <main>
          <AuthForm
            type="login"
            name="Login"
            description="Get access to your Orders, Wishlists and Recommendations."
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
