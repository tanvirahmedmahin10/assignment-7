import React from 'react';
import DataFetching from '../DataFetching';
import { IMarq } from '../MarqueeNav';
import { Triangle } from 'lucide-react';

const IncreaseCard = async () => {
    const data2 = await DataFetching()
    const selected = data2.filter((sel: IMarq) => (sel.change.pct) > 0)
    const sorting=selected.sort((a:IMarq,b:IMarq)=>b.change.pct-a.change.pct)
      const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন "
};
    return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {sorting.slice(0,6).map((inc: IMarq) => 
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
                {inc.today.toLocaleString('bn-BD')}{' '}
                <span className="text-sm font-normal text-gray-500">টাকা</span>
              </div>
            </div>

            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600`}
            >
             <Triangle className="w-3.5 h-3.5 fill-red-600 text-red-600" />
              <span>{Math.abs(Number(inc.change.pct)).toLocaleString('bn-BD')}%</span>
            </div>
          </div>
        </div>
     )}
  </div>
);
};

export default IncreaseCard;