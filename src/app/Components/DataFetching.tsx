import { notFound } from "next/navigation";


const DataFetching = async() => {
    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/products')
     if(!res.ok){
        notFound()
      }
    const data=await res.json()
    return data
};

export default DataFetching;