import { useTranslation } from "react-i18next";

export default function NewsSection() {
	const { t } = useTranslation();

	// Data
	const newsItems = [
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/adult-blur-close-up-267394-637x357.png",
			date: "10/05/2019",
			author: t("newscard1.author"),
			title: t("newscard1.title"),
			description: t("newscard1.description"),
		},
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/daniel-korpai-1074289-unsplash-637x357.png",
			date: "10/05/2019",
			author: t("newscard2.author"),
			title: t("newscard2.title"),
			description: t("newscard2.description"),
		},
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/billetto-editorial-334686-unsplash-637x357.png",
			date: "10/05/2019",
			author: t("newscard3.author"),
			title: t("newscard3.title"),
			description: t("newscard3.description"),
		},
	];

	return (
		<section className="mt-14 md:mt-[6rem] px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col items-center">
				<h1 className="leading-none font-bold text-[28px] xs:text-[40px]">
					{t("news-h2")}
				</h1>
				<p className="text-black/60 mt-3 xs:text-[18px]">
					{t("collection-p-2")}
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-12 my-5 md:my-10">
					{newsItems.map((item, index) => (
						<div key={index}>
							<img
								alt="news imgs"
								src={item.imgSrc}
								className="rounded-[10px] md:rounded-[20px] shadow-2xl"
							/>
							<div className="lg:pr-[7rem]">
								<div className="space-x-5 mt-6 text-[17px]">
									<span>{item.date}</span>
									<span>
										{t("news-span")} {item.author}
									</span>
								</div>
								<h2 className="my-4 font-bold text-[19px] xs:text-[22px]">
									{item.title}
								</h2>
								<p className="text-black/85 xs:text-[17px] leading-6">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
