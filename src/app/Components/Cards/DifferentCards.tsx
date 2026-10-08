import React from 'react';
import { IMarq } from '../MarqueeNav';
import { Triangle } from 'lucide-react';

const DifferentCards = ({cat}:{cat:IMarq}) => {
    const isNegative = cat.change.pct < 0; 
    const isZero = cat.change.pct === 0;
        const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন "
};
    return (
        <div 
        key={cat.id} 
        className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-4"
      >
        
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center text-2xl w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl shrink-0">
            {cat.image}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{cat.nameBn}</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              প্রতি {unitBangla[cat.unit] || cat.unit}
            </p>
          </div>
        </div>

     
        <div className="flex items-end justify-between pt-3 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5">আজকের দাম</span>
            <div className="text-xl font-bold text-gray-900">
              {cat.today.toLocaleString('bn-BD')} <span className="text-sm font-normal text-gray-500">টাকা</span>
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

  <span>{Math.abs(cat.change.pct).toLocaleString('bn-BD')}%</span>
</div>
        </div>
      </div>
   
    );
};

export default DifferentCards;