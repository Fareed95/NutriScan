// <<<<<<< HEAD
// "use client"
// import React, { useEffect, useState } from "react";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { cn } from "@/app/libs/utils";
// import { useToast } from "@/components/ui/use-toast";
// import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
// import { useRouter } from 'next/navigation';
// import { useUserContext } from '@/app/context/Userinfo';


// export function Login() {

//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const { setIsLoggedIn ,isLoggedIn} = useUserContext(); // Updated hook
//   const [trues, setTrues] = useState(null); // Consider renaming for clarity
// =======
"use client";
import { useUserContext } from '@/app/context/Userinfo';
import { cn } from "@/app/libs/utils";
import { useToast } from "@/components/ui/use-toast";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Login() {
  const { email, setEmail } = useUserContext();
  const [password, setPassword] = useState("");
  
  const {isLoggedIn, setIsLoggedIn} = useUserContext();

  const { toast } = useToast();
  const router = useRouter();

  // Update email context if it's empty
// <<<<<<< HEAD
//   React.useEffect(() => {
//     if (trues === "true") {
//       setIsLoggedIn(true);
//       console.log("done")
      
// =======
  useEffect(() => {
    if (contextEmail === "") {
      setContextEmail(email);
// >>>>>>> f0f0e103e74b13b618bcab6a05d75db345b60505
    }
  }, [trues]);

  // const Getuserinfo = async (token) => {
  //   try {
  //       const response = await fetch('http://127.0.0.1:8000/api/user', {
  //           method: 'GET',
  //           headers: {
  //             "Authorization": `Bearer ${token}`,
  //             'Content-Type': "application/json",
  //           },
  //           credentials: 'include',
  //         });
  //     if (!response.ok) {
        
  //       throw new Error('Failed to fetch user info'); // Handle error properly
        
  //     }
  //     if (response.ok){
  //       const result = await response.json();
  //     console.log(result);
  //     router.push("/");
  //     }
      
  //   } catch (error) {
  //     console.error("Error fetching user info:", error);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        toast({
// <<<<<<< HEAD
//           title: "Please fill entire form",
// =======
          title: "Login failed",
          description: "Please check your credentials and try again.",
// >>>>>>> f0f0e103e74b13b618bcab6a05d75db345b60505
        });
        return;
      }

      const result = await response.json();
// <<<<<<< HEAD
//       if (response.ok) {
//          // Consider using a more descriptive state
//          setTrues("true")
//         toast({
//           title: "Form submitted successfully",
//           description: JSON.stringify(result),
//         });

       
        
//         if (isLoggedIn==true) {
      
//           const timer = setTimeout(() => {
            
//             Getuserinfo(result.jwt);
//           }, 3000); // 3 seconds delay
//           return () => clearTimeout(timer);
//         }
       
          
       
// =======
      // Ensure result.jwt is defined before using it
      if (result.jwt) {
        setIsLoggedIn(true);
        localStorage.setItem('jwtToken', result.jwt);
        console.log(result.jwt);

        toast({
          title: "Login successful",
          description: "You have successfully logged in.",
        });

        // Fetch user info after successful login
        Getuserinfo(result.jwt);
      } else {
        toast({
          title: "Login failed",
          description: "No JWT token received.",
        });
// >>>>>>> f0f0e103e74b13b618bcab6a05d75db345b60505
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Unable to submit the form. Please try again later.",
      });
      console.error("Error submitting form:", error);
    }

    // Update loginInfo context after form submission
   
  };

// <<<<<<< HEAD
// =======
  const Getuserinfo = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ${token}',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        toast({
          title: "Error fetching user info",
          description: "Please check your authentication and try again.",
        });
        return;
      }

      const result = await response.json();
      console.log(result);
      router.push("/");
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Unable to fetch user info. Please try again later.",
      });
      console.error("Error fetching user info:", error);
    }
  };

// >>>>>>> f0f0e103e74b13b618bcab6a05d75db345b60505
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login to NutriScan
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Welcome back!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
{/* <<<<<<< HEAD
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
======= */}
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
{/* <<<<<<< HEAD
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
======= */}
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
//             className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
// <<<<<<< HEAD
//             type="button" // Changed type to "button"
// =======
            type="button"
            onClick={() => {
              // Add your GitHub OAuth handler here
            }}

          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
// <<<<<<< HEAD
//             type="button" // Changed type to "button"
// =======
            type="button"
            onClick={() => {
              // Add your Google OAuth handler here
            }}

          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
// <<<<<<< HEAD
//             type="button" // Changed type to "button"
// =======
            type="button"
            onClick={() => {
              // Add your OnlyFans OAuth handler here
            }}

          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
