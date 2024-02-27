"use client";

import NextLink from "next/link";
import {
	Link,
	Outlet,
	RouterProvider,
	createRootRoute,
	createRoute,
	createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
	component: () => (
		<main className='min-h-screen bg-white'>
			<div className='px-4 py-2'>
				<p>Everything below here is a part of @tanstack/react-router.</p>
				<p>
					<NextLink className='underline' href='/'>
						Go back to the normal app router page.
					</NextLink>
				</p>
			</div>
			<hr />
			<div className='px-4 py-2 flex gap-2'>
				<Link
					to='/'
					className='font-medium'
					activeProps={{ className: "underline" }}
					activeOptions={{ exact: true }}
				>
					Dashboard
				</Link>
				<Link
					to='/settings'
					className='font-medium'
					activeProps={{ className: "underline" }}
				>
					Settings
				</Link>
			</div>
			<hr />
			<Outlet />
		</main>
	),
});

const settingsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "settings",
	component: () => {
		return <div className='px-4 pt-4'>Settings</div>;
	},
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: () => {
		return <div className='px-4 pt-4'>Dashboard home</div>;
	},
});

const routeTree = rootRoute.addChildren([settingsRoute, indexRoute]);

// const history = createHashHistory();

const router = createRouter({
	basepath: "/dashboard",
	// history,
	routeTree,
	defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function Dashboard() {
	return <RouterProvider router={router} />;
}
