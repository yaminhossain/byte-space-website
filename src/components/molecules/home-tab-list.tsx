import Tab from "@/components/atoms/tab";
import { tabCategories } from "@/constants/constants";
import { useState } from "react";

function HomeTabList() {
  const [selectedTab, setSelectedTab] = useState<string>("Featured");

  const handleTabSelection = (tab: string): void => {
    setSelectedTab(tab);
  };
  return (
    <div className="container bg-white flex flex-col gap-5.25 items-center">
      <div className="flex gap-4">
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
      <div className="flex gap-4">
        {tabCategories.slice(8, 14).map((category) => (
          <Tab
            key={category}
            onClick={() => handleTabSelection(category)}
            className={`${category === selectedTab && "text-black-950 bg-crimson-400"}`}
          >
            {category}
          </Tab>
        ))}
      </div>
      <div className="flex gap-4">
        {tabCategories.slice(14, tabCategories.length).map((category) => (
          <Tab
            key={category}
            onClick={() => handleTabSelection(category)}
            className={`${category === selectedTab && "text-black-950 bg-crimson-400"}`}
          >
            {category}
          </Tab>
        ))}
        <button className="px-1 label-md text-electric-violet-800 cursor-pointer">
          + More
        </button>
      </div>
    </div>
  );
}

export default HomeTabList;
