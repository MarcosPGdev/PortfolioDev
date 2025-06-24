import { useState, useEffect, useRef } from "react";

export function useInViewOnce(threshold = 0.1) {
	const ref = useRef();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // solo una vez
				}
			},
			{ threshold }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [threshold]);

	return [ref, isVisible];
}