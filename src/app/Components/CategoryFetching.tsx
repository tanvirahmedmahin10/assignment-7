

const CategoryFetching = async() => {
   const res=await fetch('https://api.abcz.workers.dev/api/bazardor/categories')
    const data=await res.json()
    return data
};

export default CategoryFetching;