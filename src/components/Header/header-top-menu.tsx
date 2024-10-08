import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import HeaderLang from "./header-lang";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "../../redux/slices";
import { AppDispatch, Rootstate } from "../../redux/store";

export default function ResponsiveMenu() {
	const [title, setTitle] = useState("Home - LLC Bukhara Natural Product");
	const location = useLocation();
	const pathname = location.pathname;
	const { t } = useTranslation();

	const dispatch: AppDispatch = useDispatch();
	const isMenuOpen = useSelector((state: Rootstate) => state.user.isMenuOpen);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	useEffect(() => {
		document.title = title;
	}, [title]);

	const handleMenuToggle = () => {
		dispatch(setMenuOpen());
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
									scrollTop();
								}}
							>
								{link.linkName}
							</Link>
						))}
					</div>

					<div onClick={handleMenuToggle}>
						<HeaderLang />
					</div>
				</div>
			</div>
		</header>
	);
}
