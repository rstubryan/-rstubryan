import ContentTitle from "@/components/molecules/ContentTitle";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function PortfolioContent() {
  const portfolioCard = [
    {
      id: 1,
      title: "Lorem",
      description:
        "A platform that connects people who need help with those who can provide help.",
      link: "/lorem",
      footer: "Lorem",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "A platform that connects people who need help with those who can provide help.",
      link: "/lorem",
      footer: "Lorem",
    },
  ];

  const linkItems = [
    {
      id: 1,
      link: "/all",
      content: "All",
    },
    {
      id: 2,
      link: "/app-development",
      content: "App Development",
    },
  ];

  return (
    <>
      <ContentTitle heading={`Portfolio`} description={``} />
      <div className="w-full flex justify-end py-5 gap-4">
        {linkItems.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={`hover:underline hover:underline-offset-4`}
          >
            <p>{item.content}</p>
          </Link>
        ))}
      </div>
      <div className="w-full gap-4 grid grid-cols-2">
        {portfolioCard.map((item) => (
          <Card
            key={item.id}
            className="bg-secondary dark:bg-primary text-primary dark:text-secondary"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className={`py-1`}>
                {item.description}
              </CardDescription>
            </CardHeader>
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
        ))}
      </div>
    </>
  );
}
