import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <header>hello header</header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
