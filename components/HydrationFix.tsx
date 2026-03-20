"use client";
import { useSyncExternalStore, ReactNode } from "react";

interface HydrationFixProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const emptySubscribe = () => () => {};
const emptyGetSnapshot = () => true;
const emptyServerSnapshot = () => false;

export function HydrationFix({ children, fallback = null }: HydrationFixProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    emptyGetSnapshot,
    emptyServerSnapshot
  );

  if (!isClient) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
