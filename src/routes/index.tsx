"use client";

import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/")({}).update({
	component: lazyRouteComponent(() => import("@/route-pages/index")),
});
