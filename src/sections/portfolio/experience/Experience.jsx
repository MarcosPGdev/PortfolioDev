import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

function Experience() {
	const { t } = useTranslation();
	const experiencesArray = t("portfolio.experiences", { returnObjects: true });
	return (
		<div className="relative w-full max-w-4xl mx-auto p-4 my-20">
			<div className="absolute md:left-1/2 top-0 h-full w-1 bg-white/20 -translate-x-1/2" />

			<div className="flex flex-col gap-8">
				{experiencesArray.map((exp, i) => (
					<div key={i} className="relative flex flex-col md:flex-row items-center justify-between gap-6">
		
						<div className={`w-full pl-10 md:pl-0 md:w-1/2 px-4 ${i % 2 === 0 ? "" : "md:order-2 md:pl-4"}`}>
							<ExperienceCard {...exp} />
						</div>

						<div className="absolute left-0 top-1/2 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-gradient-to-tl from-primary to-secondary rounded-full border-2 border-white z-10" />

						<div className="hidden md:block w-1/2" />
					</div>
				))}
			</div>
		</div>
	);
}

export default Experience;
