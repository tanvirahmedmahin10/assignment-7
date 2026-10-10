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
       
          const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন "
};
       return (
        <div className="p-4 max-w-7xl mx-auto space-y-6 font-sans">
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center p-2 sm:p-4 shrink-0">
      <h2 className="text-3xl sm:text-5xl flex justify-center object-contain">{data.image}</h2>
    </div>
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{data.nameBn}</h1>
      <p className="text-xs sm:text-sm text-gray-500">
        {data.categoryNameBn}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        গতকালকের তুলনায় আজ দাম {data.change.pct === 0 ? 'দাম অপরিবর্তিত রয়েছে' : `দাম ${data.change.dir === 'down' ? 'কমেছে' : 'বেড়েছে'} ${Math.abs(data.change.pct).toLocaleString('bn-BD')}%`}
      </p>
    </div>
  </div>

  
  <div className="bg-emerald-100/60 rounded-xl p-3 sm:p-4 text-center w-full sm:w-auto sm:min-w-30 shrink-0">
    <span className="text-xs text-gray-500 block mb-1">আজকের দাম</span>
    <span className="text-2xl sm:text-3xl font-extrabold text-black">{avgPrice.toLocaleString('bn-BD')}</span>
    <span className="text-xs text-gray-600 block mt-0.5">টাকা / {unitBangla[data.unit] || data.unit.replace('প্রতি ', '')}</span>
    <div className={data.change.pct === 0 ? 'text-xs text-gray-500 mt-1' : data.change.dir === 'down' ? 'text-xs text-green-600 font-medium flex items-center justify-center gap-1 mt-1' : 'text-xs text-red-600 font-medium flex items-center justify-center gap-1 mt-1'}>
      <span>{data.change.pct === 0 ? '—' : data.change.dir === 'down' ? '▼' : '▲'}</span> {Math.abs(data.change.pct).toLocaleString('bn-BD')}%
    </div>
  </div>
</div>
    
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">দামের সারসংক্ষেপ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">সর্বনিম্ন দাম</span>
                <div className="text-xl font-bold text-emerald-600 mt-1">{minPrice.toLocaleString('bn-BD')} টাকা</div>
                <span className="text-xs text-gray-400">সবচেয়ে কম দামের বাজার</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">সর্বাধিক দাম</span>
                <div className="text-xl font-bold text-red-500 mt-1">{maxPrice.toLocaleString('bn-BD')} টাকা</div>
                <span className="text-xs text-gray-400">সবচেয়ে বেশি দামের বাজার</span>
              </div>
    
           
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <span className="text-xs text-gray-500 block">গড় দাম</span>
                <div className="text-xl font-bold text-emerald-600 mt-1">{avgPrice.toLocaleString('bn-BD')} টাকা</div>
                <span className="text-xs text-gray-400">{unitBangla[data.unit] || data.unit}-এর হিসাবে</span>
              </div>
            </div>
          </div>
    
         
          <div>
  <h2 className="text-lg font-bold text-gray-800 mb-3">বাজারভিত্তিক আজকের দাম</h2>
  <div className="border border-gray-200 rounded-xl overflow-x-auto md:overflow-x-visible bg-white">
    <table className="w-full text-left text-sm border-collapse min-w-125 md:min-w-full">
      <thead className="bg-gray-50 text-gray-500 font-normal border-b border-gray-200">
        <tr>
          <th className="py-3 px-4 font-normal whitespace-nowrap">বাজার</th>
          <th className="py-3 px-4 font-normal whitespace-nowrap">বিভাগ</th>
          <th className="py-3 px-4 font-normal text-right whitespace-nowrap">সর্বনিম্ন</th>
          <th className="py-3 px-4 font-normal text-right whitespace-nowrap">সর্বাধিক</th>
          <th className="py-3 px-4 font-normal text-right whitespace-nowrap">গড়</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 text-gray-700">
        {markets.map((m, index) => {
          const marketAvg = Math.round((m.min + m.max) / 2).toLocaleString('bn-BD');
          return (
            <tr key={index} className="hover:bg-gray-50/50">
              <td className="py-3 px-4 font-medium whitespace-nowrap">{m.market}</td>
              <td className="py-3 px-4 text-gray-500 whitespace-nowrap">{m.division}</td>
              <td className="py-3 px-4 text-right whitespace-nowrap">{m.min.toLocaleString('bn-BD')} টাকা</td>
              <td className="py-3 px-4 text-right whitespace-nowrap">{m.max.toLocaleString('bn-BD')} টাকা</td>
              <td className="py-3 px-4 text-right font-semibold whitespace-nowrap">{marketAvg} টাকা</td>
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