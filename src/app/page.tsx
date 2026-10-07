import Image from "next/image";
import Banner from "./Components/Banner";
import { Suspense } from "react";
import MainBody from "./Components/MainBody";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<nav className="h-16 bg-gray-100" />}>
      <Banner/>
      </Suspense>
      <MainBody></MainBody>
     
    </div>
  );
}
