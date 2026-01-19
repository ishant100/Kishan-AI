// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import { Link } from "react-router-dom";
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await res.json();
//       if (res.ok&& data.token) {
//         localStorage.setItem("token", data.token);
//         window.dispatchEvent(new Event('authChange'));
//         toast.success("Login successful!");
//         navigate("/chat");
//       } else {
//         toast.error(data.message || "Login failed.");
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Card className="w-full max-w-sm animate-in fade-in zoom-in-90">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               type="password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </CardContent>
//         <CardFooter className="flex-col">
//           <Button className="w-full" onClick={handleLogin}>
//             Sign in
//           </Button>
//           <div className="mt-4 text-center text-sm">
//             Don't have an account?{" "}
//             <Link to="/signup" className="underline">
//               Sign up
//             </Link>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
import AuthLayout from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
const location = useLocation();
const navigate = useNavigate();

const redirectTo = location.state?.from || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        window.dispatchEvent(new Event("authChange"));
        toast.success("Login successful!");
         navigate(redirectTo, { replace: true });
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">Hello there,</h1>
        <p className="text-gray-500">
          Welcome to <span className="font-medium">Bharti Kisan AI</span>
        </p>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-0 border-b rounded-none"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-0 border-b rounded-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-green-500 hover:bg-green-600"
        >
          Login
        </Button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
