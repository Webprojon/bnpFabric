import HomeCollections from "./Collection";
import NewsSection from "./News";
import bgHomeImg from "../../assets/images/bg-home.png";
import { useTranslation } from "react-i18next";

export default function Home() {
	const { t } = useTranslation();

	// Data
	const infos = [
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_delivery_1095359.svg",
			title: t("homecard1.title"),
			description: t("homecard1.description"),
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_guarantee_952398.svg",
			title: t("homecard2.title"),
			description: t("homecard2.description"),
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/Group-995.svg",
			title: t("homecard3.title"),
			description: t("homecard3.description"),
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Wallet_745515.svg",
			title: t("homecard4.title"),
			description: t("homecard4.description"),
		},
	];

	return (
		<section className="xs:mt-5 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="relative rounded-[20px] bg-black/75 h-[35vh] xs:h-[40vh] sm:h-[60vh] md:h-[87vh]">
				<div className="flex">
					<img
						alt="home img"
						className="w-[250px] xs:w-[400px] sm:w-[500px] md:w-[700px] lg:w-[900px]"
						src={bgHomeImg}
					/>
					<div className="absolute right-4 bottom-4 md:right-8  xs:top-4 text-white">
						<h1
							className="flex flex-col leading-10 sm:leading-[4rem] md:leading-[6.4rem] lg:leading-[7.5rem] text-right font-bold text-[20px] 
						sm:text-[30px] md:text-[60px] lg:text-[75px]"
						>
							<span>{t("hometext1")}</span>
							<span className="text-[36px] sm:text-[44px] md:text-[90px] lg:text-[110px]">
								{t("hometext2")}
							</span>
							<span className="text-[50px] sm:text-[60px] md:text-[130px] lg:text-[140px]">
								{t("hometext3")}
							</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-10 px-2 md:px-10 mt-10 md:mt-14">
				{infos.map((item, i) => (
					<div
						key={i}
						className="flex flex-col md:flex-row text-center md:text-left items-center md:space-x-6"
					>
						<img src={item.imgUrl} alt="delivery car" />
						<div className="mt-3 md:mt-0">
							<h2 className="font-bold text-[15px] md:text-[18px]">
								{item.title}
							</h2>
							<p className="text-black/55 text-[14px] xs:text-[16px]">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<HomeCollections />
			<NewsSection />
		</section>
	);
}
