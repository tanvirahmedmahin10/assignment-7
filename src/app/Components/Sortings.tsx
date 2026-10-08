'use client';

import React from 'react';

// 1. Export the type so other components can reuse it
export type SortOption = 'ডিফল্ট' | 'দাম: কম থেকে বেশি' | 'দাম: বেশি থেকে কম';

// 2. Define the exact props interface Sortings expects
interface SortingsProps {
  isSort: SortOption;
  setIsSort: (value: SortOption) => void;
}

const Sortings: React.FC<SortingsProps> = ({ isSort, setIsSort }) => {
  return (
    <div>
      <select
        value={isSort}
        onChange={(e) => setIsSort(e.target.value as SortOption)}
        className="select w-fit bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm cursor-pointer outline-none focus:border-emerald-500"
      >
        <option value="ডিফল্ট">ডিফল্ট ক্রমানুসারে</option>
        <option value="দাম: কম থেকে বেশি">দাম: কম থেকে বেশি</option>
        <option value="দাম: বেশি থেকে কম">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default Sortings;