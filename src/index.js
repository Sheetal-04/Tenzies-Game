import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

function App() {
	const routes = [
			<Route path="/" element={<Game />} />
	];
	const router = createBrowserRouter(createRoutesFromElements(...routes));
	return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>
);
