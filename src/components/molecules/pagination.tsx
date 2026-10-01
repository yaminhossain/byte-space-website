"use client";

import { cn } from "@/utils/helper";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        // onClick={() => onPageChange(currentPage - 1)}
        className="flex size-12 pb-1 items-center justify-center rounded-full border border-black-100 bg-white text-3xl text-black-950 disabled:opacity-50"
        aria-label="Previous page"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            // onClick={() => onPageChange(page)}
            className={cn(
              "flex size-10 items-center justify-center body-md font-medium",
              currentPage === page
                ? "text-electric-violet-800"
                : "text-black-950",
            )}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        // onClick={() => onPageChange(currentPage + 1)}
        className="flex size-12 pb-1 items-center justify-center rounded-full border border-black-100 bg-white text-3xl text-black-950 disabled:opacity-50"
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
