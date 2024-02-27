"use client";

import { Link, Outlet, getRouteApi } from "@tanstack/react-router";

const routeApi = getRouteApi("/invoices");

export function InvoicesRoute() {
	const invoices = routeApi.useLoaderData();

	return (
		<div className='px-4 pt-4 grid gap-4 grid-cols-1 lg:grid-cols-4 h-full'>
			<div className='min-h-full lg:border-r border-b lg:border-b-0'>
				<nav>
					<ul className='flex flex-col gap-2'>
						<li>
							<Link
								to='/invoices/$invoiceId'
								params={{ invoiceId: "non-existent-invoice" }}
								className='text-blue-500'
								activeProps={{ className: "underline underline-offset-4" }}
							>
								Non existent invoice
							</Link>
						</li>
						{invoices.slice(0, 15).map((invoice) => (
							<li key={`invoice_list_${invoice.id}`}>
								<Link
									to='/invoices/$invoiceId'
									params={{ invoiceId: invoice.id }}
									className='text-blue-500 truncate max-w-full inline-block'
									activeProps={{ className: "underline underline-offset-4" }}
								>
									{invoice.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className='lg:col-span-3'>
				<Outlet />
			</div>
		</div>
	);
}
