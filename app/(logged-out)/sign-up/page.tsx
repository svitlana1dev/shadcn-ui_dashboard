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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

const formSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
});

const SignUpPage = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      accountType: "personal",
    },
  });

  const currentAccountType = form.watch("accountType");

  const handleOnSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <>
      <PersonStandingIcon size={50} />

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>

          <CardDescription>Sign up for a new account</CardDescription>

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

                <Select
                  onValueChange={(value) => {
                    form.setValue(
                      "accountType",
                      value as "personal" | "company"
                    );
                  }}
                >
                  <SelectTrigger className="w-[180px] text-start">
                    <SelectValue placeholder="Account Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>

                {currentAccountType === "company" && (
                  <>
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>

                            <FormControl>
                              <Input
                                placeholder="company"
                                type="companyName"
                                {...field}
                              />
                            </FormControl>

                            <FormDescription>
                              This is company name you signed up
                            </FormDescription>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />

                    <FormField
                      control={form.control}
                      name="numberOfEmployees"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Number Of Employees</FormLabel>

                            <FormControl>
                              <Input
                                placeholder="employees"
                                type="numberOfEmployees"
                                {...field}
                              />
                            </FormControl>

                            <FormDescription>
                              This is number ef employees you signed up
                            </FormDescription>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </>
                )}

                <Button type="submit">Sign up</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="justify-between p-0">
            <p>Already have an account?</p>

            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </>
  );
};

export default SignUpPage;
