
// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Eye, EyeOff, LogIn } from "lucide-react";
// import { useAuth } from "@/hooks/useAuth";
// import { toast } from "@/components/ui/use-toast";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login, isAuthenticated } = useAuth();

//   // Redirect if already authenticated
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate("/dashboard", { replace: true });
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       toast({
//         title: "Error",
//         description: "Please enter both email and password",
//         variant: "destructive",
//       });
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       await login(email, password);
//       // Explicit navigation after successful login
//       navigate("/dashboard", { replace: true });
//     } catch (error) {
//       // Error is already handled in the login function
//       console.error("Login submission error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-6">
//           <div className="flex justify-center mb-2">
//             <div className="p-2 bg-primary rounded-lg text-white">
//               <LogIn size={28} />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold">EstateAdmin</h1>
//           <p className="text-slate-500 mt-1">Sign in to your account</p>
//         </div>
        
//         <Card>
//           <form onSubmit={handleSubmit}>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>
//                 Enter your email and password to access your account
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="password" className="text-sm font-medium">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="••••••••"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex flex-col">
//               <Button 
//                 type="submit" 
//                 className="w-full" 
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Signing in..." : "Sign In"}
//               </Button>
//             </CardFooter>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define a schema for login form validation
const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" })
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Setup form with validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      await login(values.email, values.password);
      // Navigate will happen automatically due to the useEffect above
    } catch (error) {
      // Error is already handled in the login function
      console.error("Login submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <div className="p-2 bg-primary rounded-lg text-white">
              <LogIn size={28} />
            </div>
          </div>
          <h1 className="text-2xl font-bold">EstateAdmin</h1>
          <p className="text-slate-500 mt-1">Sign in to your account</p>
        </div>
        
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="name@example.com" 
                          type="email"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                          tabIndex={-1}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
