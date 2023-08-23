import { createBrowserRouter } from "react-router-dom";

import Layout from "components/Layout";

import Dashboard from "pages/Dashboard";
import ChatBot from "pages/ChatBot";

export default function useRouteList() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard/:positionId/:userEmail",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/:positionId",
          element: <Dashboard />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/chatbot",
          element: <ChatBot />,
        },
      ],
    },
  ]);

  return router;
}
