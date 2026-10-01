"use client";

import { tabCategories } from "@/constants/constants";
import { useState } from "react";
import Tab from "./tab";

function CoursesTabs() {
  const [selectedTab, setSelectedTab] = useState<string>("Featured");

  const handleTabSelection = (tab: string): void => {
    setSelectedTab(tab);
  };
  return (
    <div>
      <div className="flex justify-between gap-4">
        {tabCategories.slice(0, 8).map((category) => (
          <Tab
            key={category}
            onClick={() => handleTabSelection(category)}
            className={`${category === selectedTab && "text-black-950 bg-crimson-400"}`}
          >
            {category}
          </Tab>
        ))}
      </div>
    </div>
  );
}

export default CoursesTabs;
