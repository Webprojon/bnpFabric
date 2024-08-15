import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "../../context/global-context";
import { flags, links } from "../../lib/data";

export default function ResponsiveMenu() {
	const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
	const [title, setTitle] = useState("Home - LLC Bukhara Natural Product");
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		document.title = title;
	}, [title]);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleClick = (language: string) => {
		console.log(language);
	};

	return (
		<header className="md:hidden">
			<div
				className={`fixed top-0 left-0 w-full transition-transform duration-300 z-[1000]
				${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
			>
				<div className="flex flex-col gap-y-20 pt-16 items-center h-screen transition-transform duration-500 bg-white">
					<MdClose onClick={handleMenuToggle} className="size-8" />
					<div className="flex flex-col items-center space-y-6">
						{links.map((link, i) => (
							<Link
								key={i}
								to={link.linkUrl}
								className={`font-semibold text-[22px] md:text-[17px]
									${pathname === link.linkUrl ? "text-black/90" : "text-black/55"}`}
								onClick={() => {
									setTitle(`${link.linkName} - LLC Bukhara Natural Product`);
									handleMenuToggle();
								}}
							>
								{link.linkName}
							</Link>
						))}
					</div>

					<div className="flex space-x-10 cursor-pointer">
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
			</div>
		</header>
	);
}
