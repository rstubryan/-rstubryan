import React from "react";

interface HeadingTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeadingText({
  children,
  className,
  ...props
}: HeadingTextProps) {
  return (
    <h2
      className={`scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-primary ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
