import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label";

interface InputFormProps {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

export default function InputForm({
  htmlFor,
  label,
  type,
  id,
  placeholder,
}: InputFormProps) {
  return (
    <>
      <div className="mb-3">
        <Label htmlFor={htmlFor} className={`text-primary`}>
          {label}
        </Label>
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`bg-secondary dark:bg-primary text-primary dark:text-secondary mt-1`}
        />
      </div>
    </>
  );
}
