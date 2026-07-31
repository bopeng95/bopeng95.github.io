export type ExternalIconLinkProps = {
  href: string;
  tooltipText?: string;
  children: React.ReactNode;
};

export const ExternalIconLink = ({
  href,
  tooltipText,
  children,
}: ExternalIconLinkProps) => {
  return (
    <span className="group relative inline-flex">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-latte-subtext dark:text-mocha-subtext inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
      >
        {children}
      </a>
      {tooltipText && (
        <span
          role="tooltip"
          className="bg-latte-text/90 text-latte-base pointer-events-none absolute top-full left-1/2 mt-3 -translate-x-1/2 rounded px-2 py-1 text-[11px] font-medium whitespace-nowrap opacity-0 transition-opacity delay-100 group-focus-within:opacity-100 group-hover:opacity-100"
        >
          <span className="border-b-latte-text/90 absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent" />
          {tooltipText}
        </span>
      )}
    </span>
  );
};
