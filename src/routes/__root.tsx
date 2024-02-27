"use client";

import NextLink from "next/link";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<main className='min-h-screen bg-white'>
				<div className='px-4 py-2'>
					<p>
						<NextLink className='underline' href='/'>
							When you go back to the app router you are completely leaving the
							Tanstack Router environment.
						</NextLink>
					</p>
					<p>Everything below here is now in @tanstack/react-router land.</p>
				</div>
				<hr />
				<div className='px-4 flex gap-2'>
					<Link
						to='/'
						className='py-2 font-medium'
						activeProps={{ className: "underline underline-offset-4" }}
						activeOptions={{ exact: true }}
					>
						Dashboard
					</Link>
					<Link
						to='/invoices'
						className='py-2 font-medium'
						activeProps={{ className: "underline underline-offset-4" }}
					>
						Invoices
					</Link>
				</div>
				<hr />
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</>
	),
});
