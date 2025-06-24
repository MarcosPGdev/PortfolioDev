import { useInViewOnce } from "../hooks/useInView";

function Card({ children, linearDeg, className, hover = true }) {
	const [ref, isVisible] = useInViewOnce();

	return (
		<article
			ref={ref}
			className={`
				relative overflow-hidden rounded-xl text-white transition-all duration-700 ease-out
				${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-95"}
				${className}
				${linearDeg ? linearDeg : "bg-gradient-to-tl"}
				from-primary/20 to-secondary/20
				${hover ? "md:hover:from-primary/70 md:hover:to-secondary/70 md:hover:scale-[1.05]" : ""}
			`}
		>
			{children}
		</article>
	);
}

export default Card;
