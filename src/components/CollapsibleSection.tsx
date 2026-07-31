import { useId, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const CollapsibleSection = ({
  title,
  children,
}: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <section className="mt-12">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-2 transition-opacity hover:opacity-70"
      >
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        <FaChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={contentId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="-mx-3 overflow-hidden px-3">{children}</div>
      </div>
    </section>
  );
};
