import React from 'react';
import DataFetching from '../DataFetching';
import { IMarq } from '../MarqueeNav';
import { Triangle } from 'lucide-react';

const AllCards = async() => {
    const data2 = await DataFetching()
    const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "পিস",
};

    return (
        
        <div>
            <p className='mx-4 my-4'>মোট {data2.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            
  {data2.map((inc: IMarq) => {
    
    const isNegative = inc.change.pct < 0; 
    const isZero = inc.change.pct === 0;

    return (
      <div 
        key={inc.id} 
        className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4"
      >
        
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center text-2xl w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl shrink-0">
            {inc.image}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{inc.nameBn}</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              প্রতি {unitBangla[inc.unit] || inc.unit}
            </p>
          </div>
        </div>

     
        <div className="flex items-end justify-between pt-3 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5">আজকের দাম</span>
            <div className="text-xl font-bold text-gray-900">
              {inc.today.toLocaleString('bn-BD')} <span className="text-sm font-normal text-gray-500">টাকা</span>
            </div>
          </div>

          <div
  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
    isZero
      ? 'bg-gray-50 text-gray-500'
      : isNegative
        ? 'bg-emerald-50 text-emerald-600'
        : 'bg-red-50 text-red-600'
  }`}
>
  {!isZero && (
    <Triangle
      className={`w-3 h-3 ${
        isNegative
          ? 'fill-emerald-600 text-emerald-600 rotate-180'
          : 'fill-red-600 text-red-600'
      }`}
    />
  )}

  <span>{Math.abs(inc.change.pct).toLocaleString('bn-BD')}%</span>
</div>
        </div>
      </div>
    );
  })}
</div>
</div>
    );
};

export default AllCards;