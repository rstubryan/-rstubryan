import ContentTitle from "@/components/molecules/ContentTitle";
import { Mail, SendHorizonal, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import BaseText from "@/components/atoms/BaseText";
import InputForm from "@/components/molecules/InputForm";
import { Button } from "@/components/ui/button.tsx";

export default function ContactContent() {
  const whatIDo = [
    {
      id: 1,
      icon: Smartphone,
      title: "Phone",
      description: "WhatsApp",
      content: "+62 822 9992 3520",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      description: "Google Mail",
      content: "restubumirr@gmail.com",
    },
  ];

  return (
    <>
      <ContentTitle heading={`Contact`} description={``} />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        {whatIDo.map((item) => (
          <Card
            key={item.id}
            className="bg-secondary dark:bg-primary text-primary dark:text-secondary"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <item.icon size={32} />
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className={`py-1`}>
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className={`text-justify`}>{item.content}</CardContent>
          </Card>
        ))}
      </div>
      <div className="my-5">
        <BaseText className={``}>
          Feel free to contact me for any inquiries or collaborations. I am open
          to any opportunities.
        </BaseText>
        <form className={`py-5`}>
          <div className="grid w-full items-center gap-1.5">
            <InputForm
              htmlFor={`name`}
              label={`Name`}
              type={`text`}
              id={`name`}
              placeholder={`Your name`}
            />
            <InputForm
              htmlFor={`email`}
              label={`Email`}
              type={`email`}
              id={`email`}
              placeholder={`Your email`}
            />
            <InputForm
              htmlFor={`message`}
              label={`Message`}
              type={`text`}
              id={`message`}
              placeholder={`Message`}
            />
            <Button className={`w-full mt-4 flex gap-2`}>
              <SendHorizonal className={`w-4 h-4`} />
              Send
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
