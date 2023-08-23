import { ReactNode } from "react";
import { SmartToyOutlined as SmartToyOutlinedIcon } from "@mui/icons-material";

import { Emitter } from "../../types";

import UserIcon from "components/UserIcon";

const iconMap: Record<Emitter, ReactNode> = { bot: <SmartToyOutlinedIcon />, user: <UserIcon /> };

export default function useChatIcon(emitter: Emitter) {
  return iconMap[emitter];
}
