"use client";
import { signIn, signUp } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from '@/Assests/Google.png'
import Link from "next/link";

export default function Basic() {
    const router=useRouter()
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data=Object.fromEntries(formData.entries()) as Record<string, string>

 const { data:resData, error } = await signUp.email({
    name: data.name, 
    email: data.email, 
    password: data.password, 
    callbackURL: "/"
});

if(resData){
    toast.success('Sign Up Successfully')
    router.push('/')
}
if(error){
  toast.danger('Sign Up Failed')
}

  };
  const onHandleClick=async()=>{
 const resData=await signIn.social({
    provider: "google",
    callbackURL:'/'
  });
if(resData){
       toast.success('Sign Up Successfully')
   }
   if(!resData){
     toast.danger('Sign Up Failed')
   }

}
  

  return (
    <div>
      <div className='text-center my-10'>
            <h2 className='text-2xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h2>
            <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
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
            <Label>নাম</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>ইমেইল</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
           <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>পাসওয়ার্ড</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
        </FieldGroup>
        <Fieldset.Actions>
          <Button className='w-full bg-green-700' type="submit">
           
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
      <button
  onClick={onHandleClick}
  className="w-full max-w-96 my-2 mx-auto py-2.5 px-4 flex items-center justify-center bg-white text-gray-700 font-medium text-sm rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all cursor-pointer"
>
  <Image
    src={logo} 
    alt="Google logo" 
    width={40} 
    height={40} 
    className="w-5 h-5 object-contain"
  />
  <span>Google দিয়ে চালিয়ে যান</span>
</button>
<p className="w-full text-center text-sm text-gray-500 font-normal">
    অ্যাকাউন্ট আছে?{' '}
    <Link
      href="/sign-in" >
     <button className="font-bold text-green-600 cursor-pointer"> সাইন ইন করুন</button>
    </Link>
  </p>
    </div>
  );
}