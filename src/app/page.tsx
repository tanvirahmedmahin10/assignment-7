import Image from "next/image";
import Banner from "./Components/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<nav className="h-16 bg-gray-100" />}>
      <Banner/>
      </Suspense>
     
    </div>
  );
}
