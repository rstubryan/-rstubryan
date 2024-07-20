import React from "react";

interface BaseTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseText({
  children,
  className,
  ...props
}: BaseTextProps) {
  return (
    <p className={`text-primary ${className}`} {...props}>
      {children}
    </p>
  );
}
