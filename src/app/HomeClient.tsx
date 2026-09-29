"use client";

import SearchField from "@/components/atoms/search-field";
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
    </div>
  );
}

export default HomeClient;
