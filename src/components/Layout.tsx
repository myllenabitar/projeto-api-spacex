import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="background items-center text-center font-sans text-3xl text-custom-preto font-sans text-3xl">
      <main className="w-full max-w-4xl p-4">{children}</main>
    </div>
  );
}
