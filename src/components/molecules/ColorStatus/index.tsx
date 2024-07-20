import BaseText from "@/components/atoms/BaseText";

interface ColorStatusProps {
  color: string;
  description: string;
}

export default function ColorStatus({ color, description }: ColorStatusProps) {
  return (
    <>
      <div className="flex items-center gap-1.5">
        <div
          style={{ backgroundColor: color }}
          className={`w-4 h-4 rounded-full`}
        ></div>
        <BaseText>{description}</BaseText>
      </div>
    </>
  );
}
