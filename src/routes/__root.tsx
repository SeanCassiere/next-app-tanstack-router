"use client";

import NextLink from "next/link";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<main className='min-h-screen'>
				<div className='px-4 py-2'>
					<div className='flex flex-col justify-between lg:flex-row'>
						<p>
							When you go back to the app router you are completely leaving the
							Tanstack Router environment.
						</p>
						<ul className='flex gap-4'>
							<li>
								<NextLink className='underline underline-offset-4' href='/'>
									NextLink back to /
								</NextLink>
							</li>
							<li>
								<a className='underline underline-offset-4' href='/'>
									Anchor back to /
								</a>
							</li>
						</ul>
					</div>
					<p className='mt-4'>
						Everything below here is now in @tanstack/react-router land.
					</p>
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
