import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/antd.min.css";

import Routes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
