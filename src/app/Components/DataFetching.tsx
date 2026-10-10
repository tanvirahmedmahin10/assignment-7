import { notFound } from "next/navigation";


const DataFetching = async() => {
    const res=await fetch('https://openapi.programming-hero.com/api/bazardor/products')
     if(!res.ok){
        notFound()
      }
    const data=await res.json()
    return data
};

export default DataFetching;