import {Triangle } from 'lucide-react';
import React from 'react';
import MarqueeText from 'react-marquee-text';
import DataFetching from './DataFetching';
export interface IMarq {
  id: number
  slug: string
  nameBn: string
  category: string
  categoryNameBn: string
  categoryIcon: string
  unit: string
  image: string
  today: number
  yesterday: number
  lastWeek: number
  lastMonth: number
  change: Change
  markets: Market[]
}

export interface Change {
  dir: string
  pct: number
}

export interface Market {
  market: string
  division: string
  min: number
  max: number
}
const MarqueeNav = async() => {
    
    const data=await DataFetching()
    const selected=data.filter((sel:IMarq)=>(sel.change.pct)!==0)
    const unitBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  piece: "পিস",
  dozen: "ডজন "
};
    
    return (
        
            <MarqueeText
             duration={10}
             pauseOnHover={true}
              direction="right"
              >
  {selected.map((marq: IMarq) => (
    <div key={marq.id} className="inline-flex items-center mx-4 gap-2">
      <span>
        {marq.image} {marq.nameBn}
      </span>
      <span>{marq.today.toLocaleString('bn-BD')} টাকা/{unitBangla[marq.unit] || marq.unit}</span>
      {marq.change.pct > 0 ? (
        <Triangle className="w-3.5 h-3.5 fill-red-600 text-red-600" />
      ) : (
        <Triangle className="w-3.5 h-3.5 rotate-180 fill-green-600 text-green-600" />
      )}
      <span>{Math.abs(marq.change.pct).toLocaleString('bn-BD')}%</span>
    </div>
  ))}
</MarqueeText>
        
    );
};

export default MarqueeNav;