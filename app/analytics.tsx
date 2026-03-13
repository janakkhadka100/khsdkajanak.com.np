"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __analytics?: {
      track?: (eventName: string, properties?: Record<string, string | number | boolean>) => void;
    };
  }
}

export function Analytics() {
  useEffect(() => {
    window.__analytics = {
      track(eventName, properties) {
        if (typeof console !== "undefined" && process.env.NODE_ENV === "development") {
          console.log("[analytics]", eventName, properties);
        }
        // TODO: send to provider, e.g. gtag('event', eventName, properties) or plausible(eventName, { props: properties })
      },
    };
    return () => {
      delete window.__analytics;
    };
  }, []);
  return null;
}

