import { useState } from 'react';
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

function Skills (){
	const { t } = useTranslation();
	const skillsArray = t("portfolio.skills", { returnObjects: true });
	
	return(
		<div className="w-full px-10 mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
			{skillsArray.map((skill, i) => <SkillCard key={i} {...skill} />)}
		</div>
	)
}

export default Skills