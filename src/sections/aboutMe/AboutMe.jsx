import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card';
import GlowBall from '../../components/GlowBall';
import { useInViewOnce } from '../../hooks/useInView';

const glowBalls = [
	{ from: "from-secondary", to: "to-background2/0", size: "w-50 h-50 md:w-100 md:h-100", position: "top-[50%] right-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
	{ from: "from-primary", to: "to-background2/0", size: "w-50 h-50 md:w-100 md:h-100", position: "top-[10%] left-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
];



function AboutMe (){
	
	const { t } = useTranslation();
	const graduated = t('aboutMe.cards.graduatedCard', { returnObjects: true });
	const experience = t('aboutMe.cards.experienceCard', { returnObjects: true });
	const lenguages = t('aboutMe.cards.lenguagesCard', { returnObjects: true });
	
	const [refTitle, titleVisible] = useInViewOnce(0.8);
  	const [refText, textVisible] = useInViewOnce(0.7);
  	const [refImg, imgVisible] = useInViewOnce(0.3);

	return(
		<section id="about" className="relative w-full scroll-mt-[100px] flex flex-col items-center">

			<div className="absolute w-full inset-0 z-10 pointer-events-none overflow-hidden">
				{glowBalls.map((ball, index) => (
					<GlowBall  key={index} from={ball.from} to={ball.to} size={ball.size} position={ball.position} gradientStops={ball.gradientStops} opacity={ball.opacity} animation={ball.animation}/>
				))
				}
			</div>

			<h2
				ref={refTitle}
				className={`w-fit text-center text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-10 transition-opacity duration-700 ${titleVisible ? "opacity-100" : "opacity-0"}`}
			>
				{t('aboutMe.title')}
			</h2>

			<div className="relative z-10 mx-auto px-6 h-fit flex flex-col md:flex-row justify-center md:justify-around items-center text-white transition-all">
				<article
				ref={refText}
				className={`relative z-10 mx-auto px-6 h-full flex flex-col w-full md:w-[70%] items-center text-white text-left transition-opacity duration-700 ${textVisible ? "opacity-100" : "opacity-0"}`}
				>
					<p className='my-3 text-text'>{t('aboutMe.text1')}</p>
					<p className='my-3 text-text'>{t('aboutMe.text2')}</p>
				</article>

				<div
				ref={refImg}
				className={`relative overflow-hidden w-70 h-100 md:w-90 md:h-100 rounded-full mt-10 md:mt-0 transition-opacity duration-700 ${imgVisible ? "opacity-100" : "opacity-0"}`}
				>
					<img src="/img_marcos.webp" alt="Avatar MPGDEV" className="object-cover w-full h-full" />
				</div>
			</div>
			<div className="relative z-10 mx-auto py-10 px-6 h-fit flex flex-wrap justify-center md:justify-center text-white transition-all gap-4">
				<Card cardKey="graduatedCard" className="p-6 w-full md:w-[450px] flex flex-col gap-2 transition-all">
					<div className="flex items-center gap-2 mb-4">
						<div className="w-15 h-15 bg-white/30 rounded-sm flex justify-center items-center">
							<Icon className='size-[2rem]' icon={graduated.icon} />
						</div>
						<span className="font-semibold uppercase text-1sm">{graduated.title}</span>
					</div>
					{
						graduated.sections.map((section, index) => (
							<div key={index} className="bg-white/10 p-4 rounded-md text-sm">
								<div className="flex justify-between text-white/90 font-medium">
									<span className='flex-1 text-left'>{section.title}</span>
									<span className='w-fit'>{section.date}</span>
								</div>
								<p className="text-white/70 mt-1 text-left">
									{section.text}
								</p>
							</div>
						))
					}
				</Card>
				<Card cardKey="experienceCard" className="p-6  w-full md:w-[450px] flex flex-col gap-2 transition-all">
					<div className="flex items-center gap-2 mb-4">
						<div className="w-15 h-15 bg-white/30 rounded-sm flex justify-center items-center">
							<Icon className='size-[2rem]' icon={experience.icon} />
						</div>
						<span className="font-semibold uppercase text-1sm">{experience.title}</span>
					</div>
					{
						experience.sections.map((exp, index) => (
							<div key={index} className="bg-white/10 p-4 rounded-md text-sm">
								<div className="flex justify-between text-white/90 font-medium">
									<span>{exp.title}</span>
									<span>{exp.time}</span>
								</div>
							</div>
						))
					}
				</Card>
				<Card cardKey="lengagesCard" className="p-6  w-full md:w-[450px] flex flex-col gap-2 transition-all">
					<div className="flex items-center gap-2 mb-4">
						<div className="w-15 h-15 bg-white/30 rounded-sm flex justify-center items-center">
							<Icon className='size-[2rem]' icon={lenguages.icon} />
						</div>
						<span className="font-semibold uppercase text-1sm">{lenguages.title}</span>
					</div>
					{
						lenguages.sections.map((leng, index) => (
							<div key={index} className="bg-white/10 p-3 rounded-md text-sm">
								<div className="flex justify-between text-white/90 font-medium">
									<span className='flex flex-row items-center gap-2'><Icon icon={leng.icon} /> {leng.title}</span>
									<span>{leng.level}</span>
								</div>
							</div>
						))
					}
					
				</Card>
			</div>
		</section>
	)
}

export default AboutMe