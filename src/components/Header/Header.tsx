import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ResponsiveMenu from "./header-top-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../../context/global-context";

export default function Header() {
	const [title, setTitle] = useState("Home - LLC Bukhara Natural Product");
	const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		document.title = title;
	}, [title]);

	const handleClick = (language: string) => {
		console.log(language);
	};

	const links = [
		{
			linkName: "Home",
			linkUrl: "/",
		},
		{
			linkName: "About Us",
			linkUrl: "/about",
		},
		{
			linkName: "Collection",
			linkUrl: "/collection",
		},
		{
			linkName: "Contacts",
			linkUrl: "/contact",
		},
	];

	const flags = [
		{
			src: "https://vectorflags.s3.amazonaws.com/flags/uz-circle-01.png",
			alt: "Uzbekistan flag",
			language: "uz",
		},
		{
			src: "https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png",
			alt: "Russian flag",
			language: "ru",
		},
		{
			src: "https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg",
			alt: "English flag",
			language: "en",
		},
	];

	return (
		<header className="sticky top-0 bg-white z-[1000]">
			{isMenuOpen && <ResponsiveMenu />}
			<nav className="mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px] h-[12vh] flex justify-between space-x-10 items-center tracking-wide px-2 md:px-0">
				<img
					alt="logo"
					className="w-[150px] xs:w-[200px] sm:w-[190px]"
					src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
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

					<div className="flex space-x-8 cursor-pointer">
						{flags.map((flag, index) => (
							<img
								key={index}
								src={flag.src}
								alt={flag.alt}
								onClick={() => handleClick(flag.language)}
								className="w-10 hover:scale-105 transition-all shadow rounded-full"
							/>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
}
