import ContentTitle from "@/components/molecules/ContentTitle";
import { Mail, School } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function ResumeContent() {
  const resumeInfo = [
    {
      id: 1,
      icon: School,
      title: "Nusa Putra University",
      description: "2021 - present | GPA 3.92/4.00",
      content:
        "Undergraduate Bachelor Degree in Informatics Engineering with a focus on Software Engineering",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      description: "Google Mail",
      content: "restubumirr@gmail.com",
    },
  ];

  const resumeSkills = [
    {
      id: 1,
      title: "Skills",
      content: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "SCSS",
        },
        {
          id: 4,
          name: "PHP",
        },
        {
          id: 5,
          name: "JavaScript",
        },
        {
          id: 6,
          name: "TypeScript",
        },
        {
          id: 7,
          name: "Bootstrap",
        },
        {
          id: 8,
          name: "Tailwind",
        },
        {
          id: 9,
          name: "NativeWind",
        },
        {
          id: 10,
          name: "jQuery",
        },
        {
          id: 11,
          name: "Vue 3",
        },
        {
          id: 12,
          name: "React",
        },
        {
          id: 13,
          name: "React Native",
        },
        {
          id: 14,
          name: "Inertia",
        },
        {
          id: 15,
          name: "Laravel",
        },
      ],
    },
    {
      id: 2,
      title: "Tools",
      content: [
        {
          id: 1,
          name: "Git",
        },
        {
          id: 2,
          name: "GitHub",
        },
        {
          id: 3,
          name: "GitLab",
        },
        {
          id: 4,
          name: "JetBrains",
        },
        {
          id: 5,
          name: "Postman",
        },
      ],
    },
  ];

  return (
    <>
      <ContentTitle heading={`Resume`} description={``} />
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
        {resumeInfo.map((item) => (
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
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mt-5">
        {resumeSkills.map((item) => (
          <Card
            key={item.id}
            className="bg-secondary dark:bg-primary text-primary dark:text-secondary"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {item.content.map((skill) => (
                <Button
                  key={skill.id}
                  className={`flex-1 min-w-max cursor-default dark:bg-secondary text-white`}
                >
                  {skill.name}
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
