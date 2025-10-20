import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthProvider.jsx";
import router from "./routes/Route";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider> */}{" "}
      <AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
              padding: "12px 20px",
              fontSize: "14px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            },
            success: { duration: 3000 },
            error: { duration: 4000 },
          }}
        />
        <RouterProvider router={router} />
      </AuthProvider>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  </StrictMode>
);
