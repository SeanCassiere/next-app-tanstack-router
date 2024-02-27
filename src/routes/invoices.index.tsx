import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/")({
	component: lazyRouteComponent(
		() => import("@/route-pages/invoices.Index"),
		"InvoicesIndex"
	),
});
