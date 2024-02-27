"use client";

import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { fetchInvoices } from "@/api";

export const Route = createFileRoute("/invoices")({
	component: lazyRouteComponent(
		() => import("@/route-pages/invoices.route"),
		"InvoicesRoute"
	),
	loader: () => fetchInvoices(),
});
