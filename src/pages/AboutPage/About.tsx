import { useTranslation } from "react-i18next";
import aboutUs from "../../assets/images/aboutUs.png";

export default function About() {
	const { t } = useTranslation();

	return (
		<section className="xs:mt-5 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col-reverse md:flex-row justify-between gap-x-10">
				<div className="lg:w-[690px]">
					<h1 className="font-bold my-6 md:mb-8 text-[22px] sm:text-[38px] leading-none">
						{t("collection-p-2")}
					</h1>
					<p className="sm:text-[19px] tracking-wider sm:leading-8 text-black/70">
						{t("about-p")}
					</p>
				</div>

				<img
					className="md:w-[500px] lg:w-[700px] md:h-[75vh] rounded-[15px] shadow-2xl"
					src={aboutUs}
					alt="Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for."
				/>
			</div>
		</section>
	);
}
