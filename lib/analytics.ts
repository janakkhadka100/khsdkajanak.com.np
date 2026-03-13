/**
 * Provider-agnostic analytics. Call trackEvent from client code.
 * Set window.__analytics in app/analytics.tsx (or layout) to send to your provider
 * (e.g. gtag, plausible, or a custom backend).
 */

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  (window as unknown as { __analytics?: { track?: (e: string, p?: Record<string, string | number | boolean>) => void } })
    .__analytics?.track?.(eventName, properties);
}
