import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
	const [title, setTitle] = useState("Home - LLC Bukhara Natural Product");
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		document.title = title;
	}, [title]);

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

	return (
		<header>
			<nav className="mx-auto max-w-[1460px] h-[12vh] flex justify-between items-center tracking-wide">
				<div className="flex items-center gap-x-8">
					<img
						alt="logo"
						className="w-[180px]"
						src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
					/>
					<div className="space-x-10">
						{links.map((link) => (
							<Link
								to={link.linkUrl}
								className={`font-semibold text-[17px]
									${pathname === link.linkUrl ? "text-black/90" : "text-black/55"}`}
								onClick={() => {
									setTitle(`${link.linkName} - LLC Bukhara Natural Product`);
								}}
							>
								{link.linkName}
							</Link>
						))}
					</div>
				</div>

				<div
					//onClick={handleToggle}
					className="flex space-x-6 cursor-pointer"
				>
					<img
						src="https://vectorflags.s3.amazonaws.com/flags/uz-circle-01.png"
						alt="Uzbekistan flag"
						//onClick={() => handleClick("uz")}
						className="w-10 hover:scale-105 transition-all shadow rounded-full"
					/>
					<img
						src="https://vectorflags.s3.amazonaws.com/flags/ru-circle-01.png"
						alt="Russian flag"
						//onClick={() => handleClick("ru")}
						className="w-10 hover:scale-105 transition-all shadow rounded-full"
					/>
					<img
						src="https://static.vecteezy.com/system/resources/thumbnails/007/910/760/small_2x/united-kingdom-flag-rounded-icon-uk-flag-union-jack-vector.jpg"
						alt="English flag"
						//onClick={() => handleClick("en")}
						className="w-10 hover:scale-105 transition-all shadow rounded-full"
					/>
				</div>
			</nav>
		</header>
	);
}
