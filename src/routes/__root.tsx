import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aparna Humane — CAD Technician, Belfast" },
      { name: "description", content: "Portfolio of Aparna Humane, a detail-oriented CAD Technician based in Belfast specialising in 2D AutoCAD drawings, Revit, and design coordination." },
      { name: "author", content: "Aparna Humane" },
      { property: "og:title", content: "Aparna Humane — CAD Technician, Belfast" },
      { property: "og:description", content: "Portfolio of Aparna Humane, a detail-oriented CAD Technician based in Belfast specialising in 2D AutoCAD drawings, Revit, and design coordination." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Aparna Humane — CAD Technician, Belfast" },
      { name: "twitter:description", content: "Portfolio of Aparna Humane, a detail-oriented CAD Technician based in Belfast specialising in 2D AutoCAD drawings, Revit, and design coordination." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4e5b0b29-dd18-44d3-8e2d-ef6effc1adcf/id-preview-07895a84--82b3b82c-0492-4085-aa78-a74f0c862d03.lovable.app-1776619733903.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4e5b0b29-dd18-44d3-8e2d-ef6effc1adcf/id-preview-07895a84--82b3b82c-0492-4085-aa78-a74f0c862d03.lovable.app-1776619733903.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
