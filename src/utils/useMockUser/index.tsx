import { useEffect } from "react";

import useCreateProfile from "./hooks/useCreateProfile";

import User from "types/User";

const user = {
  first_name: "Ramiro",
  last_name: "Marinelli",
  email: "ramiro.marinelli@accenture.com",
  is_external: true,
  positionApplied: 3,
};
export default function useMockUser(): User & { positionApplied: number } {
  const { createProfile } = useCreateProfile();

  useEffect(() => {
    createProfile(user);
  }, [createProfile]);

  return user;
}
