import React from "react";

interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerLayout({
  children,
  className,
}: ContainerLayoutProps) {
  return <div className={`container lg:p-10 p-5 ${className}`}>{children}</div>;
}
