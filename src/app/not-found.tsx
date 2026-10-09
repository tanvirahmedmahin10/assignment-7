import Link from 'next/link'
 
function NotFound() {
  return (
    <div className='min-h-[70vh] flex flex-col items-center justify-center text-center p-6'>
      <h2 className='text-6xl mb-4'>🧺</h2>
      <h2 className='text-3xl font-bold text-gray-800 mb-2'>
        পাতাটি খুঁজে পাওয়া যায়নি
      </h2>
      <p className='text-gray-600 max-w-md mb-6'>
        আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
      </p>
      <Link href="/">
        <button className='bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition duration-200 shadow-sm hover:shadow active:scale-95'>
          হোম পেজে যান
        </button>
      </Link>
    </div>
  )
}
export default NotFound