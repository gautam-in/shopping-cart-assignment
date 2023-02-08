import { useEffect } from "react";
import RootLayout from "../layouts/Layout";

export default function HomePage() {
  const fetchData = async () => {
    const res = await fetch("../server/banners/index.get.json");
    return await res.json();
  };

  useEffect(() => {
    fetchData().then((res) => console.log(res));
  }, []);
  return (
    <RootLayout>
      <div className={"bg-slate-500"}>Welcome to Next.js!</div>
    </RootLayout>
  );
}
