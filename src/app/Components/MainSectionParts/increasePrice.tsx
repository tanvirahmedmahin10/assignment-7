import { Triangle } from "lucide-react";
import IncreaseCard from "../Cards/IncreaseCard";
import { Suspense } from "react";


const IncreasePrice = () => {
    return (
        <div className="mb-10">
        <div className="flex items-center gap-2 mx-2">
         <Triangle className="w-3.5 h-3.5 fill-red-600 text-red-600" />   
         <h2 className='font-semibold text-2xl'>আজ দাম বেড়েছে</h2>
         </div>
         <Suspense fallback={<nav className="h-16 bg-gray-100" />}>
         <IncreaseCard></IncreaseCard>
         </Suspense>
        
        </div>
    );
};

export default IncreasePrice;