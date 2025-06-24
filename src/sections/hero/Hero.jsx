import { useTranslation } from 'react-i18next';
import GlowBall from '../../components/GlowBall';
import { TypeAnimation } from 'react-type-animation';
import WordSwitcher from './WordSwitcher';
import { useInViewOnce} from "../../hooks/useInView";


const glowBalls = [
	  { from: "from-secondary", to: "to-background2/0", size: "w-10 h-10 sm:w-28 sm:h-28", position: "top-[20%] right-[50%]", gradientStops: "from-0% to-70%", opacity: "opacity-100", animation: "animate-float-bottom" },
	  { from: "from-secondary", to: "to-background2/0", size: "w-10 h-10 sm:w-8 sm:h-8", position: "top-[20%] right-[20%]", gradientStops: "from-0% to-70%", opacity: "opacity-100", animation: "animate-float-top" },
	  { from: "from-secondary", to: "to-background2/0", size: "w-10 h-10 sm:w-20 sm:h-20", position: "top-[50%] right-[45%]", gradientStops: "from-0% to-70%", opacity: "opacity-100", animation: "animate-float-bottom" },
	  { from: "from-secondary", to: "to-background2/0", size: "w-10 h-10 sm:w-15 sm:h-15", position: "top-[70%] left-[20%]", gradientStops: "from-0% to-70%", opacity: "opacity-100", animation: "animate-float-top" },
	  { from: "from-secondary", to: "to-background2/0", size: "w-20 h-20 sm:w-80 sm:h-80", position: "top-[30%] right-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-bottom" },
	  { from: "from-primary", to: "to-background2/0", size: "w-18 h-18 sm:w-18 sm:h-18", position: "top-[30%] right-[35%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-top" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-11 sm:h-11", position: "top-[42%] left-[35%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-bottom" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-11 sm:h-11", position: "top-[10%] left-[55%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-top" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-11 sm:h-11", position: "top-[82%] right-[45%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-bottom" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-18 sm:h-18", position: "top-[62%] right-[37%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-top" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-18 sm:h-18", position: "top-[52%] left-[7%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-bottom" },
	  { from: "from-primary", to: "to-background2/0", size: "w-11 h-11 sm:w-8 sm:h-8", position: "top-[77%] right-[7%]", gradientStops: "from-0% to-70%", opacity: "opacity-60", animation: "animate-float-top" },
	  { from: "from-primary", to: "to-background2/0", size: "w-10 h-10 sm:w-25 sm:h-25", position: "top-[15%] left-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-70", animation: "animate-float-bottom" },
];


function Hero() {
	
	const { t } = useTranslation();
	
	const [textRef, textVisible] = useInViewOnce(0.5);
	const [buttonRef, buttonVisible] = useInViewOnce(0.5);
	const [imgRef, imgVisible] = useInViewOnce(0.5);

	return (
    	<section id="hero" aria-labelledby="hero-heading" className="relative w-[100%] section-height scroll-mt-[100px]">
    	  	{/* Globos flotantes */}

    	  	<div className="absolute w-full inset-0 z-10 pointer-events-none overflow-x-hidden">
				{glowBalls.map((ball, index) => (
					<GlowBall  key={index} from={ball.from} to={ball.to} size={ball.size} position={ball.position} gradientStops={ball.gradientStops} opacity={ball.opacity} animation={ball.animation}/>
				))
				}
			</div>
    	  	{/* Contenido */}
    	  	<div className="relative z-10 max-w-[1200px] mx-auto my-10 px-6 h-full flex flex-col md:flex-row mt-40 md:mt-0 items-center justify-start md:justify-around text-white transition-all">
    	  		{/* Texto */}
    	  		<div className="text-left space-y-4 w-full md:2-[50%]">
					<h1 id="hero-heading" className="text-5xl font-bold text-white">
						<TypeAnimation
							sequence={[t('hero.title'), 1000]}
							speed={10}
							wrapper="span"
							repeat={0}
							cursor={true}
						/>
					</h1>
					
					<WordSwitcher words={t('hero.specializationsArray', { returnObjects: true })} className="text-primary text-2xl md:mt-15 font-bold inline-block w-[100%]" />
					
					<p
						ref={textRef}
						className={`
							text-lg text-text my-10 md:w-[70%]
							transition-all duration-700 ease-out
							${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
						`}
					>
						{t('hero.text')}
					</p>

					<div
						ref={buttonRef}
						className={`
							flex gap-4 my-10
							transition-all duration-700 ease-out
							${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
						`}
					>
						<a
							href="#portfolio"
							className="cursor-pointer bg-gradient-to-tl from-primary/70 to-secondary/70 hover:from-primary/100 hover:to-secondary/100 hover:scale-[1.1] transition-all text-white font-medium px-6 py-2 rounded-md"
						>
							{t('hero.projectsButton')}
						</a>

						<a
							href="/CV-MARCOS.pdf"
							target='_blank'
							className="cursor-pointer bg-gradient-to-tl from-primary/70 to-secondary/70 hover:from-primary/100 hover:to-secondary/100 hover:scale-[1.1] transition-all text-white font-medium px-6 py-2 rounded-md"
						>
							{t('hero.cvButton')}
						</a>
					</div>
    	  		</div>

    	  		{/* Imagen */}
    	  		<div className="w-64 w-42 md:w-[50%] rounded-full mt-10 md:mt-0">
					<div
						ref={imgRef}
						className={`
							text-xs sm:text-lg text-text my-10
							transition-all duration-700 ease-out
							${imgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
						`}
					>
						<img
							src="/avatar.webp"
							alt="Avatar ilustrado de Marcos Pérez, desarrollador fullstack"
							className="object-cover w-full h-full"
						/>
					</div>
    	  		</div>
    	  	</div>
    	</section>
  	);
}

export default Hero