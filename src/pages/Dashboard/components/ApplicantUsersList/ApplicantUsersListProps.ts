import { User } from "pages/Dashboard/types";

export default interface ApplicantUsersListProps {
  activeUser?: string;
  positionId?: number;
  recommended: User[];
}
