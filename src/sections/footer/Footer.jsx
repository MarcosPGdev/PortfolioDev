import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

function Footer (){
	const { t } = useTranslation();

	return(
		<footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-md py-6 mt-20">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
				<p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
				<div className="flex gap-4">
					<a href="https://github.com/MarcosPGdev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
						<Icon className="size-[2rem]" icon="mdi:github" />
					</a>
					<a href="https://linkedin.com/in/marcospgdev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
						<Icon className="size-[2rem]" icon="devicon:linkedin" />
					</a>
					<a href="mailto:marcospg.dev@gmail.com" className="hover:text-white transition">
						<Icon className="size-[2rem]" icon="skill-icons:gmail-light" />
					</a>
				</div>
			</div>
		</footer>
	)
}


export default Footer;