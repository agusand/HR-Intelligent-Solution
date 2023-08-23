import Router from "components/Router";

import { AlertServiceProvider } from "services/AlertService";
import { LoadingServiceProvider } from "services/LoadingService";
import { QueryServiceProvider } from "services/QueryService";

function App() {
  return (
    <AlertServiceProvider>
      <LoadingServiceProvider>
        <QueryServiceProvider>
          <Router />
        </QueryServiceProvider>
      </LoadingServiceProvider>
    </AlertServiceProvider>
  );
}

export default App;
