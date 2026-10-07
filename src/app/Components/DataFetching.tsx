

const DataFetching = async() => {
    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const data=await res.json()
    return data
};

export default DataFetching;