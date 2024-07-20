import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface SnsCardProps {
  className?: string;
}

export default function SnsCard({ className }: SnsCardProps) {
  const { theme } = useTheme();
  const IconMap: { [key: string]: JSX.Element } = {
    GitHub: <Github className="h-4 w-4" />,
    Discord:
      theme === "light" ? (
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
          alt="Discord"
          className="h-4 w-4"
        />
      ) : (
        <img
          src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
          alt="Discord"
          className="h-4 w-4"
        />
      ),
    LinkedIn: <Linkedin className="h-4 w-4" />,
  };

  const sns = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/rstubryan",
    },
    {
      id: 2,
      name: "Discord",
      url: "https://discordapp.com/users/554985727327207424",
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rstubryan/",
    },
  ];

  return (
    <>
      <div className={`flex lg:flex-row flex-col gap-3 ${className}`}>
        {sns.map((item) => (
          <Link key={item.id} to={item.url} target="_blank" rel="noreferrer">
            <Button className={"w-full"}>
              {IconMap[item.name] || item.name}
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
}
