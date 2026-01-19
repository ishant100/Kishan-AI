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

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, password }),
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         toast.success("Signup successful! Please login.");
//         navigate("/login");
//       } else {
//         toast.error(data.message || "Signup failed.");
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Card className="w-full max-w-sm animate-in fade-in zoom-in-90">
//         <CardHeader>
//           <CardTitle className="text-2xl">Sign Up</CardTitle>
//           <CardDescription>
//             Enter your information to create an account.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="grid gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               placeholder="John Doe"
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
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
//           <Button className="w-full" onClick={handleSignup}>
//             Sign up
//           </Button>
//           <div className="mt-4 text-center text-sm">
//             Already have an account?{" "}
//             <Link to="/login" className="underline">
//               Login
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
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <AuthLayout>
      <form className="w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Create account
        </h1>
        <p className="text-gray-500">
          Join <span className="font-medium">Bharti Kisan AI</span>
        </p>

        <div className="space-y-4">
          <Input placeholder="Name" className="border-0 border-b rounded-none" />
          <Input type="email" placeholder="Email" className="border-0 border-b rounded-none" />
          <Input type="password" placeholder="Password" className="border-0 border-b rounded-none" />
        </div>

        <Button className="w-full rounded-full bg-green-500 hover:bg-green-600">
          Sign Up
        </Button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;
