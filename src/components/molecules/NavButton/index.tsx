import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import {
  BriefcaseBusiness,
  HomeIcon,
  NewspaperIcon,
  NotepadText,
  UserCircleIcon,
} from "lucide-react";

export default function NavButton() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      url: "/",
    },
    {
      id: 2,
      name: "Resume",
      icon: "resume",
      url: "/resume",
    },
    {
      id: 3,
      name: "Portfolio",
      icon: "portfolio",
      url: "/portfolio",
    },
    {
      id: 4,
      name: "Blog",
      icon: "blog",
      url: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      icon: "contact",
      url: "/contact",
    },
  ];

  const iconMapping: { [key: string]: JSX.Element } = {
    home: <HomeIcon className="h-4 w-4" />,
    resume: <NotepadText className="h-4 w-4" />,
    blog: <NewspaperIcon className="h-4 w-4" />,
    portfolio: <BriefcaseBusiness className="h-4 w-4" />,
    contact: <UserCircleIcon className="h-4 w-4" />,
  };

  return (
    <>
      <div className="lg:mt-[-5rem] mt-0 lg:mr-[-2.5rem] mr-0 flex lg:w-max w-full ml-auto gap-4">
        <div className="flex lg:flex-row flex-col lg:flex-wrap gap-4 w-full">
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.url}>
              <Button className="flex items-center gap-1.5 shadow-md w-full lg:w-auto">
                {iconMapping[item.icon]}
                {item.name}
              </Button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
