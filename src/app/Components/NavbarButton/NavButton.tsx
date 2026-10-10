'use client'
import { signOut, useSession } from '@/lib/auth-client';
import { ChevronDown } from 'lucide-react';
import logo from '@/Assests/RED_DEAD.png'

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Spinner } from '@heroui/react';



const NavButton = () => {
    const { data: session,isPending } = useSession()
const [isOpen, setIsOpen] = useState(false);
  if(isPending){
        return(
         <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
      </div>
        )
    }
     
    const auth =<>
       { session?.user?

       
<div className="relative inline-block my-2">
  <button
  onClick={() => setIsOpen(!isOpen)}
  className="flex items-center gap-2 rounded-full focus:outline-none cursor-pointer"
>
  <Image
    className="w-10 h-10 rounded-full object-cover border"
    src={logo}
    alt={session?.user?.name || "User Profile"}
  />
<h2 className="hidden md:block text-sm font-semibold text-gray-800 truncate">
  {session?.user?.name}
</h2>
  <ChevronDown
    size={18}
    className={`transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
  />
</button>


  {isOpen && (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100">

      <div className="px-4 py-2 text-sm text-gray-800 font-semibold border-b border-gray-100 truncate">
        {session?.user?.name}
      </div>
      <Link href='/profile'><div className="px-4 py-2 text-sm text-gray-800 font-semibold border-b border-gray-100 truncate">
        {`👤 আমার প্রোফাইল`}
      </div></Link>
      

      <div className="p-2">
        <button
          className="w-full text-left bg-green-700 hover:bg-green-800 rounded py-2 px-4 text-white font-medium cursor-pointer transition-colors"
          onClick={() => {
            toast.success('সফলভাবে সাইন আউট করা হয়েছে!')
            signOut()}}
        >
          সাইন আউট করুন
        </button>
      </div>
    </div>
  )}
</div>

    :<div className="ml-auto flex items-center gap-3 my-2">
            <Link href='/sign-in'><button className="rounded py-2 px-4 text-black cursor-pointer">সাইন ইন</button></Link>
            <Link href='/sign-up'><button className="bg-green-700 rounded py-2 cursor-pointer px-4 text-white">
                সাইন আপ
            </button></Link>
        </div>}
     </>
    return (
        <div>
            {auth}

        </div>
    );
};

export default NavButton;