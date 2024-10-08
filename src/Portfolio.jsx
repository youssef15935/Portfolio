import React, { useState } from "react";
import profileImage from "./assets/photoCV.png";
import Font from "react-font";
import { TypeAnimation } from "react-type-animation";
import resume from "./assets/CV_Youssef Abdeljalil.pdf";
import { FaLinkedin } from "react-icons/fa";

import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaSymfony,
  FaGitAlt,
  FaUniversity,
} from "react-icons/fa";
import { FaJava, FaGithub } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdWork, MdWorkspacePremium } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { PiReadCvLogoThin } from "react-icons/pi";
import { GiPencilRuler } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./index.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Librairie",
      description:
        "Développement d'un site web qui permet de stocker des livres avec leur auteur et leur date de création, en utilisant une API REST, React.js, MongoDB, Express.js et Axios.",
      link: "https://github.com/youssef15935/BookStore",
    },
    {
      title: "Analyse des malwares",
      description:
        "Développement d’une application d’analyse des malwares par techniques d’apprentissage profond en utilisant Python et Pytorch.",
      link: "#",
    },
    {
      title: "Recette",
      description:
        "Développement d’une application web qui aide à préparer des recettes à partir d'ingrédients ajoutés dans la base de données, en utilisant Symfony et Twig.",
      link: "https://github.com/youssef15935/recette",
    },
  ];

  const experiences = [
    {
      title: "Stage au sein de NEOTECH IT",
      description:
        "Développement d’une application de suivi des pointages horaires des salariés en Java.",
    },
    {
      title: "Stage au sein de l’Ecole Supérieure de Téchnologie",
      description:
        "Création d’une application web pour la gestion des ressources humaines en utilisant Symfony, HTML, CSS.",
    },
    {
      title: "Stage au sein de l’Ecole Supérieure de Téchnologie",
      description:
        "Création d’un site web d’E-learning en front-end en utilisant HTML, CSS, JS.",
    },
  ];

  const formations = [
    {
      title: "Université Bretagne Sud 2023-2025",
      description:
        "Master Informatique parcours Systèmes et Applications pour l'Informatique Mobile (SAIM) - Vannes , France.",
    },
    {
      title: "Université de Pau et des Pays de L’Adour 2021-2023",
      description:
        "Licence Informatique parcours Numérique pour les Environnements Connectés (NEC) - Anglet , France",
    },
    {
      title: "Ecole Supérieure de Technologie 2019-2021",
      description:
        "Diplôme Universitaire de Technologie en informatique (Développeur d'Application Informatique) - Oujda , Maroc",
    },
  ];

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const containerClass =
    mode === "dark"
      ? "min-h-screen p-6 bg-black text-white"
      : "min-h-screen p-6 bg-white text-black";

  return (
    <div className={containerClass}>
      <Font family="Roboto Mono">
        <header className="text-center my-12 mt-4">
          <div className="absolute top-4 right-4 flex items-center space-x-4">
            {/* Conditionally render dark and light icons */}
            {mode === "light" ? (
              <CiLight
                className="text-4xl cursor-pointer"
                onClick={toggleMode}
              />
            ) : (
              <MdDarkMode
                className="text-4xl cursor-pointer"
                onClick={toggleMode}
              />
            )}
          </div>
          <div className="absolute top-4 left-4 flex space-x-8">
            <a
              href="https://github.com/youssef15935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-2xl transition-transform duration-300 transform hover:scale-110" />
            </a>
            

            <a
              href="https://www.linkedin.com/in/youssef-abdeljalil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-transform duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl transition-transform duration-300 transform hover:scale-110" />
            </a>
          </div>

          <img
            src={profileImage}
            alt="Youssef Abdeljalil"
            className="h-40 w-40 rounded-full mx-auto shadow-lg hover:shadow-xl transition-shadow duration-200 border-4"
          />
          <h1 className="text-5xl font-bold mb-2 mt-4">Youssef Abdeljalil</h1>
          <br />
          <p className="text-lg font-semibold">
            <TypeAnimation
              sequence={[
                "Développement Logiciel",
                2000,
                "Développement Web",
                2000,
                "Développement Mobile",
                2000,
              ]}
              wrapper="span"
              speed={200}
              repeat={Infinity}
            />
          </p>
        </header>

        <section className="my-24 text-center">
          <h2 className="text-4xl font-semibold mb-6">À propos de moi</h2>
          <br />
          <TypeAnimation
            sequence={[
              "Bonjour, je suis Youssef, un développeur passionné spécialisé dans le développement web et mobile. J'adore créer des applications web qui aident les gens à résoudre des problèmes concrets. Je suis actuellement en deuxième année d'un programme de Master Informatique parcours Systèmes et Applications pour l'Informatique Mobile (SAIM) à l'Université Bretagne Sud (UBS) à Vannes.",
              2000,
            ]}
            wrapper="span"
            speed={120}
            repeat={Infinity}
          />
        </section>

        <section className="my-24 text-center">
          <h2 className="text-4xl font-semibold mb-6">Mes Compétences</h2>
          <div className="flex justify-center space-x-8 mt-6">
            <FaReact className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaSymfony className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaJsSquare className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaPython className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <SiDjango className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaJava className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <RiTailwindCssFill className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaGitAlt className="text-8xl transition-transform duration-300 transform hover:scale-110" />
            <FaDocker className="text-8xl transition-transform duration-300 transform hover:scale-110" />
          </div>
        </section>

        <section className="my-24 text-center">
          <h2 className="text-4xl font-semibold mb-6 flex justify-center items-center">
            <FaUniversity className="mr-2 text-3xl" />
            Ma Formation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200 border-4"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {formation.title}
                </h3>
                <p>{formation.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 text-center">
          <h2 className="text-4xl font-semibold mb-6 flex justify-center items-center">
            <GiPencilRuler className="mr-2 text-3xl" />
            Mes Projets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-4 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition-colors duration-200"
                >
                  Voir le projet
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="my-24 text-center">
          <h2 className="text-4xl font-semibold mb-6 flex justify-center items-center">
            <MdWork className="mr-2 text-3xl" />
            Mes Expériences
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200 border-4"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {experience.title}
                </h3>
                <p>{experience.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="my-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 my-24 p-10 flex items-center justify-center">
            <IoMdContact className="mr-2 text-4xl" />
            Contactez-moi
          </h2>
          <p>
            Besoin d'un stagiaire pour votre entreprise n'hésitez pas à{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/youssef-abdeljalil/"
              className="  font-semibold   flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
            >
              me contacter !
            </a>
          </p>
        </section>
        <section className="text-center">
          <a
            href={resume}
            download
            className="  font-semibold   flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
          >
            <PiReadCvLogoThin className="mr-2 text-4xl" />
            Télécharger mon CV
          </a>
        </section>

        <footer className="text-center p-4">
          <p>
            &copy; {new Date().getFullYear()} Youssef Abdeljalil. All rights
            reserved.
          </p>
        </footer>
      </Font>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={200}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{}}
        ToggledStyle={{ right: 20 }}
      />
    </div>
  );
};

export default Portfolio;
