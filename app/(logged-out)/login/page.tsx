"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <>
      <PersonStandingIcon size={50} />

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>

          <CardDescription>Login to your account</CardDescription>

          <CardContent className="p-0">
            <Form {...form}>
              <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(handleOnSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>

                        <FormControl>
                          <Input
                            placeholder="your email"
                            type="mail"
                            {...field}
                          />
                        </FormControl>

                        <FormDescription>
                          This is email address you signed up
                        </FormDescription>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>

                        <FormControl>
                          <Input
                            placeholder="your password"
                            type="password"
                            {...field}
                          />
                        </FormControl>

                        <FormDescription>
                          This is password you signed up
                        </FormDescription>

                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <Button type="submit">Login</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="justify-between p-0">
            <p>Don't have an account?</p>

            <Button asChild variant="outline" size="sm">
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </>
  );
};

export default LoginPage;
