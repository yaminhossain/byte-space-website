"use client";

import Avatar from "@/components/atoms/avatar";
import Badge from "@/components/atoms/badge";
import Button from "@/components/atoms/button";
import FacePile from "@/components/atoms/face-pile";
import Pill from "@/components/atoms/pill";
import ProgressBar from "@/components/atoms/progress-bar";
import SearchField from "@/components/atoms/search-field";
import Skeleton from "@/components/atoms/skeleton";
import SignalCellularAlt from "@/components/atoms/svg-icons/SignalCellularAlt";
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
      <SmallHeroCard
        titleLarge="UI/UX Design"
        titleSmall="Learning Progress"
        subtitle="200 Courses • 1000+ Students"
      />
      <Avatar size="md" src="/images/avatars/avatar1.png" alt="avatar1" />
      <FacePile images={avatars} count={"2k+"} />
      <ProgressBar progress={50} />
      <Pill>children</Pill>
      <Badge text="Beginner" icon={<SignalCellularAlt />} />
      <Skeleton className="w-30 h-6" />
    </div>
  );
}

export default HomeClient;
