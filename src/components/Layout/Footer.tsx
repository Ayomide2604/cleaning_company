import {
	FaFacebook,
	FaTwitter,
	FaGoogle,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="main-footer">
			<div
				className="main-footer__bg"
				style={{
					backgroundImage: "url(assets/images/backgrounds/footer-bg.jpg)",
				}}
			/>
			{/* /.main-footer__bg */}
			<div className="main-footer__top">
				<div className="container">
					<div className="row gutter-y-40">
						<div
							className="col-xl-3 col-lg-5 wow fadeInUp"
							data-wow-duration="1500ms"
							data-wow-delay="00ms"
						>
							<div className="footer-widget footer-widget--about">
								<a
									href="index.html"
									className="footer-widget__logo logo-retina"
								>
									<img src="/logo.png" width={100} alt="Tidytouch HTML" />
								</a>
								<p className="footer-widget__text">
									Description description description description description
									description description description description description
									description
								</p>
								<div className="social-links-two">
									<a href="https://facebook.com/">
										<span className="social-links-two__icon">
											<FaFacebook />
											<span className="sr-only">Facebook</span>
										</span>
									</a>
									<a href="https://x.com/">
										<span className="social-links-two__icon">
											<FaTwitter />
											<span className="sr-only">Twitter</span>
										</span>
									</a>
									<a href="https://google.com/">
										<span className="social-links-two__icon">
											<FaGoogle />
											<span className="sr-only">google</span>
										</span>
									</a>

									<a href="https://instagram.com/">
										<span className="social-links-two__icon">
											<FaInstagram />
											<span className="sr-only">Instagram</span>
										</span>
									</a>
								</div>
								{/* /.social-links-two */}
							</div>
							{/* /.footer-widget */}
						</div>
						<div
							className="col-xl-3 col-lg-3 col-md-5 wow fadeInUp"
							data-wow-duration="1500ms"
							data-wow-delay="100ms"
						>
							<div className="footer-widget footer-widget--links">
								<h2 className="footer-widget__title">Links</h2>
								{/* /.footer-widget__title */}
								<ul className="list-unstyled footer-widget__links">
									<li>
										<a href="about.html">About</a>
									</li>
									<li>
										<a href="contact.html">Make Appointment</a>
									</li>
									<li>
										<a href="blog-grid-right.html">Latest Post</a>
									</li>
									<li>
										<a href="team.html">Our Team</a>
									</li>
									<li>
										<a href="contact.html">Contact</a>
									</li>
								</ul>
								{/* /.list-unstyled footer-widget__links */}
							</div>
							{/* /.footer-widget */}
						</div>

						<div
							className="col-xl-3 col-lg-5 col-md-7 wow fadeInUp"
							data-wow-duration="1500ms"
							data-wow-delay="300ms"
						>
							<div className="footer-widget footer-widget--gallery">
								<h2 className="footer-widget__title">Our Gallery</h2>
								{/* /.footer-widget__title */}
								<div className="footer-widget__gallery">
									<a href="about.html" className="footer-widget__gallery__link">
										<img
											src="assets/images/gallery/footer-widget-gallery-1-1.png"
											alt="gallery"
										/>
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
									{/* /.footer-widget__gallery__link */}
									<a href="about.html" className="footer-widget__gallery__link">
										<img
											src="assets/images/gallery/footer-widget-gallery-1-2.png"
											alt="gallery"
										/>
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
									{/* /.footer-widget__gallery__link */}
									<a href="about.html" className="footer-widget__gallery__link">
										<img
											src="assets/images/gallery/footer-widget-gallery-1-3.png"
											alt="gallery"
										/>
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
									{/* /.footer-widget__gallery__link */}
									<a href="about.html" className="footer-widget__gallery__link">
										<img
											src="assets/images/gallery/footer-widget-gallery-1-4.png"
											alt="gallery"
										/>
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
									{/* /.footer-widget__gallery__link */}
									<a href="about.html" className="footer-widget__gallery__link">
										<img
											src="assets/images/gallery/footer-widget-gallery-1-5.png"
											alt="gallery"
										/>
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
									{/* /.footer-widget__gallery__link */}
									<a href="about.html" className="footer-widget__gallery__link">
										<img src="/logo.png" alt="gallery" />
										<span className="footer-widget__gallery__overlay">
											<i className="icon-plus" />
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="main-footer__bottom">
				<div className="container">
					<div className="main-footer__bottom__inner">
						<p className="main-footer__copyright">
							© Copyright <span className="dynamic-year" /> By
						</p>
					</div>
				</div>
			</div> */}
		</footer>
	);
}
