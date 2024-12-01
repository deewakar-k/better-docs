import React from "react";

interface DocumentLayoutProps {
  children: React.ReactNode;
}

export default function DocumentsLayout({ children }: DocumentLayoutProps) {
  return <div className="flex flex-col gap-y-4">{children}</div>;
}
