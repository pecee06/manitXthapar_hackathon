import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import UserProvider from "./contexts/UserProvider.jsx";
import { NotFound, Login, Prediction } from "./pages";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<App />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/predict"
						element={<Prediction />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</UserProvider>
	</StrictMode>
);
