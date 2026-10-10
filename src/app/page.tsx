
import Banner from "./Components/Banner";
import { Suspense } from "react";
import MainBody from "./Components/MainBody";
import PageLoading from "./loading";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Suspense fallback={<PageLoading></PageLoading>}>
      <Banner/>
      </Suspense>
      <MainBody></MainBody>
     
    </div>
  );
}
