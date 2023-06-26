'use client'

import { Toaster } from "sonner";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Toaster />
      {children}
    </div>
  );
};

export default Provider;
