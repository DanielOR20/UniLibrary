import { RouterProvider } from "react-router-dom";

import { router } from "./Routes/Routing";

import { DashboardProvider } from "./Context/DashboardContext";

export default function App() {
  return (
    <DashboardProvider>
      <RouterProvider router={router} />
    </DashboardProvider>
  );
}