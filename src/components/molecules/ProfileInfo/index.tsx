import BaseText from "@/components/atoms/BaseText";
import { Mail, Phone, LocateIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface profileInfoProps {
  id: number;
  icon: any;
  title: string;
  description: string;
}

export default function ProfileInfo() {
  const profileInfo: profileInfoProps[] = [
    {
      id: 1,
      icon: Phone,
      title: "Phone",
      description: "+62 822 9992 3520",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      description: "restubumirr@gmail.com",
    },
    {
      id: 3,
      icon: LocateIcon,
      title: "Address",
      description: "Sukabumi, West Java",
    },
  ];

  return (
    <>
      <div className="bg-secondary dark:bg-primary shadow-md w-full h-full p-8 mt-5 rounded-md">
        {profileInfo.map((info) => (
          <>
            <div
              key={info.id}
              className={
                "flex items-center gap-3 w-full border-b py-4 first:py-0 first:pb-4 last:pb-0 last:border-b-0"
              }
            >
              <info.icon
                className={`text-primary dark:text-secondary h-4 w-4`}
              />
              <div className="w-full">
                <BaseText
                  className={`text-primary/80 dark:text-secondary/80 font-semibold`}
                >
                  {info.title}
                </BaseText>
                <BaseText className={`text-primary dark:text-secondary`}>
                  {info.description}
                </BaseText>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="mt-5">
        <Button className={"w-full flex gap-2"}>
          <Download className={"w-4 h-4"} />
          Download Resume
        </Button>
      </div>
    </>
  );
}
