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
        selectedCategory === "All categories" ||
        creator.category === selectedCategory,
    )
    .filter(
      (creator) =>
        minimumRating === "Any rating" ||
        Number(creator.rating) >= Number(minimumRating),
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
      <section className="bg-electric-violet-800 grid-background px-4 py-12 md:px-0 md:py-16">
        <div className="container grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <p className="label-md mb-3 text-crimson-400">
              Learn from people who do
            </p>
            <h1 className="heading-sm text-black-50 md:heading-md">
              Meet the creators
            </h1>
            <p className="body-lg mt-4 max-w-xl text-black-100">
              Find experienced teachers and creative minds ready to help you
              build your next skill.
            </p>
          </div>
          <aside className="relative isolate overflow-hidden rounded-3xl bg-crimson-400 p-6 text-black-950 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
            <div
              className="absolute -right-12 -top-14 -z-10 size-48 rounded-full border-[24px] border-electric-violet-800/10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 right-12 -z-10 size-36 rounded-full bg-white/30 blur-2xl"
              aria-hidden="true"
            />
            <p className="label-xs uppercase tracking-[0.16em] text-black-700">
              For teachers, makers &amp; experts
            </p>
            <h2 className="heading-xs mt-3 max-w-sm text-black-950 sm:text-2xl">
              Your experience can inspire someone else’s next step.
            </h2>
            <p className="body-sm mt-3 max-w-sm text-black-800">
              Turn what you know into a course and share it with a community
              ready to learn.
            </p>
            <ul className="mt-5 space-y-2">
              <li className="flex items-center gap-2 body-sm text-black-900">
                <span
                  className="flex size-5 items-center justify-center rounded-full bg-electric-violet-800 text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                Create and publish at your pace
              </li>
              <li className="flex items-center gap-2 body-sm text-black-900">
                <span
                  className="flex size-5 items-center justify-center rounded-full bg-electric-violet-800 text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>
                Help learners build practical skills
              </li>
            </ul>
            <Link
              href="/sign-up"
              className="label-md mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-3xl bg-electric-violet-800 px-6 text-white transition-colors hover:bg-electric-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-950 sm:w-auto"
            >
              Join as a creator{" "}
              <span className="text-crimson-400" aria-hidden="true">
                →
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <section
        className="bg-white px-4 py-8 md:px-0 md:py-10"
        aria-label="Search and browse creators"
      >
        <div className="container">
          <form
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmittedQuery(query);
              setCurrentPage(1);
            }}
          >
            <SearchField
              placeholder="Search by name, skill, or category"
              aria-label="Search creators by name, skill, or category"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="border border-gray-200"
            />
            <button
              type="submit"
              className="label-md inline-flex min-h-13 w-full shrink-0 items-center justify-center rounded-3xl bg-crimson-400 px-6 text-black-950 transition-colors hover:bg-crimson-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-violet-800 sm:w-[147px]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section
        className="container px-4 pb-10 md:px-0 md:pb-12"
        aria-label="Creator results"
      >
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
              <Image
                src="/icons/courses/filter.svg"
                width={16}
                height={16}
                alt=""
              />
              Filter
            </div>
            <label className="flex h-12 items-center gap-2 rounded-3xl border border-black-200 bg-white px-4">
              <Image
                src="/icons/courses/category.svg"
                width={16}
                height={16}
                alt=""
              />
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
                  <option key={category} value={category}>
                    {category}
                  </option>
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
            <Image
              src="/icons/courses/most-relevent.svg"
              width={16}
              height={16}
              alt=""
            />
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
          <nav
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Creator pages"
          >
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="rounded-2xl border border-black-200 px-4 py-2 label-sm text-black-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  aria-current={currentPage === page ? "page" : undefined}
                  onClick={() => setCurrentPage(page)}
                  className={`size-10 rounded-2xl label-sm ${currentPage === page ? "bg-electric-violet-800 text-white" : "border border-black-200 text-black-700"}`}
                >
                  {page}
                </button>
              ),
            )}
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
      </section>
    </>
  );
}

export default CreatorsDirectory;
