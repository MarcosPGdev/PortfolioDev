import Card from "../../../components/Card";

function SkillCard({
  title,
  image,
}) {
  	return (
  	  	<Card className="w-full flex flex-col place-items-center p-5">
			{/* Imagen */}
			<div className="w-full flex p-6 items-center justify-center">
				<img
					src={image}
					alt={`Preview ${title}`}
					className="rounded-lg object-contain  max-h-[200px] w-full aspect-square"
				/>
			</div>
		
			{/* Contenido */}
			<div className="w-fit flex flex-col justify-center text-left gap-3">
				<h3 className="text-xl md:text-2xl font-semibold text-white w-fit">{title}</h3>
			</div>  
		</Card>
  	);
}

export default SkillCard;
