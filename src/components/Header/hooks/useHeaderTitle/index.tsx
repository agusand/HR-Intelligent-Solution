import { useLocation } from "react-router-dom";

export default function useHeaderTitle() {
  const location = useLocation();
  const title = location.pathname.includes("dashboard")
    ? "HR Application Portal"
    : "Applicant Chatbot";
  return { title };
}
