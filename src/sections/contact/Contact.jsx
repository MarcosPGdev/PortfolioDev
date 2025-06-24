import Card from "../../components/Card";
import { Icon } from "@iconify/react";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMemo } from "react";
import i18n from "../../i18n/i18n"
import GlowBall from '../../components/GlowBall';
import { useInViewOnce} from "../../hooks/useInView";

const glowBalls = [
	{ from: "from-primary", to: "to-background2/0", size: "w-20 h-20", position: "top-[10%] left-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
	{ from: "from-secondary", to: "to-background2/0", size: "w-50 h-50", position: "bottom-[0%] right-[50%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
	{ from: "from-primary", to: "to-background2/0", size: "w-50 h-50", position: "top-[10%] right-[10%]", gradientStops: "from-0% to-70%", opacity: "opacity-30", animation: "animate-float-bottom" },
];


function Contact() {
	const { t } = useTranslation();

	const translation = t('contact', { returnObjects: true });
	const contact = translation.contact;
	const connect = translation.connect;
	const inputs = contact.inputs;

	const initialValues = {
		name: '',
		email: '',
		message: '',
	};

	const [titleRef, titleVisible] = useInViewOnce(0.8);

	const validations = useMemo(() => {
		return Yup.object().shape({
			name: Yup.string().required(inputs.name?.required),
			email: Yup.string()
				.required(inputs.email?.required)
				.matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, inputs.email?.invalid),
			message: Yup.string()
				.required(inputs.message?.required)
				.min(10, inputs.message?.min)
		});
	}, [inputs]);



	const handleSubmit = async (values, { resetForm }) => {
		try {
			await axios.post('https://mpgdev.es/portfolio-api/contact', values);
			alert("Message sent successfully");
			resetForm();
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Error sending message");
		}
	};

	return (
		<section id="contact" className="relative scroll-mt-[100px] flex flex-col items-center py-24 px-6 w-full max-w-6xl mx-auto">
			<div className="absolute w-full inset-0 z-10 pointer-events-none overflow-hidden">
				{glowBalls.map((ball, index) => (
					<GlowBall  key={index} from={ball.from} to={ball.to} size={ball.size} position={ball.position} gradientStops={ball.gradientStops} opacity={ball.opacity} animation={ball.animation}/>
				))}
			</div>
						<h2
				ref={titleRef}
				className={`
					w-fit text-center text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-10
					transition-all duration-700 ease-out
					${titleVisible ? 'opacity-100' : 'opacity-0'}
				`}
			>
				{translation.title}
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
				<Card hover={false} className="p-6 rounded-2xl shadow-lg flex flex-col justify-between">
					{/* Left Panel */}
					<div>
						<h3 className="text-white text-xl font-semibold mb-4">{connect.subtitle}</h3>
						<p className="text-zinc-300 text-sm mb-6">{connect.text}</p>
					</div>

					<div className="flex flex-col gap-4">
						<a href="https://linkedin.com/in/marcospgdev" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-md text-white flex items-center gap-4 text-sm hover:bg-white hover:text-black hover:scale-[1.05] transition-all">
							<Icon className="size-[2rem]" icon="devicon:linkedin" />
							linkedin.com/in/marcospgdev
						</a>
						<a href="https://github.com/MarcosPGdev" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-md text-white flex items-center gap-4 text-sm hover:bg-white hover:text-black hover:scale-[1.05] transition-all">
							<Icon className="size-[2rem]" icon="mdi:github" />
							github.com/MarcosPGdev
						</a>
						<a href="mailto:marcospg.dev@gmail.com" className="bg-white/10 p-3 rounded-md text-white flex items-center gap-4 text-sm hover:bg-white hover:text-black hover:scale-[1.05] transition-all">
							<Icon className="size-[2rem]" icon="skill-icons:gmail-light" />
							marcospg.dev@gmail.com
						</a>
					</div>

					<p className="text-zinc-400 text-sm mt-6">{connect.footer}</p>
				</Card>

				<Card hover={false}>
					<Formik
						initialValues={initialValues}
						validationSchema={validations}
						onSubmit={handleSubmit}
						key={i18n.language}
					>
						<Form className="p-6 rounded-2xl shadow-lg flex flex-col gap-5">
							<h3 className="text-white text-xl font-semibold">{contact.subtitle}</h3>

							<Field
								name="name"
								type="text"
								placeholder={contact.inputs.name.placeholder}
								className="bg-white/10 p-3 rounded-md text-white text-sm placeholder-white/60 outline-none"
							/>
							<ErrorMessage name="name" component="div" className="text-red-400 text-sm" />

							<Field
								name="email"
								type="email"
								placeholder={contact.inputs.email.placeholder}
								className="bg-white/10 p-3 rounded-md text-white text-sm placeholder-white/60 outline-none"
							/>
							<ErrorMessage name="email" component="div" className="text-red-400 text-sm" />

							<Field
								name="message"
								as="textarea"
								rows="5"
								placeholder={contact.inputs.message.placeholder}
								className="bg-white/10 p-3 rounded-md text-white text-sm placeholder-white/60 outline-none resize-none"
							/>
							<ErrorMessage name="message" component="div" className="text-red-400 text-sm" />

							<div className="flex justify-end">
								<button
									type="submit"
									className="px-6 py-2 rounded-md cursor-pointer text-white text-sm font-medium bg-gradient-to-r from-primary to-secondary hover:scale-[1.05] transition-all"
								>
									{contact.button}
								</button>
							</div>
						</Form>
					</Formik>
				</Card>
			</div>
		</section>
	);
}

export default Contact;
