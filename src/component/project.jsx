import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Rumah impian",
    image: "/asset/rumah impian.png",
    type: "web",
    icon: "/asset/Group 5.png",
    tech: ["/asset/html.png", "/asset/css.png", "/asset/bootstrap.png"],
    description:
      "Sebuah website company profile yang saya pelajari dari chanel youtube creative academy, tujuan dari pembuatan website ini adalah untuk belajar menggunakan bootstrap",
  },
  {
    id: 2,
    name: "Coffee House",
    image: "/asset/website kopi wpu.png",
    type: "web",
    icon: "/asset/Group 5.png",
    tech: ["/asset/html.png", "/asset/css.png"],
    description:
      "merupakan website cofee sederhana yang saya kerjakan waktu belajar html css dasar",
  },
  {
    id: 3,
    name: "AFTER.NOON",
    image: "/asset/after.noon 1.png",
    type: "web",
    icon: "/asset/Group 5.png",

    tech: ["/asset/tailwind.png", "/asset/logo192.png"],
    description:
      "sebuah website e-commerce sederhana yang belum menggunakan database, proyek ini saya kerjakan untuk  mengasah kemampuan saya dalam menggunakan Reactjs",
  },
  {
    id: 4,
    name: "Kenangan senja",
    image: "/asset/kenangan-senja 1.png",
    type: "web",
    icon: "/asset/Group 5.png",
    tech: [
      "/asset/html.png",
      "/asset/css.png",
      "/asset/javascript.png",
    ],
    description:
      "sebuah website coffe yang dibuat menggunakan html css dan javascript, website ini dibuat dengan mengikuti tutorial dari chanel wpu, disini saya belajar js sedikit dengan pembuatan responsive navbar",
  },
  {
    id: 5,
    name: "Portfolio design",
    image: "/asset/design-portfolio.jpg",
    type: "design",
    icon: "/asset/Group 5.png",
    tech: [
      "/asset/figma.png"
     
    ],
    description:
      "ini merupakan design portfolio saya yang saya kerjakan menggunakan figma, teman-teman yang berminat menggunakan design ini silahkan klik tulisan warna biru ya!!",
  },
];

function Card({ image, type, icon, name, tech, description }) {
  return (
    <div className="bg-blue-600/5  md:mx-3 lg:mx-3 rounded-lg overflow-hidden shadow-xl lg:w-[580px] lg:h-auto md:w-full m-3 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 flex flex-col md:flex-nowrap md:flex-row">
      <div className="w-full flex flex-col lg:shadow-2xl ">
        <img src={image} alt={name} className="w-auto h-auto object-cover" />
        <div className="px-2 py-2 flex justify-between items-end">
          <div>
            <h1 className="text-primary cursor-pointer">{type}</h1>
            <a
              href="#"
              className=" hover:text-primary flex items-baseline gap-2 text-white text-sm "
            >
              <img src={icon} alt={`${name} icon`} className="h-2" />
              {name}
            </a>
          </div>
          <div className="flex items-center mt-2">
            {tech.map((techImage, index) => (
              <img
                key={index}
                src={techImage}
                alt={`Tech ${index}`}
                className="w-5 h-5  lg:w-8 lg:h-8"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[70%] p-4 text-center md:border-l-0  border rounded-lg border-primary lg:border-0 ">
        <h1 className="text-xl font-normal text-white mb-2">Deskripsi</h1>
        <p className="text-gray-400 text-sm font-light">{description}</p>
      </div>
    </div>
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
    : filteredProjects.slice(0, 2);

  return (
    <>
      <section id="projek" className="mt-32 mx-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap ">
            <div className="text-center w-96 lg:w-1/2 mx-auto ">
              <h1 className="text-white text-4xl md:text-4xl lg:text-5xl">
                Projek <span className="text-primary">saya</span>
              </h1>
              <p className="text-white font-light text-sm mt-4 md:hidden sm:hidden lg:block">
                Hallo selamat datang, disini saya akan menampilkan beberapa
                projects web dan web desain yang sudah saya kerjakan. untuk informasi tambahan
                tekan tulisan warna biru untuk demo, dan tulisan warna putih untuk link source codenya ya 😊
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
            <div className=" grid grid-cols-1 lg:flex lg:flex-wrap  md:grid-cols-1 justify-center gap-6 mt-10 w-full">
              {projectsToShow.map((project) => (
                <Card
                  key={project.id}
                  image={project.image}
                  type={project.type}
                  icon={project.icon}
                  name={project.name}
                  tech={project.tech}
                  description={project.description}
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
