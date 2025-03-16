import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import UserProvider from "./contexts/UserProvider.jsx";
import { NotFound, Login, Repo } from "./pages";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
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
					path="/repository"
					element={<Repo />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	</UserProvider>
);
