"use client";

import NextLink from "next/link";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<main className='min-h-screen bg-white'>
			<div className='px-4 py-2'>
				<p>Everything below here is a part of @tanstack/react-router.</p>
				<p>
					<NextLink className='underline' href='/'>
						When you go back to the app router you are completely leaving the
						Tanstack Router environment.
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
