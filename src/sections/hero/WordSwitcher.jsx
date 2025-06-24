import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WordSwitcher = ({ interval = 2000, className = '', words}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
		setIndex((prev) => (prev + 1) % words.length);
		}, interval);
		return () => clearInterval(timer);
	}, [interval]);

	const currentWord = words[index];

	return (
		<div className={`relative h-[2.5rem] overflow-hidden ${className}`}>
			<AnimatePresence mode="wait">
				<motion.h2
				key={currentWord}
				initial={{ y: '100%', opacity: 0 }}
				animate={{ y: '0%', opacity: 1 }}
				exit={{ y: '-100%', opacity: 0 }}
				transition={{delay: 0, duration: 0.5 }}
				className="absolute w-fit text-left bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
				>
					{currentWord}
				</motion.h2>
			</AnimatePresence>
		</div>
	);
};

export default WordSwitcher;
