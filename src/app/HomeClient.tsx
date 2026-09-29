"use client";

import Avatar from "@/components/atoms/avatar";
import Button from "@/components/atoms/button";
import FacePile from "@/components/atoms/face-pile";
import ProgressBar from "@/components/atoms/progress-bar";
import SearchField from "@/components/atoms/search-field";
import HomeTabList from "@/components/molecules/home-tab-list";

import SmallHeroCard from "@/components/molecules/small-hero-card";
import { avatars } from "@/constants/constants";
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
      <Avatar size="md" src="/images/avatars/avatar1.png" alt="avatar1" />
      <FacePile images={avatars} count={"2k+"} />
      <ProgressBar progress={50} />
      <HomeTabList />
    </div>
  );
}

export default HomeClient;
