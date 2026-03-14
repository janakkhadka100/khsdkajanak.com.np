import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className = "" }: Props) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-1 text-[0.7rem] uppercase tracking-[0.18em] text-gray-600 ${className}`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-500" aria-hidden>/</span>}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-royal-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isLast ? "text-gray-900 font-medium" : undefined}
                {...(isLast && { "aria-current": "page" })}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
