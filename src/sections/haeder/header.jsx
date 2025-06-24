import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LenguageSelector";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Header() {
	const { t } = useTranslation();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<img src="/logo_2.svg" alt="logo de MPGDEV" className="w-10" />

				{/* Menú normal para desktop */}
				<nav className="hidden md:flex gap-6 text-white text-sm items-center">
					<a href="#hero" className="hover:text-primary transition">{t("header.hero")}</a>
					<a href="#about" className="hover:text-primary transition">{t("header.about")}</a>
					<a href="#portfolio" className="hover:text-primary transition">{t("header.portfolio")}</a>
					<a href="#contact" className="hover:text-primary transition">{t("header.contact")}</a>
					<LanguageSelector />
				</nav>

				{/* Botón hamburguesa para móvil */}
				<button onClick={toggleMenu} className="md:hidden text-white">
					<Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} className="text-3xl" />
				</button>
			</div>

			{/* Menú móvil */}
			{menuOpen && (
				<div className="md:hidden text-white px-6 pb-6 pt-4 flex flex-col gap-4 text-sm items-center">
					<a href="#hero" onClick={closeMenu} className="hover:text-primary transition">{t("header.hero")}</a>
					<a href="#about" onClick={closeMenu} className="hover:text-primary transition">{t("header.about")}</a>
					<a href="#portfolio" onClick={closeMenu} className="hover:text-primary transition">{t("header.portfolio")}</a>
					<a href="#contact" onClick={closeMenu} className="hover:text-primary transition">{t("header.contact")}</a>
					<LanguageSelector />
				</div>
			)}
		</header>
	);
}

export default Header;
