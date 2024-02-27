"use client";

import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/settings")({
	component: lazyRouteComponent(
		() => import("@/route-pages/settings"),
		"SettingsPage"
	),
});
