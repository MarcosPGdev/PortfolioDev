import { useTranslation } from "react-i18next"
import PortfolioSelector from "./Selector";
import { useState } from "react";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import GlowBall from '../../components/GlowBall';
import { useInViewOnce } from "../../hooks/useInView";


const glowBalls = [

	{ from: "from-primary", to: "to-background2/0", size: "w-20 h-20", position: "top-[10%] left-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
	{ from: "from-secondary", to: "to-background2/0", size: "w-50 h-50", position: "top-[50%] right-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
	{ from: "from-secondary", to: "to-background2/0", size: "w-50 h-50", position: "bottom-[10%] left-[20%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
];

function Portfolio (){
	const { t } = useTranslation();

	const options = ["projects", "experience", "skills"];
	const [selected, setSelected] = useState("projects");

	const [titleRef, titleVisible] = useInViewOnce(0.5);

	return(
		<section id="portfolio" aria-labelledby="portfolio-heading" className="relative w-full flex flex-col items-center py-10 scroll-mt-[100px]">
			<div className="absolute w-full inset-0 z-10 pointer-events-none overflow-hidden">
				{glowBalls.map((ball, index) => (
					<GlowBall  key={index} from={ball.from} to={ball.to} size={ball.size} position={ball.position} gradientStops={ball.gradientStops} opacity={ball.opacity} animation={ball.animation}/>
				))}
			</div>
			<h2
				ref={titleRef}
				id="portfolio-heading"
				className={`
					w-fit text-center text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-10
					transition-all duration-700 ease-out
					${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
				`}
			>
				{t('portfolio.title')}
			</h2>


			<PortfolioSelector options={options} selected={selected} setSelected={setSelected} />

			{selected === "projects" && <Projects />}
			{selected === "experience" && <Experience />}
			{selected === "skills" && <Skills />}
			
		</section>
	)
}


export default Portfolio