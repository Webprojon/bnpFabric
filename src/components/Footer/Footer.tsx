import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import HeaderLang from "../Header/header-lang";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.png";

export default function Footer() {
	const { t } = useTranslation();
	const [userEmail, setUserEmail] = useState("");

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `New user to subscribe: ${userEmail}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setUserEmail("");
				toast.success(t("footer-btn-subscribed"));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<footer>
			<div
				className="flex flex-col gap-y-10 md:flex-row flex-wrap justify-between px-2 lg:px-0 mt-[3rem] md:mt-[7rem] tracking-wide mb-14 md:mb-20 mx-auto 
      max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]"
			>
				<div>
					<img
						src={logo}
						alt="footer img"
						onClick={scrollTop}
						className="w-[280px] xs:w-[320px] cursor-pointer"
					/>
					<p className="w-[250px] mt-6 md:mt-4 text-black/60">
						{t("footer-p")}
					</p>
				</div>

				<div className="text-black/75">
					<p className="font-bold text-[24px] md:text-[20px] mb-1 md:mb-4">
						{t("footer-menu")}
					</p>
					<div
						onClick={scrollTop}
						className="flex flex-col space-y-3 lg:space-y-2"
					>
						<Link to="/">{t("linkHome")}</Link>
						<Link to="/shop">{t("linkCollection")}</Link>
						<Link to="/about">{t("linkAbout")}</Link>
						<Link to="/contact">{t("linkcontact")}</Link>
					</div>
				</div>

				<div className="flex flex-col space-y-3 lg:space-y-1 text-black/75">
					<p className="font-bold text-[24px] md:text-[20px] mb-1 md:mb-4">
						{t("footer-contact")}
					</p>
					<span>{t("contact-address-text")}</span>
					<a href="mailto:Bnpuz@bk.ru" target="blank">
						Bnpuz@bk.ru
					</a>
					<span>bnp_fabrik</span>
					<a href="mailto:info@bnpfabric.com" target="blank">
						info@bnpfabric.com
					</a>
					<a href="tel:+998-93-383-75-85" target="blank">
						+998 93 383 75 85
					</a>
					<a href="tel:+998-93-960-78-00" target="blank">
						+998 93 960 78 00
					</a>
				</div>

				<div>
					<p className="font-bold text-[20px] mb-4">{t("footer-p2")}</p>
					<form
						onSubmit={sendMessage}
						className="relative w-[100%] xs:w-[70%] sm:w-[60%] md:w-[500px] mb-10"
					>
						<input
							type="email"
							required
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
							placeholder={t("footer-input")}
							className="px-4 sm:px-8 py-3 sm:py-[1.1rem] rounded-[35px] outline-none w-[100%] md:w-[500px] input-bg text-black/40 placeholder:text-black/40"
						/>
						<button className="absolute right-[5px] sm:right-[.5rem] top-1/2 -translate-y-1/2 rounded-[25px] px-5 sm:px-9 py-[7px] sm:py-[.7rem] bg-red-600 text-white hover:bg-black transition-all">
							{t("footer-btn")}
						</button>
					</form>

					<HeaderLang />
				</div>
			</div>

			<div className="bg-black py-4 md:py-6 px-7 text-gray-300 text-[14px] md:text-[17px]">
				<p>{t("footer-p3")}</p>
			</div>
		</footer>
	);
}
