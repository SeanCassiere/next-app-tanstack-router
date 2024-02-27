"user client";

import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { fetchInvoice } from "@/api";

export const Route = createFileRoute("/invoices/$invoiceId")({
	component: lazyRouteComponent(
		() => import("@/route-pages/invoices.$invoiceId"),
		"InvoicesInvoiceId"
	),
	loader: ({ params: { invoiceId } }) => fetchInvoice(invoiceId),
});
