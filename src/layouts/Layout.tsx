import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>hello header</header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
