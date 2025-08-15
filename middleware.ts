import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

/**
 * Middleware to protect routes
 * Der Vorteil des Einsatzes von Middleware für diese Aufgabe
 * besteht darin, dass die geschützten Routen erst dann
 * gerendert werden, wenn die Middleware die Authentifizierung
 * überprüft hat. Dadurch werden sowohl die Sicherheit als auch
 * die Leistung Ihrer Anwendung verbessert.
 */
