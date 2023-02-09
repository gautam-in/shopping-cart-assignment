import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}
