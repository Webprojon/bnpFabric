import { useEffect, useState } from "react";
import { flags } from "../../lib/data";
import { useTranslation } from "react-i18next";

export default function HeaderLang() {
	const { i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState("");

	useEffect(() => {
		const initialLanguage =
			typeof window !== "undefined"
				? localStorage.getItem("i18nextLng") || "uz"
				: "uz";
		setSelectedLanguage(initialLanguage);
	}, []);

	const handleClick = (language: string) => {
		console.log(selectedLanguage);
		setSelectedLanguage(language);
		i18n.changeLanguage(language);
		localStorage.setItem("i18nextLng", language);
	};

	return (
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
	);
}
