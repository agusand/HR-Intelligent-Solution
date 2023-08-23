import { RouterProvider } from "react-router-dom";

import useRouteList from "./hooks/useRouteList";

export default function RouterComponent() {
  const routeList = useRouteList();

  return <RouterProvider router={routeList} />;
}
