"use client";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotesIcon from "@mui/icons-material/Notes";
import AddIcon from "@mui/icons-material/Add";
import ChecklistIcon from "@mui/icons-material/Checklist";
import RuleIcon from "@mui/icons-material/Rule";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GetUrl = () => {
  const pathname = usePathname();
  return pathname;
};

function Sidebar() {
  const sidebar = [
    {
      id: 1,
      title: "Home",
      link: "/",
      icon: <HomeIcon />,
    },
    {
      id: 4,
      title: "Completed",
      link: "/completed-todos",
      icon: <ChecklistIcon />,
    },
    {
      id: 5,
      title: "Uncompleted",
      link: "/uncompleted-todos",
      icon: <RuleIcon />,
    },
    {
      id: 6,
      title: "Add New",
      link: "/add-todo",
      icon: <AddIcon />,
    },
  ];

  const url = GetUrl();

  return (
    <div className="pt-5 rounded min-h-screen bg-slate-200">
      <h2>
        <a href="/" className="text-2xl font-bold py-3">
          Menu
        </a>
      </h2>
      <ul className=" pt-5">
        {sidebar.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.link}
              className={` 
              ${url === item.link ? "bg-slate-300" : ""}
                  hover:bg-slate-300 px-6 py-4 w-full flex items-center `}
            >
              {item.icon}
              <p className="pl-1">{item.title}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
