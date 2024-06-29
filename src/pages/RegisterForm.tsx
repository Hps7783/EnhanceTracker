// import { EmailAuthCredential } from "firebase/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../lib/firebase"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  // message: "Username must be at least 2 characters.",
})

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
    ,console.log("user created");
    
  }

  return (
    <>
      <div>SignUp</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field}type="email" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} type="password" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ConfirmPassword</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </>

  )
}

export default RegisterForm