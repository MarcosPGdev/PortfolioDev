import ProjectCard from "./ProjectCard";
import { useState } from 'react';
import { useTranslation } from "react-i18next";



function Projects (){
	const { t } = useTranslation();
	const projectsArray = t("portfolio.projects", { returnObjects: true });
	return(
		<div className="w-full px-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
			{projectsArray.map((project, i) => <ProjectCard key={i} {...project} />)}
		</div>
	)
}

export default Projects