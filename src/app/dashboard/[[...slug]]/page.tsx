"use client";

import { routeTree } from "@/route-tree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// export const dynamic = "force-dynamic";
export const revalidate = 0;

const router = createRouter({
	basepath: "/dashboard",
	routeTree,
	defaultPreload: "intent",
	defaultPendingComponent: () => (
		<div className='px-4'>Tanstack Router Loading...</div>
	),
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export default function Dashboard() {
	return <RouterProvider router={router} />;
}
