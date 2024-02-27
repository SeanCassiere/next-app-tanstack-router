import { z } from "zod";

const invoiceItemSchema = z.object({
	userId: z.coerce.string(),
	id: z.coerce.string(),
	title: z.string(),
	body: z.string(),
});

export async function fetchInvoice(id: string) {
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then((res) => res.json())
		.then((res) => invoiceItemSchema.parse(res));
}

const invoicesListSchema = z.array(invoiceItemSchema);

export async function fetchInvoices() {
	return await fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((res) => invoicesListSchema.parse(res));
}
