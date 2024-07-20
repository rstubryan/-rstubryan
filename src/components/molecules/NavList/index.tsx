import HeadingText from "@/components/atoms/HeadingText";
import { ModeToggle } from "@/components/mode-toggle.tsx";

export default function NavList() {
  return (
    <>
      <div className="flex justify-between items-center">
        <HeadingText>rstubryan</HeadingText>
        <nav className="items-center">
          <ModeToggle />
        </nav>
      </div>
    </>
  );
}
