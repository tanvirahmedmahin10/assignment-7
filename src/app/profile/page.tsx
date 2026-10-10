"use client";
import logo from '@/Assests/RED_DEAD.png'

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,

  Spinner,

  TextField
} from "@heroui/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Basic() {
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data=Object.fromEntries(formData.entries()) as Record<string, string>
    const {data:resData,error}=await updateUser({
    name:data.name
})
if(resData){
       toast.success('Name Changed')
   }
   if(error){
     toast.error('Changed failed')
   }


  };
  const router=useRouter()
  const { data: session,isPending } =useSession()
  const handleSignOut = async () => {
  
  
  await signOut({ disableRedirect:true })
 toast.error('Signing Out')
  router.push('/sign-in') 
  router.refresh()
}
   if(isPending){
        return(
         <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
      </div>
        )}
        const profileInfo=
      <div className="flex flex-col sm:flex-row mx-auto w-full max-w-96 items-start sm:items-center justify-between gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
  
  <div className="flex items-center gap-3 w-full sm:w-auto">
    <Image
      className="w-10 h-10 rounded-full object-cover shrink-0"
      src={logo}
      alt="profile logo"
    />

    <div className="flex flex-col min-w-0">
      <h3 className="text-base font-semibold text-gray-900 leading-snug truncate">
        {session?.user?.name}
      </h3>
      <p className="text-xs text-gray-500 truncate">
        {session?.user?.email}
      </p>
    </div>
  </div>

  <button
    onClick={handleSignOut}
    className="flex w-full sm:w-auto shrink-0 cursor-pointer items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-red-600 border border-red-500 rounded-xl hover:bg-red-50 transition-colors"
  >
    <span className="text-sm font-bold">↵</span>
    <span>সাইন আউট</span>
  </button>
</div>
  
  return (
    <div>
        <div className='text-center p-6'>
         <h2 className='text-2xl font-bold'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে পরিবর্তন করুন।</p>
  </div>
  <div className='p-6'>
 {profileInfo}
  </div>
    <Form className="w-full mx-auto max-w-96 bg-white p-6 rounded-2xl border-gray-200" onSubmit={onSubmit}>
      <Fieldset>
       
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
        
        </FieldGroup>
        <Fieldset.Actions>
          <Button className='w-full bg-green-700' type="submit">
           
            নাম হালনাগাদ করুন
          </Button>
          
        </Fieldset.Actions>
      </Fieldset>
    </Form>
       </div>
  );
}