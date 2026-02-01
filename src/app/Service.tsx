"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Types
interface ServiceItem {
	id: number;
	icon: string;
	title: string;
	href: string;
	description: string;
	image: string;
	delay: string;
}

// Service data - easy to add/edit
const servicesData: ServiceItem[] = [
	{
		id: 1,
		icon: "icon-spray",
		title: "Carpet Cleaning",
		href: "service-d-industrial-of-cleaning.html",
		description:
			"There are cleaning passages this market available areas conservation this have alteration in some.",
		image: "assets/images/services/service-4-1.jpg",
		delay: "00ms",
	},
	{
		id: 2,
		icon: "icon-office-cleaning",
		title: "Office Cleaning",
		href: "service-d-office-of-cleaning.html",
		description:
			"Business tailored design, management & support services Business business agency elit, sed do eiusmod tempor.",
		image: "assets/images/services/service-4-2.jpg",
		delay: "100ms",
	},
	{
		id: 3,
		icon: "icon-housekeeping",
		title: "Pressure Washing",
		href: "service-d-pressure-of-cleaning.html",
		description:
			"We are supporting teiduals in business are challenges of enhancing solving natoque posuere aliquam accumsan.",
		image: "assets/images/services/service-4-3.jpg",
		delay: "200ms",
	},
	{
		id: 4,
		icon: "icon-kitchen-cleaning",
		title: "Kitchen Cleaning",
		href: "service-d-kitchen-of-cleaning.html",
		description:
			"Prompt care for dental emergencies, such as toothac broken teeth, or knocked-out teeth specialize dental.",
		image: "assets/images/services/service-4-4.jpg",
		delay: "00ms",
	},
	{
		id: 5,
		icon: "icon-clean-dishes",
		title: "Construction Cleaning",
		href: "service-d-window-of-cleaning.html",
		description:
			"We are always looking for specific approach to each cases & Provide full solutions recreational vehicle and.",
		image: "assets/images/services/service-4-5.jpg",
		delay: "100ms",
	},
	{
		id: 6,
		icon: "icon-oosouji",
		title: "House Cleaning",
		href: "service-d-house-of-cleaning.html",
		description:
			"Will give you a complete account the system, and expound the teachings of the great explorer the truth the.",
		image: "assets/images/services/service-4-6.jpg",
		delay: "200ms",
	},
];

// Single Service Card Component
function ServiceCard({
	icon,
	title,
	href,
	description,
	image,
	delay,
}: ServiceItem) {
	return (
		<div
			className="item wow fadeInUp"
			data-wow-duration="1500ms"
			data-wow-delay={delay}
		>
			<div className="service-card-five">
				<div className="service-card-five__content">
					<div className="service-card-five__icon-box">
						<span className="service-card-five__icon">
							<i className={icon} />
						</span>
					</div>
					<h3 className="service-card-five__title">
						<a href={href}>{title}</a>
					</h3>
					<p className="service-card-five__text">{description}</p>
				</div>
				<div className="service-card-five__image">
					<div className="service-card-five__image__inner">
						<img src={image} alt={title} />
					</div>
				</div>
			</div>
		</div>
	);
}

// Main Service Section
export default function Service() {
	return (
		<section className="services-five section-space-top">
			<div className="container">
				{/* Section Title */}
				<div className="sec-title sec-title--center">
					<div className="sec-title__top">
						<img
							src="assets/images/shapes/sec-title-shape-1-1.png"
							alt="Our Best Services"
							className="sec-title__shape"
						/>
						<h5 className="sec-title__tagline bw-split-in-up-fast">
							Our Services
						</h5>
						<img
							src="assets/images/shapes/sec-title-shape-1-2.png"
							alt="Our Best Services"
							className="sec-title__shape"
						/>
					</div>
					<h2 className="sec-title__title bw-split-in-up">
						Specialized <span>Cleaning</span> <br /> Services
					</h2>
				</div>

				{/* Swiper Carousel */}
				<Swiper
					modules={[Autoplay, Pagination]}
					loop={true}
					speed={700}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className="services-five__carousel"
				>
					{servicesData.map((service) => (
						<SwiperSlide key={service.id}>
							<ServiceCard {...service} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Shapes */}
			<img
				src="assets/images/shapes/services-shape-5-1.png"
				alt="shape"
				className="services-five__shape-1"
			/>
			<img
				src="assets/images/shapes/services-shape-5-2.png"
				alt="shape"
				className="services-five__shape-2"
			/>
		</section>
	);
}
