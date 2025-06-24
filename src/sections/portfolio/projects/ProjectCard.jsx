import Card from "../../../components/Card";

function ProjectCard({
  title,
  description,
  image,
  stack = [],
  buttons,
  background = "bg-radial from-secondary to-[#052A30] from-0% to-100%"
}) {
  	return (
  	  	<Card className="w-full flex flex-col place-items-center h-[100%] hover:scale-[1.05]" hover={false}>
			{/* Glow (simula box-shadow con degradado) */}
  			<div className="absolute inset-0 -z-10 rounded-xl scale-[1.05] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-primary to-secondary" />
			{/* Imagen */}
			<div className={`w-full flex items-center justify-center p-6 ${background ? background : ''}`}>
				<img
					src={image}
					alt={`Preview ${title}`}
					className="rounded-lg aspect-3/2 object-cover w-[80%]"
				/>
			</div>
			
			{/* Contenido */}
			<div className="w-fit flex flex-col justify-center text-left gap-3 p-6 ">
				<h3 className="text-2xl font-semibold text-white w-fit">{title}</h3>
				<p className="text-sm text-text w-">{description}</p>
				{/* Tags */}
				<div className="flex flex-wrap gap-2 mt-2 w-fit">
					{stack.map((tech, i) => (
					<span
						key={i}
						className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-md border border-white/10"
					>
						{tech}
					</span>
					))}
				</div>
				{/* Botones */}
				<div className="flex flex-wrap gap-4 mt-4 w-fit">
					{buttons && buttons.map((button, index) => (
						<a
						key={index}
						href={button.url}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:scale-[1.1] transition-all text-sm font-medium text-white"
						>
							{button.label}
						</a>
					)
					)}
				</div>
			</div>  
		</Card>
  	);
}

export default ProjectCard;
