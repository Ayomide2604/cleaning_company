// components/Layout/Header.tsx
import Topbar from "./Topbar";
import {
	FaPhone,
	FaEnvelope,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaTimes,
	FaSearch,
} from "react-icons/fa";

export default function Header() {
	return (
		<>
			<Topbar />

			<header className="main-header main-header--five sticky-header sticky-header--normal">
				<div className="main-header__wrapper">
					<div className="main-header__container container">
						<div className="main-header__inner">
							<div className="main-header__logo logo-retina">
								<a href="index.html">
									{/* <img
										src="assets/images/logo-dark.png"
										alt="tidytouch HTML"
										width={272}
									/> */}
								</a>
							</div>
							{/* /.main-header__logo */}
							<div className="main-header__right">
								<nav className="main-header__nav main-menu">
									<ul className="main-menu__list">
										<li>
											<a href="/">Home</a>
										</li>
										<li>
											<a href="/about">About Us</a>
										</li>
										<li className="dropdown">
											<a href="#">Services</a>

											<ul>
												<li>
													<a href="#">Service 1</a>
												</li>

												<li>
													<a href="service-d-industrial-of-cleaning.html">
														Service 2
													</a>
												</li>
												<li>
													<a href="service-d-industrial-of-cleaning.html">
														Service 3
													</a>
												</li>
											</ul>
										</li>

										<li>
											<a href="contact.html">Contact</a>
										</li>
									</ul>
								</nav>
								{/* /.main-header__nav */}
								<div className="mobile-nav__btn mobile-nav__toggler">
									<span />
									<span />
									<span />
								</div>
								{/* /.mobile-nav__toggler */}
								<a href="#" className="main-header__search search-toggler">
									<FaSearch />
									<span className="sr-only">Search</span>
								</a>
								{/* /.main-header__search */}
								<div className="main-header__call">
									<span className="main-header__call__icon">
										<i className="icon-phone-call" />
									</span>
									{/* /.main-header__call__icon */}
									<div className="main-header__call__content">
										<p className="main-header__call__title">Get Contact Now</p>
										{/* /.call__title */}
										<h4 className="main-header__call__number">
											<a href="tel:+225225558888">+225 22555 8888</a>
										</h4>
										{/* /.main-header__call__number */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /.main-header__wrapper */}
			</header>

			{/* Mobile Nav Wrapper */}
			<div className="mobile-nav__wrapper">
				<div className="mobile-nav__overlay mobile-nav__toggler" />
				{/* /.mobile-nav__overlay */}
				<div className="mobile-nav__content">
					<span className="mobile-nav__close mobile-nav__toggler">
						<FaTimes />
					</span>
					<div className="logo-box">
						<a href="index.html" aria-label="logo image">
							{/* <img
								src="assets/images/logo-light-2.png"
								width={262}
								alt="Tidytouch HTML"
							/> */}
						</a>
					</div>
					{/* /.logo-box */}
					<div className="mobile-nav__container" />
					{/* /.mobile-nav__container */}
					<ul className="mobile-nav__contact list-unstyled">
						<li>
							<span className="mobile-nav__contact__icon">
								<FaEnvelope />
							</span>
							<a href="mailto:tidytouch@envato.com">Companyemail@mail.com</a>
						</li>
						<li>
							<span className="mobile-nav__contact__icon">
								<FaPhone />
							</span>
							<a href="tel:+9156980036420">+1 437 685 5676</a>
						</li>
					</ul>
					{/* /.mobile-nav__contact */}
					<div className="social-links">
						<a href="https://facebook.com/">
							<span className="social-links__icon">
								<FaFacebook />
								<span className="sr-only">Facebook</span>
							</span>
						</a>
						<a href="https://x.com/">
							<span className="social-links__icon">
								<FaTwitter />
								<span className="sr-only">Twitter</span>
							</span>
						</a>
						<a href="https://linkedin.com/">
							<span className="social-links__icon">
								<FaLinkedin />
								<span className="sr-only">Linkedin</span>
							</span>
						</a>
						<a href="https://instagram.com/">
							<span className="social-links__icon">
								<FaInstagram />
								<span className="sr-only">Instagram</span>
							</span>
						</a>
					</div>
					{/* /.social-links */}
				</div>
				{/* /.mobile-nav__content */}
			</div>
		</>
	);
}
