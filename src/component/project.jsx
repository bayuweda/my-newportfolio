import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Coffee House",
    image: "/asset/rumah impian.png",
    type: "web",
    icon: "/asset/Group 5.png",
  },
  {
    id: 2,
    name: "Coffee House",
    image: "/asset/website kopi wpu.png",
    type: "web",
    icon: "/asset/Group 5.png",
  },
  {
    id: 3,
    name: "Coffee House",
    image: "/asset/website travel.png",
    type: "web",
    icon: "/asset/Group 5.png",
  },
  {
    id: 4,
    name: "Coffee House",
    image: "/asset/website kopi wpu.png",
    type: "design",
    icon: "/asset/Group 5.png",
  },
  {
    id: 5,
    name: "Coffee House",
    image: "/asset/website kopi wpu.png",
    type: "web",
    icon: "/asset/Group 5.png",
  },
  {
    id: 6,
    name: "Coffee House",
    image: "/asset/website kopi wpu.png",
    type: "web",
    icon: "/asset/Group 5.png",
  },
];

// eslint-disable-next-line react/prop-types
function Card({ image, type, icon, name }) {
  return (
    <>
      <div className="bg-blue-600/5 rounded-lg overflow-hidden shadow-xl lg:w-96 md:w-1/3 m-3 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 ">
        <img src={image} alt="" className="w-full" />
        <div className="px-2 py-4">
          <h1 className="text-primary">{type}</h1>
          <a href="" className="flex items-baseline gap-2 text-white">
            <img src={icon} alt="" className="h-3" />
            {name}
          </a>
        </div>
      </div>
    </>
  );
}

export default function Projek() {
  const [category, setCategory] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleCategory = (category) => {
    setCategory(category);
    setShowAllProjects(false); // Reset showAllProjects state when changing category
  };

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Filter projects based on category
  const filteredProjects = category
    ? projects.filter((project) => project.type === category)
    : projects;

  // Show only first three projects if showAllProjects is false
  const projectsToShow = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <>
      <section id="projek" className="mt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="text-center w-96 mx-auto ">
              <h1 className="text-white text-4xl md:text-4xl lg:text-5xl">
                Projek <span className="text-primary">saya</span>
              </h1>
              <p className="text-white font-light text-sm mt-4 md:hidden sm:hidden lg:block">
                Hallo selamat datang, disini saya akan menampilkan beberapa
                projects web dan web desain yang sudah saya kerjakan.
              </p>
              <button
                className="text-white inline-block mx-auto  py-1 px-3 rounded-sm mt-4 cursor-pointer ring-1 hover:bg-sky-500 hover:ring-hidden mr-3"
                onClick={() => setCategory(null)}
              >
                Semua
              </button>
              <button
                className="text-white inline-block mx-auto  py-1 px-3 rounded-sm mt-4 cursor-pointer ring-1 hover:bg-sky-500 hover:ring-hidden mr-3"
                onClick={() => handleCategory("web")}
              >
                Web
              </button>
              <button
                className="text-white inline-block mx-auto py-1 px-3 rounded-sm mt-4 cursor-pointer ring-1 hover:bg-sky-500 hover:ring-hidden"
                onClick={() => handleCategory("design")}
              >
                Desain
              </button>
            </div>
            <div className="container flex flex-wrap justify-center mt-10">
              {projectsToShow.map((project) => (
                <Card
                  key={project.id}
                  image={project.image}
                  type={project.type}
                  icon={project.icon}
                  name={project.name}
                />
              ))}
            </div>

            <div className="text-center mt-4 mx-auto  ">
              <button
                className="bg-primary px-4 py-2 inline-flex items-center rounded-sm text-xl text-white mx-auto"
                onClick={handleToggleProjects}
              >
                {showAllProjects ? "Tampilkan sedikit" : "Tampilkan semua"}
                <span className="text-xl pl-2">
                  {showAllProjects ? (
                    <img src="/asset/arrow-left.png" alt="" />
                  ) : (
                    <img src="/asset/arrow-right 1.png" alt="" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
