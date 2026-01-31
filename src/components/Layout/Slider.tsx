// components/Layout/Slider.tsx
export default function Slider() {
	return (
		<section className="main-slider">
			<div className="main-slider__carousel owl-carousel owl-theme">
				<div className="main-slider__item">
					<div className="main-slider__bg">
						<div
							className="main-slider__bg__inner"
							style={{
								backgroundImage:
									"url(assets/images/backgrounds/main-slider-bg-1-1.jpg)",
							}}
						></div>
					</div>
					<div
						className="main-slider__overlay"
						style={{
							backgroundImage:
								"url(assets/images/shapes/main-slider-overlay-shape-1-1.png)",
						}}
					></div>
					<div className="container">
						<div className="row gutter-y-40">
							<div className="col-xl-12">
								<div className="main-slider__content">
									<h2 className="main-slider__title">
										Many Cleaning{" "}
										<span className="main-slider__title__highlight">
											Services
										</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Repeat for other slider items */}
			</div>
		</section>
	);
}
