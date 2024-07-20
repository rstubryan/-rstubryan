import React from "react";

interface SubHeadingTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubHeadingText({
  children,
  className,
  ...props
}: SubHeadingTextProps) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight text-primary ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}
