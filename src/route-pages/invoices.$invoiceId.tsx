"use client";

import { getRouteApi } from "@tanstack/react-router";

const routeApi = getRouteApi("/invoices/$invoiceId");

export function InvoicesInvoiceId() {
	const invoice = routeApi.useLoaderData();

	return (
		<div className='max-w-full flex flex-col'>
			<h2 className='mb-2'>Invoice ID: {invoice.id}</h2>
			<span className='mb-4'>Invoice Title: {invoice.title}</span>
			<div className='border p-2'>
				<p className='font-bold'>Content</p>
				<p>{invoice.body}</p>
			</div>
		</div>
	);
}
