import AuthForm from "@/src/components/auth/AuthForm";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sabka Bazaar | Sign Up</title>
      </Head>
      <div>
        <Header />
        <main>
          <AuthForm
            type="signup"
            name="Signup"
            description="We don't share your personal details with anyone."
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
