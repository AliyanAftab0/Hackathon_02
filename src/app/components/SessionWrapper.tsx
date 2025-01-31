"use client";
import { ClerkProvider } from "@clerk/nextjs";

const SessionProvider = ({ children }: any) => {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default SessionProvider