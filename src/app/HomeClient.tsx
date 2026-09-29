"use client";

import Avatar from "@/components/atoms/avatar";
import Button from "@/components/atoms/button";
import FacePile from "@/components/atoms/face-pile";
import ProgressBar from "@/components/atoms/progress-bar";
import SearchField from "@/components/atoms/search-field";
import SmallHeroCard from "@/components/molecules/small-hero-card";
import { ChangeEvent } from "react";

function HomeClient() {
  const avatars: string[] = [
    "/images/avatars/avatar1.png",
    "/images/avatars/avatar2.png",
    "/images/avatars/avatar3.png",
    "/images/avatars/avatar4.png",
    "/images/avatars/avatar5.png",
    "/images/avatars/avatar6.png",
  ];

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
      <ProgressBar progress="50%"/>
    </div>
  );
}

export default HomeClient;
