import { Icons } from "@/components";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/validator";
import { z } from "zod";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmitHandler = ({ email, password }: TAuthCredentialsValidator) => {
    // TODO: send data to the server
  };
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto w-full flex justify-center space-y-6 flex-col sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-bold">Create an account</h1>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
            href="/sign-in"
          >
            Already have an account? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {/* TODO: Sign Up from here... */}
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
