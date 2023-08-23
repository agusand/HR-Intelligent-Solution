import {
  SpaceDashboardOutlined as SpaceDashboardOutlinedIcon,
  ForumOutlined as ForumOutlinedIcon,
} from "@mui/icons-material";

import { SideBarItem } from "./types";

export default function useSideBarItems() {
  const sideBarItems: SideBarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <SpaceDashboardOutlinedIcon fontSize="large" />,
    },
    { title: "Chat Bot", href: "/chatbot", icon: <ForumOutlinedIcon fontSize="large" /> },
  ];
  return sideBarItems;
}
