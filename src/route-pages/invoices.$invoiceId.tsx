"use client";

import { getRouteApi } from "@tanstack/react-router";

const routeApi = getRouteApi("/invoices/$invoiceId");

export function InvoicesInvoiceId() {
	const invoice = routeApi.useLoaderData();

	return (
		<div className='max-w-full flex flex-col mb-4'>
			<h2 className='mb-2'>
				<span className='font-medium'>📃 Invoice ID:</span> {invoice.id}
			</h2>
			<p className='mb-2'>
				<span className='font-medium'>📃 Invoice Title:</span> {invoice.title}
			</p>
			<p>
				<span className='font-medium'>📃 Content:</span> {invoice.body}
			</p>
		</div>
	);
}
