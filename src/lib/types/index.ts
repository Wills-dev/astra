import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}

export interface FAQ {
  question: string;
  percentage: number;
}

export interface FAQCategory {
  title: string;
  query: string;
  faqs: FAQ[];
}
