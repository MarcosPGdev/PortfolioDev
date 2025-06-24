import Card from "../../../components/Card";

function ExperienceCard({ title, company, date, description }) {
	return (
		<Card className="w-full flex flex-col place-items-center p-6">
			<div className="w-fit flex flex-col justify-center text-left gap-3">
				<h3 className="text-2xl font-semibold text-white w-fit">{title}</h3>
				<p className="text-sm text-white/70 w-fit">{company}</p>
				<p className="text-xs text-white/40 mt-1 w-fit">{date}</p>
				<p className="text-sm text-text mt-3 w-fit">{description}</p>
			</div>
		</Card>
	);
}

export default ExperienceCard;
