import React from 'react';
import { IProduct } from '../products/[productId]/page';
import { notFound } from 'next/navigation';

const PorductRelated = async({productId}:{productId:string}) => {
        const res=await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`)
        if (!res.ok) {
            notFound();
          }
        const data:IProduct=await res.json()
        const markets = data.markets
    
      const minPrice =  Math.min(...markets.map((m) => m.min)) 
    
      const maxPrice =  Math.max(...markets.map((m) => m.max)) 
        
    
      const avgPrice = Math.round(
            markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length
          )
       
        
       return (
        <div className="p-4 max-w-7xl mx-auto space-y-6 font-sans">
          <div className="bg-white rounded-2xl p-6 border border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center p-4">
                <h2 className="text-5xl flex justify-center object-contain">{data.image}</h2>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{data.nameBn}</h1>
                <p className="text-sm text-gray-500">
                  {data.unit} • {data.categoryNameBn}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  গতকালকের তুলনায় আজ দাম {data.change.pct === 0 ? 'দাম অপরিবর্তিত রয়েছে' : `দাম ${data.change.dir === 'down' ? 'কমেছে' : 'বেড়েছে'} ${Math.abs(data.change.pct)}%`}
                </p>
              </div>
            </div>
    
           
            <div className="bg-emerald-100/60 rounded-xl p-4 text-center min-w-[120px]">
              <span className="text-xs text-gray-500 block mb-1">আজকের দাম</span>
              <span className="text-3xl font-extrabold text-black">{avgPrice}</span>
              <span className="text-xs text-gray-600 block mt-0.5">টাকা / {data.unit.replace('প্রতি ', '')}</span>
              <div  className={data.change.pct === 0 ?' text-gray-500':data.change.dir === 'down' ?'text-xs text-green-600 font-medium flex items-center justify-center gap-1 mt-1':'text-xs text-red-600 font-medium flex items-center justify-center gap-1 mt-1'}>
                <span>{data.change.pct === 0 ? '—': data.change.dir === 'down' ? '▼': '▲'}</span> {Math.abs(data.change.pct)}%
              </div>
            </div>
          </div>
    
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">দামের সারসংক্ষেপ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">সর্বনিম্ন দাম</span>
                <div className="text-xl font-bold text-emerald-600 mt-1">{minPrice} টাকা</div>
                <span className="text-xs text-gray-400">সবচেয়ে কম দামের বাজার</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">সর্বাধিক দাম</span>
                <div className="text-xl font-bold text-red-500 mt-1">{maxPrice} টাকা</div>
                <span className="text-xs text-gray-400">সবচেয়ে বেশি দামের বাজার</span>
              </div>
    
           
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">গড় দাম</span>
                <div className="text-xl font-bold text-emerald-600 mt-1">{avgPrice} টাকা</div>
                <span className="text-xs text-gray-400">{data.unit}-এর হিসাবে</span>
              </div>
            </div>
          </div>
    
         
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">বাজারভিত্তিক আজকের দাম</h2>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-gray-50 text-gray-500 font-normal border-b border-gray-200">
                  <tr>
                    <th className="py-3 px-4 font-normal">বাজার</th>
                    <th className="py-3 px-4 font-normal">বিভাগ</th>
                    <th className="py-3 px-4 font-normal text-right">সর্বনিম্ন</th>
                    <th className="py-3 px-4 font-normal text-right">সর্বাধিক</th>
                    <th className="py-3 px-4 font-normal text-right">গড়</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {markets.map((m, index) => {
                    const marketAvg = Math.round((m.min + m.max) / 2);
                    return (
                      <tr key={index} className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-medium">{m.market}</td>
                        <td className="py-3 px-4 text-gray-500">{m.division}</td>
                        <td className="py-3 px-4 text-right">{m.min} টাকা</td>
                        <td className="py-3 px-4 text-right">{m.max} টাকা</td>
                        <td className="py-3 px-4 text-right font-semibold">{marketAvg} টাকা</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default PorductRelated;