"use client";


import { updateUser } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,

  TextField,
  toast,
} from "@heroui/react";

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
     toast.danger('Changed failed')
   }

  };

  return (
    <div>
        <div className='text-center my-10'>
         <h2 className='text-2xl font-bold'>আমার প্রোফাইল</h2>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে পরিবর্তন করার।</p>
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