import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";

import { MdEmail, MdLocationOn } from "react-icons/md";

// components/Layout/Topbar.tsx
export default function Topbar() {
	return (
		<div className="topbar topbar--two">
			<div className="container">
				<div className="topbar__inner">
					<ul className="list-unstyled topbar__info">
						<li>
							<span className="topbar__info__icon">
								<MdEmail size={16} />
							</span>
							<a href="mailto:tidytouch@envato.com">Companyemail@mail.com</a>
						</li>
						<li>
							<span className="topbar__info__icon">
								<MdLocationOn size={16} />
							</span>
							<a href="https://www.google.com/maps">1759 Plum Cres SW</a>
						</li>
					</ul>

					<div className="topbar__social">
						<a href="https://facebook.com/">
							<FaFacebookF size={14} />
							<span className="sr-only">Facebook</span>
						</a>
						<a href="https://x.com/">
							<FaTwitter size={14} />
							<span className="sr-only">Twitter</span>
						</a>
						<a href="https://linkedin.com/">
							<FaLinkedinIn size={14} />
							<span className="sr-only">LinkedIn</span>
						</a>
						<a href="https://instagram.com/">
							<FaInstagram size={14} />
							<span className="sr-only">Instagram</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
