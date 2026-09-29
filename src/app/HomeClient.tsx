"use client";

import Button from "@/components/atoms/button";
import SearchField from "@/components/atoms/search-field";
import SmallHeroCard from "@/components/molecules/small-hero-card";
import { ChangeEvent } from "react";

function HomeClient() {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Data", e.target.value);
  };
  return (
    <div>
      <SearchField
        placeholder="Course, topic, creator"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e)}
      />

      <Button>Search</Button>
      <SmallHeroCard />
      <div className="h-90 container bg-crimson-800"></div>
    </div>
  );
}

export default HomeClient;
