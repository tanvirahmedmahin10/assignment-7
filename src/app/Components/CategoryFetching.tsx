import { notFound } from "next/navigation";


const CategoryFetching = async() => {
   const res=await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    if(!res.ok){
        notFound()
      }
    const data=await res.json()
    
    return data
};

export default CategoryFetching;