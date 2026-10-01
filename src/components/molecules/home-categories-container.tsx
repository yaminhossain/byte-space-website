import HomeCategories from "./home-categories";

function HomeCategoriesContainer() {
  return (
    <section>
      <h1 className="text-center heading-sm">
        Explore Diverse Learning Paths at Bytespace
      </h1>
      <p className="body-lg text-black-400 text-center w-[917px] mx-auto mt-4 mb-17">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>
      <div className="mb-30">
        <HomeCategories />
      </div>
    </section>
  );
}

export default HomeCategoriesContainer;
