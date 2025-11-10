"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "@/components/atoms/Button/Button";
import Container from "@/components/atoms/Container/Container";
import Logo from "@/components/atoms/Logo/Logo";
import NavWrapper from "@/components/molecules/NavWrapper/NavWrapper";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <div className="">
      <header className="bg-[#16041B]/95  backdrop-blur-2xl shadow-xs">
        <Container>
          <div className="flex h-[70px] justify-between items-center gap-10">
            <Logo />
            <div className="max-lg:hidden">
              <NavWrapper />
            </div>
            <div className="flex gap-4">
              <button
                className="text-gray-200 lg:hidden"
                onClick={toggleSidebar}
              >
                <AnimatePresence mode="wait">
                  {showSidebar ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <Button>Join the waitlist</Button>
            </div>
          </div>
        </Container>
      </header>
      <Sidebar showSidebar={showSidebar} />
    </div>
  );
};

export default Navbar;
