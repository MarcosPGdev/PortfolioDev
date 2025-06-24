import { useTranslation } from "react-i18next"
import { useInViewOnce } from "../../hooks/useInView";

const PortfolioSelector = ({ onSelect, options, selected, setSelected}) => {

	const { t } = useTranslation();

  	const handleSelect = (key) => {
  	  	setSelected(key);
  	  	onSelect?.(key);
  	};

	const [ref, isVisible] = useInViewOnce(0.5);

	return (

		<div
			ref={ref}
			className={`
				flex max-w-[90%] md:max-w-full justify-center gap-6 bg-background2 p-2 rounded-xl
				transition-all duration-700 ease-out
				${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
			`}
		>
		{options.map((key) => (
			<button
			key={key}
			onClick={() => handleSelect(key)}
			className={`button !text-[.8rem] md:!text-[1rem] font-semibold transition-all duration-300 ${
				selected === key
				? 'text-white bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-lg'
				: 'text-text hover:scale-105'
			}`}
			>
				{t(`portfolio.selectorButtons.${key}`)}
			</button>
		))}
		</div>
	);
};

export default PortfolioSelector;