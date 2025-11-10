import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "7xl";
  className?: string;
}
