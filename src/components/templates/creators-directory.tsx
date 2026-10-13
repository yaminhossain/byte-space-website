"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchField from "@/components/atoms/search-field";
import CreatorCard from "@/components/organisms/creator-card";
import { creators } from "@/constants/creators";

function CreatorsDirectory() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [minimumRating, setMinimumRating] = useState("Any rating");

  const [sortBy, setSortBy] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const normalizedQuery = submittedQuery.trim().toLowerCase();
  
  const filteredCreators = creators
    .filter((creator) =>
      [creator.name, creator.title, creator.category, ...creator.specialties]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    )
    .filter(
      (creator) =>
        selectedCategory === "All categories" || creator.category === selectedCategory,
    )
    .filter(
      (creator) =>
        minimumRating === "Any rating" || Number(creator.rating) >= Number(minimumRating),
    )
    .sort((a, b) => {
      if (sortBy === "Top rated") return Number(b.rating) - Number(a.rating);
      if (sortBy === "Most courses") return b.courseCount - a.courseCount;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  const creatorCategories = [
    "All categories",
    ...Array.from(new Set(creators.map((creator) => creator.category))),
  ];
  const pageSize = 6;
  const pageCount = Math.ceil(filteredCreators.length / pageSize);
  const visibleCreators = filteredCreators.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <>
      <div className="bg-electric-violet-800 grid-background px-4 py-9 md:px-0 md:py-11">
        <div className="container text-center">
          <p className="label-md mb-3 text-crimson-400">Learn from people who do</p>
          <h1 className="heading-sm text-black-50 md:heading-md">Meet the creators</h1>
          <p className="body-lg mx-auto mt-3 max-w-2xl text-black-100">
            Find experienced teachers and creative minds ready to help you build your next skill.
          </p>
          <div className="mx-auto mt-5 flex max-w-[461px] flex-col items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 sm:max-w-[640px] sm:flex-row">
            <p className="body-sm text-white">Ready to teach? Share your skills with ByteSpace learners.</p>
            <Link
              href="/sign-up"
              className="label-md inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-3xl bg-crimson-400 px-5 text-black-950"
            >
              Join as a creator <span aria-hidden="true">→</span>
            </Link>
          </div>
          <form
            className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmittedQuery(query);
              setCurrentPage(1);
            }}
          >
            <SearchField
              placeholder="Search creators"
              aria-label="Search creators"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button
              type="submit"
              className="label-md inline-flex min-h-13 min-w-32 items-center justify-center rounded-3xl bg-crimson-400 px-6 text-black-950 transition-colors hover:bg-crimson-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="container px-4 py-8 md:px-0 md:py-10">
        <div className="mb-4 flex justify-between">
          <p className="body-sm text-black-500" aria-live="polite">
            {filteredCreators.length > 0
              ? `Showing ${(currentPage - 1) * pageSize + 1}–${Math.min(currentPage * pageSize, filteredCreators.length)} of ${filteredCreators.length} creators`
              : "No creators found"}
          </p>
        </div>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center gap-2 rounded-3xl border border-black-200 bg-white px-4 label-sm text-black-700">
              <Image src="/icons/courses/filter.svg" width={16} height={16} alt="" />
              Filter
            </div>
            <label className="flex h-12 items-center gap-2 rounded-3xl border border-black-200 bg-white px-4">
              <Image src="/icons/courses/category.svg" width={16} height={16} alt="" />
              <span className="sr-only">Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  setCurrentPage(1);
                }}
                className="max-w-40 appearance-none bg-transparent label-sm text-black-700 focus:outline-none"
              >
                {creatorCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </label>
            <label className="flex h-12 items-center gap-2 rounded-3xl border border-black-200 bg-white px-4">
              <Image src="/icons/blue-star.png" width={16} height={16} alt="" />
              <span className="sr-only">Minimum rating</span>
              <select
                value={minimumRating}
                onChange={(event) => {
                  setMinimumRating(event.target.value);
                  setCurrentPage(1);
                }}
                className="appearance-none bg-transparent label-sm text-black-700 focus:outline-none"
              >
                <option>Any rating</option>
                <option value="4.8">4.8 and up</option>
                <option value="4.9">4.9 and up</option>
              </select>
            </label>
          </div>
          <label className="flex h-12 items-center gap-2 self-start rounded-3xl border border-black-200 bg-white px-4 sm:self-auto">
            <Image src="/icons/courses/most-relevent.svg" width={16} height={16} alt="" />
            <span className="sr-only">Sort creators</span>
            <select
              value={sortBy}
              onChange={(event) => {
                setSortBy(event.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none bg-transparent label-sm text-black-700 focus:outline-none"
            >
              <option>Most relevant</option>
              <option>Top rated</option>
              <option>Most courses</option>
            </select>
          </label>
        </div>
        {filteredCreators.length > 0 ? (
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCreators.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        ) : (
          <p className="body-md rounded-3xl border border-black-100 bg-black-50 px-6 py-10 text-center text-black-700">
            No creators match “{query}”. Try a name or category.
          </p>
        )}
        {pageCount > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Creator pages">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="rounded-2xl border border-black-200 px-4 py-2 label-sm text-black-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
                className={`size-10 rounded-2xl label-sm ${currentPage === page ? "bg-electric-violet-800 text-white" : "border border-black-200 text-black-700"}`}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              disabled={currentPage === pageCount}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="rounded-2xl border border-black-200 px-4 py-2 label-sm text-black-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </>
  );
}

export default CreatorsDirectory;
