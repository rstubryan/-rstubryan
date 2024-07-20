import React from "react";
import ContainerLayout from "@/components/templates/ContainerLayout.tsx";
import NavList from "@/components/molecules/NavList";
import ProfileCard from "@/components/organisms/ProfileCard";
import NavButton from "@/components/molecules/NavButton";

interface LandingPagesLayoutProps {
  children: React.ReactNode;
}

export default function LandingPagesLayout({
  children,
}: LandingPagesLayoutProps) {
  return (
    <ContainerLayout>
      <header>
        <NavList />
      </header>
      <main className="flex lg:flex-row flex-col gap-3 mt-32">
        <div className="mb-2 lg:mb-0">
          <ProfileCard />
        </div>
        <div className="bg-white dark:bg-secondary shadow-md w-full pt-6 p-10 rounded-xl z-0 relative">
          <NavButton />
          {children}
        </div>
      </main>
    </ContainerLayout>
  );
}
