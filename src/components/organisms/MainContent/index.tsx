import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { PanelTop, Server, Smartphone } from "lucide-react";
import ContentTitle from "@/components/molecules/ContentTitle";

export default function MainContent() {
  const aboutMe =
    "A seventh-semester student majoring in Informatics Engineering at Nusa Putra University with a GPA of 3.91 out of 4. I have a strong interest in programming and am determined to become a Web Developer, particularly in the fields of Front-End Development and Full-Stack Development. I have practical experience in web development technologies such as HTML, CSS, SCSS, PHP, JavaScript, and TypeScript, as well as expertise in web frameworks like Bootstrap, Tailwind, NativeWind (Mobile App), jQuery, Vue 3, React, React Native (Mobile App), Inertia, and Laravel. I'm eager to expand my knowledge further.";
  const whatIDo = [
    {
      id: 1,
      icon: PanelTop,
      title: "Web Development",
      description: "React",
      content:
        "I'm currently deepening my understanding of React because I'm trying to use TypeScript first before fully transitioning to Next.js.",
      link: "/web-projects",
      footer: "Web Projects",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      description: "React Native",
      content: "Card Content",
      link: "/web-projects",
      footer: "Mobile Apps Projects",
    },
    {
      id: 3,
      icon: Server,
      title: "Fullstack Development",
      description: "Laravel & Inertia JS",
      content: "Card Content",
      link: "/web-projects",
      footer: "Fullstack Projects",
    },
  ];

  return (
    <>
      <ContentTitle heading={`About me`} description={aboutMe} />
      <div className="">
        <ContentTitle heading={`What i do`} description={``} />
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
          {whatIDo.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === whatIDo.length - 1 ? "col-span-full" : ""
              }`}
            >
              <Card className="bg-secondary dark:bg-primary text-primary dark:text-secondary">
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
                <CardContent className={`text-justify`}>
                  {item.content}
                </CardContent>
                <CardFooter>
                  <Link to={item.link} className={`w-full`}>
                    <Button
                      className={`w-full bg-primary dark:bg-secondary text-secondary dark:text-primary`}
                    >
                      {item.footer}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
