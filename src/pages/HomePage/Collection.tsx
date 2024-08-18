import { Link } from "react-router-dom";
import firstCollectionImg from "../../assets/images/111.png";
import secondCollectionImg from "../../assets/images/111-1.png";
import thirdCollectionImg from "../../assets/images/111-2.png";
import { useTranslation } from "react-i18next";

export default function HomeCollections() {
	const { t } = useTranslation();
	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	// Data
	const cardDetails = [
		{
			id: 1,
			img: firstCollectionImg,
			heading: t("firstCollectionHeading"),
			cards: [
				{
					id: 1,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled-2550x1912.jpg",
					text: t("cardtext1"),
				},
				{
					id: 2,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-scaled-2550x1912.jpg",
					text: t("cardtext2"),
				},
				{
					id: 3,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled-2550x1912.jpg",
					text: t("cardtext3"),
				},
				{
					id: 4,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled-2550x1912.jpg",
					text: t("cardtext4"),
				},
				{
					id: 5,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled-2550x1912.jpg",
					text: t("cardtext5"),
				},
				{
					id: 6,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled-2550x1912.jpg",
					text: t("cardtext6"),
				},
				{
					id: 7,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled-2550x1912.jpg",
					text: t("cardtext7"),
				},
				{
					id: 8,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled-2550x1912.jpg",
					text: t("cardtext8"),
				},
				{
					id: 9,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled-2550x1912.jpg",
					text: t("cardtext9"),
				},
				{
					id: 10,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled-2550x1912.jpg",
					text: t("cardtext10"),
				},
			],
		},
		{
			id: 2,
			img: secondCollectionImg,
			heading: t("secondCollectionHeading"),
			cards: [
				{
					id: 11,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-50-scaled-2550x1912.jpg",
					text: t("cardtext11"),
				},
				{
					id: 12,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-49-scaled-2550x1912.jpg",
					text: t("cardtext12"),
				},
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-48-scaled-2550x1912.jpg",
					text: t("cardtext13"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-47-scaled-2550x1912.jpg",
					text: t("cardtext14"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled-2550x1912.jpg",
					text: t("cardtext15"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("cardtext16"),
				},
				{
					id: 17,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled-2550x1912.jpg",
					text: t("cardtext17"),
				},
				{
					id: 18,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled-2550x1912.jpg",
					text: t("cardtext18"),
				},
				{
					id: 19,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled-2550x1912.jpg",
					text: t("cardtext19"),
				},
				{
					id: 20,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled-2550x1912.jpg",
					text: t("cardtext20"),
				},
			],
		},
		{
			id: 3,
			img: thirdCollectionImg,
			heading: t("thirdCollectionHeading"),
			cards: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled-2550x1912.jpg",
					text: t("cardtext21"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-scaled-2550x1912.jpg",
					text: t("cardtext22"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled-2550x1912.jpg",
					text: t("cardtext23"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21-1014x760.jpg",
					text: t("cardtext24"),
				},
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled-2550x1912.jpg",
					text: t("cardtext25"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled-2550x1912.jpg",
					text: t("cardtext26"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled-2550x1912.jpg",
					text: t("cardtext27"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled-2550x1912.jpg",
					text: t("cardtext28"),
				},
				{
					id: 29,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled-2550x1912.jpg",
					text: t("cardtext29"),
				},
				{
					id: 30,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled-2550x1912.jpg",
					text: t("cardtext30"),
				},
			],
		},
	];

	return (
		<section>
			{cardDetails.map((card) => (
				<div
					key={card.id}
					className="px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]"
				>
					<div
						className={`text-white relative flex flex-col md:flex-row items-center justify-between md:h-[42vh] md:px-5 lg:px-20 mt-[9rem] lg:mt-[11rem] rounded-[22px]
							${
								card.id === 1
									? "bg-slate-600"
									: card.id === 2
									? "bg-indigo-950"
									: "bg-teal-900"
							}`}
					>
						<div className="relative md:static flex flex-col-reverse md:flex-row items-center md:space-x-14 w-[220px] xs:w-[280px] sm:w-[320px] lg:w-auto">
							<div className="flex flex-col items-center md:items-start">
								<span className="mt-[11rem] xs:mt-[15rem] sm:mt-[18rem] md:mt-0 font-bold text-[50px] xs:text-[65px] lg:text-[100px] leading-none">
									100%
								</span>
								<span className="xs:text-[22px] tracking-wide">
									{t("collection-span")}
								</span>
							</div>

							<img
								src={card.img}
								alt="collection img"
								loading="lazy"
								className="absolute -top-[6rem] md:static lg:w-[490px] md:h-[55vh] lg:h-[70vh]"
							/>
						</div>

						<div className="text-center md:text-left pt-5 pb-10 lg:w-[450px]">
							<h2 className="font-bold text-[28px] xs:text-[34px] leading-none">
								{t("collection-h2")}
							</h2>
							<p className="mt-4 md:w-[290px] px-3 sm:px-10 md:px-0 leading-6 xs:text-[17px] tracking-wide">
								{t("collection-p")}
							</p>
							<button className="hover:bg-black/90 hover:text-white transition-all mt-8 bg-white rounded-[20px] px-10 py-2 text-slate-800 font-bold">
								{t("collection-btn")}
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center mt-10 md:mt-[8rem] lg:mt-[11rem] mb-5">
						<h1 className="leading-none font-bold text-[28px] xs:text-[40px]">
							{card.heading}
						</h1>
						<p className="text-black/60 xs:text-[18px] mt-2 md:mt-3">
							{t("collection-p-2")}
						</p>

						<div className="mt-8 md:mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-8 md:gap-y-14">
							{card.cards.map((item, index) => (
								<Link
									key={index}
									className="group"
									onClick={scrollTop}
									to={`/product/${formatTextForUrl(item.text)}`}
								>
									<img
										alt="imgs"
										src={item.src}
										className="rounded-[15px] w-[260px] hover:-translate-y-1 transition-all cursor-pointer"
									/>
									<p className="xs:text-[19px] mt-3 text-black/90 font-medium transition-all group-hover:text-red-600 group-hover:font-bold">
										{item.text}
									</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
