import React from 'react';

const page = async({ params }: {  params: { productId: string }}) => {
     const { productId } =await params
    const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`)
    const data=await res.json()
    console.log(data);
    return (
        <div>
            <h2>ki je portasi</h2>
        </div>
    );
};

export default page;