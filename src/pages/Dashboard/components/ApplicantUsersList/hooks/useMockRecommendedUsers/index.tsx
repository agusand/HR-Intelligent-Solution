import { User } from "pages/Dashboard/types";

export default function useMockRecommendedUsers() {
  const mockRecommendedUsers: User[] = [
    {
      first_name: "Mariano",
      last_name: "Merdinger",
      is_external: true,
      email: "mariano.merdinger@accenture.com",
      scoring: 72,
    },
    {
      first_name: "Julieta",
      last_name: "Giampaoli",
      is_external: true,
      email: "julieta.giampaoli@accenture.com",
      scoring: 81,
    },
  ];

  mockRecommendedUsers.sort((a, b) => {
    if (a.scoring && b.scoring) return b.scoring - a.scoring;
    else return 0;
  });

  return { mockRecommendedUsers };
}
