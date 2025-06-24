import { useInView } from 'react-intersection-observer';

const GlowBall = ({
  	from,
  	to,
  	size,
  	position,
  	gradientStops,
  	opacity,
  	animation,
  	zIndex = 'z-1',
  	delay = 200,
}) => {
  	const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

	const animationClasses = inView ? `opacity-${opacity} scale-100` : `opacity-0 scale-0`;
  	return (
  	  	<div
  	  	  	ref={ref}
  	  	  	className={`
  	  	  	  	absolute pointer-events-none ${position} ${size} ${gradientStops} ${opacity} ${zIndex}
  	  	  	  	bg-radial ${from} ${to}
						${animation}
  	  	  	  	transition-all duration-700 ease-out
  	  	  	  	${animationClasses}
  	  	  	`}
  	  	  	style={{ transitionDelay: `${delay}ms` }}
  	  	/>
  	);
};

export default GlowBall;

