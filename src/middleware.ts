import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the routes that should be protected, including dynamic segments
const isProtectedRoute = createRouteMatcher(['/dashboard', '/shoplist/:slug']);

// Middleware to protect the routes
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// Export the configuration for Next.js middleware
export const config = {
  matcher: [
    // Skip Next.js internals and static files unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Include dynamic routes explicitly
    '/shoplist/:slug*',
  ],
};
