import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResponsiveMenu from "./header-top-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../../context/global-context";
import { useTranslation } from "react-i18next";
import HeaderLang from "./header-lang";
import logo from "../../assets/images/logo.png";

export default function Header() {
	const [title, setTitle] = useState("Home - LLC Bukhara Natural Product");
	const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const location = useLocation();
	const pathname = location.pathname;
	const { t } = useTranslation();

	const handleScroll = () => {
		if (window.scrollY > 10) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		document.title = title;

		// Scrolling
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [title]);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	// Data
	const links = [
		{
			linkName: t("linkHome"),
			linkUrl: "/",
		},
		{
			linkName: t("linkCollection"),
			linkUrl: "/shop",
		},
		{
			linkName: t("linkAbout"),
			linkUrl: "/about",
		},
		{
			linkName: t("linkcontact"),
			linkUrl: "/contact",
		},
	];

	return (
		<header
			className={`bg-white z-[999] right-0 left-0 top-0 
				 ${isScrolled && "fixed shadow-lg transition-transform duration-300"}`}
		>
			{isMenuOpen && <ResponsiveMenu />}
			<nav className="mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px] h-[12vh] flex justify-between space-x-10 items-center tracking-wide px-2 md:px-0">
				<img
					alt="logo"
					src={logo}
					onClick={scrollTop}
					className="w-[150px] xs:w-[200px] sm:w-[190px] cursor-pointer"
				/>
				<RxHamburgerMenu
					className="size-8 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				/>
				<div className="hidden md:flex justify-between w-full items-center gap-x-8">
					<div className="space-x-10">
						{links.map((link, i) => (
							<Link
								key={i}
								to={link.linkUrl}
								className={`font-semibold text-[19px]
									${pathname === link.linkUrl ? "text-black/90" : "text-black/55"}`}
								onClick={() => {
									setTitle(`${link.linkName} - LLC Bukhara Natural Product`);
								}}
							>
								{link.linkName}
							</Link>
						))}
					</div>

					<HeaderLang />
				</div>
			</nav>
		</header>
	);
}
