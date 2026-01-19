import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-lime-100">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex">
        
        {/* LEFT DECORATIVE SECTION */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-green-200 to-green-400">
          {/* abstract blobs */}
          <div className="absolute w-72 h-72 bg-green-300 rounded-full blur-3xl top-10 left-10 opacity-60" />
          <div className="absolute w-72 h-72 bg-lime-200 rounded-full blur-3xl bottom-10 right-10 opacity-60" />
          <h2 className="relative z-10 text-3xl font-semibold text-green-900 text-center px-6">
            Smart farming<br />starts here 🌱
          </h2>
        </div>

        {/* FORM SECTION */}
        <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
