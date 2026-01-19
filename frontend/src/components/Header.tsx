// import { useEffect, useState } from "react";
// import { Bell, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SettingsPopover } from "@/components/SettingsPopover";
// import { useTranslation } from "react-i18next";
// import logo from "@/assets/new-logo.png";
// import useAuth from "@/hooks/useAuth";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "sonner";

// export const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { t } = useTranslation("common");
//   const isAuthenticated = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.dispatchEvent(new Event('authChange'));
//     toast.success("Logged out successfully!");
//     navigate("/");
//   };

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 8);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={[
//         "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
//         scrolled
//           ? "bg-white/90 backdrop-blur shadow-sm border-border"
//           : "bg-transparent border-transparent",
//       ].join(" ")}
//     >
//       <div className="container mx-auto px-4 h-22 flex items-center justify-between">
//         <a href="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="App logo"
//             className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0 block"
//           />
//           <div className="animate-fade-in">
//             <h1 className="text-xl font-bold text-black">BHARTI-kisan ai</h1>
//             <p className="text-sm text-gray-600">{t("subtitle")}</p>
//           </div>
//         </a>

//         <nav className="hidden md:flex items-center gap-8">
//           <a className="text-black hover:text-gray-700" href="/">
//             {t("nav.home")}
//           </a>
//           <a className="text-black hover:text-gray-700" href="/chat">
//             {t("chat.title")}
//           </a>
//           <a className="text-black hover:text-gray-700" href="/weather">
//             {t("weather.title")}
//           </a>
//           <a className="text-black hover:text-gray-700" href="/contacts">
//             {t("nav.contacts")}
//           </a>
//           <a className="text-black hover:text-gray-700" href="/about">
//             {t("nav.about")}
//           </a>
//         </nav>

//         <div className="hidden md:flex items-center gap-2">
//           {isAuthenticated ? (
//             <>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-black hover:text-gray-700"
//                 aria-label={t("a11y.notifications")}
//               >
//                 <Bell className="w-5 h-5" />
//               </Button>
//               <SettingsPopover />
//               <Button onClick={handleLogout}>Logout</Button>
//             </>
//           ) : (
//             <>
//               <Button asChild>
//                 <Link to="/login">Login</Link>
//               </Button>
//               <Button asChild variant="secondary">
//                 <Link to="/signup">Sign Up</Link>
//               </Button>
//             </>
//           )}
//         </div>

//         <button
//           className="md:hidden p-2 rounded-lg text-black"
//           onClick={() => setOpen((v) => !v)}
//           aria-label={t("a11y.menu")}
//         >
//           {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden border-t border-border bg-white/95 backdrop-blur">
//           <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
//             <a onClick={() => setOpen(false)} href="/">
//               {t("nav.home")}
//             </a>
//             <a onClick={() => setOpen(false)} href="/chat">
//               {t("chat.title")}
//             </a>
//             <a onClick={() => setOpen(false)} href="/weather">
//               {t("weather.title")}
//             </a>
//             <a onClick={() => setOpen(false)} href="/contacts">
//               {t("nav.contacts")}
//             </a>
//             <a onClick={() => setOpen(false)} href="/about">
//               {t("nav.about")}
//             </a>

//             <div className="pt-2 border-t">
//               {isAuthenticated ? (
//                 <Button className="w-full" onClick={handleLogout}>
//                   Logout
//                 </Button>
//               ) : (
//                 <div className="flex gap-2">
//                   <Button className="w-full" asChild>
//                     <Link to="/login">Login</Link>
//                   </Button>
//                   <Button className="w-full" asChild variant="secondary">
//                     <Link to="/signup">Sign Up</Link>
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useEffect, useState } from "react";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SettingsPopover } from "@/components/SettingsPopover";
import { useTranslation } from "react-i18next";
import logo from "@/assets/new-logo.png";
import useAuth from "@/hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation("common");
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
    toast.success("Logged out successfully!");
    navigate("/login"); // ✅ FIX
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur shadow-sm border-border"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 h-22 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="App logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain shrink-0 block"
          />
          <div className="animate-fade-in">
            <h1 className="text-xl font-bold text-black">BHARTI-kisan ai</h1>
            <p className="text-sm text-gray-600">{t("subtitle")}</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-black hover:text-gray-700" to="/">
            {t("nav.home")}
          </Link>
          <Link className="text-black hover:text-gray-700" to="/chat">
            {t("chat.title")}
          </Link>
          <Link className="text-black hover:text-gray-700" to="/weather">
            {t("weather.title")}
          </Link>
          <Link className="text-black hover:text-gray-700" to="/contacts">
            {t("nav.contacts")}
          </Link>
          <Link className="text-black hover:text-gray-700" to="/about">
            {t("nav.about")}
          </Link>
        </nav>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <SettingsPopover />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg text-black"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)}>
              {t("nav.home")}
            </Link>
            <Link to="/chat" onClick={() => setOpen(false)}>
              {t("chat.title")}
            </Link>
            <Link to="/weather" onClick={() => setOpen(false)}>
              {t("weather.title")}
            </Link>
            <Link to="/contacts" onClick={() => setOpen(false)}>
              {t("nav.contacts")}
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              {t("nav.about")}
            </Link>

            <div className="pt-2 border-t">
              {isAuthenticated ? (
                <Button className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button className="w-full" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="w-full" asChild variant="secondary">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
