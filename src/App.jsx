import './App.css';
import './i18n/i18n';
import Hero from './sections/hero/Hero';
import AboutMe from './sections/aboutMe/AboutMe';
import Portfolio from './sections/portfolio/Portfolio';
import Header from './sections/haeder/header';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<AboutMe />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
