"use client";

import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Types
interface TitleLine {
	main: string;
	highlight?: string;
}

interface HeroSlideData {
	id: number;
	bgImage: string;
	tagline: string;
	titleLines: TitleLine[];
	description: string;
	ctaHref: string;
	videoUrl: string;
}

// Data for all 3 slides
const heroSlides: HeroSlideData[] = [
	{
		id: 1,
		bgImage: "assets/images/backgrounds/main-slider-bg-5-2.jpg",
		tagline: "BEST HOME CLEANING SERVICE",
		titleLines: [
			{ main: "Expert", highlight: "Expert" },
			{ main: "Cleaning Services in Edmonton." },
		],
		description:
			"Clean clean clean clean clean clean clean clean clean clean clean clean.",
		ctaHref: "contact.html",
		videoUrl: "https://www.youtube.com/watch?v=h9MbznbxlLc",
	},
];

// Single Slide Component
function HeroSlide({
	bgImage,
	tagline,
	titleLines,
	description,
	ctaHref,
	videoUrl,
}: HeroSlideData) {
	// Helper to render title with optional highlight
	const renderTitle = (line: TitleLine) => {
		if (!line.highlight) {
			return line.main;
		}
		// Split by highlight word and wrap it in span
		const parts = line.main.split(line.highlight);
		return (
			<>
				{parts.map((part, index) => (
					<span key={index}>
						{part}
						{index < parts.length - 1 && (
							<span className="main-slider-five__title__highlight">
								{line.highlight}
							</span>
						)}
					</span>
				))}
			</>
		);
	};

	return (
		<div className="main-slider-five__item">
			<div
				className="main-slider-five__bg"
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
			/>
			<div className="container">
				<div className="row gutter-y-40">
					<div className="col-xl-12">
						<div className="main-slider-five__content">
							{/* Title Lines */}
							<div className="main-slider-five__title">
								{titleLines.map((line, idx) => (
									<h2 key={idx} className="main-slider-five__title__text">
										<span className="main-slider-five__title__inner">
											<span className="main-slider-five__title__main">
												{renderTitle(line)}
											</span>
											<span className="main-slider-five__title__block" />
										</span>
									</h2>
								))}
							</div>

							{/* Description */}
							<div className="main-slider-five__description">
								<p className="main-slider-five__text">
									{description.split("\n").map((line, i) => (
										<span key={i}>
											{line}
											{i === 0 && <br />}
										</span>
									))}
								</p>
							</div>

							{/* Buttons */}
							<div className="main-slider-five__button">
								<div className="main-slider-five__button__inner">
									<a
										href={ctaHref}
										className="tidytouch-btn d-flex align-items-center gap-2"
									>
										<span>Contact Now</span>
										<span className="tidytouch-btn__icon">
											<FaArrowRight />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Main Component
export default function Hero() {
	return (
		<section className="main-slider-five">
			<Swiper
				modules={[Autoplay, Pagination, EffectFade]}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				loop={true}
				speed={700}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				className="main-slider-five__carousel"
			>
				{heroSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<HeroSlide {...slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
