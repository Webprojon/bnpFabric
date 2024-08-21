import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Heading Imgages
import firstCollectionImg from "../../assets/images/winter-imgs/111-min.png";
import secondCollectionImg from "../../assets/images/autumn-imgs/111-1-min.png";
import thirdCollectionImg from "../../assets/images/summer-imgs/111-2-min.png";
// Winter Images
import squares from "../../assets/images/winter-imgs/squares-min.jpg";
import ikat from "../../assets/images/winter-imgs/ikat-min.jpg";
import circles from "../../assets/images/winter-imgs/circles-min.jpg";
import geometryBlue from "../../assets/images/winter-imgs/geometry-blue-min.jpg";
import tropicalLeaves from "../../assets/images/winter-imgs/tropical-leaves-min.jpg";
import bambi from "../../assets/images/winter-imgs/bambi-min.jpg";
import byzantium from "../../assets/images/winter-imgs/byzantium-min.jpg";
import eveningGarden from "../../assets/images/winter-imgs/evening-garden-min.jpg";
import featherMarquis from "../../assets/images/winter-imgs/feather-marquis-min.jpg";
import lavenderRoses from "../../assets/images/winter-imgs/lavender-roses-min.jpg";
// Autumn Images
import safari from "../../assets/images/autumn-imgs/safari-min.jpg";
import multicoloredAmethyst from "../../assets/images/autumn-imgs/multicolored-amethyst-min.jpg";
import stuccoOrnament from "../../assets/images/autumn-imgs/stucco-ornament-min.jpg";
import emerald from "../../assets/images/autumn-imgs/emerald-(ab)-min.jpg";
import malachiteBox from "../../assets/images/autumn-imgs/malachite-box-min.jpg";
import scentsSpring from "../../assets/images/autumn-imgs/scents-of-spring-min.jpg";
import autumnLeafFall from "../../assets/images/autumn-imgs/autumn-leaf-fall-min.jpg";
import blueBreeze from "../../assets/images/autumn-imgs/blue-breeze-min.jpg";
import waterBlue from "../../assets/images/autumn-imgs/water-blue-min.jpg";
import plaid from "../../assets/images/autumn-imgs/plaid-min.jpg";
// Summer Images
import vintageStyle from "../../assets/images/summer-imgs/vintage-style-min.jpg";
import flutteringDandelion from "../../assets/images/summer-imgs/fluttering-dandelion-min.jpg";
import frenchRiviera from "../../assets/images/summer-imgs/french-riviera-min.jpg";
import dollySheep from "../../assets/images/summer-imgs/dolly-the-sheep-min.jpg";
import alpineHerbs from "../../assets/images/summer-imgs/alpine-herbs-min.jpg";
import inspirational from "../../assets/images/summer-imgs/inspirational-min.jpg";
import greenLotus from "../../assets/images/summer-imgs/green-lotus-min.jpg";
import mountainCornflower from "../../assets/images/summer-imgs/mountain-cornflower-min.jpg";
import sakuraBranch from "../../assets/images/summer-imgs/sakura-branch-min.jpg";
import oliveBranch from "../../assets/images/summer-imgs/olive-branch-min.jpg";

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
			heading: t("first-CollectionHeading"),
			cards: [
				{
					id: 1,
					src: squares,
					text: t("cardtext1"),
				},
				{
					id: 2,
					src: ikat,
					text: t("cardtext2"),
				},
				{
					id: 3,
					src: circles,
					text: t("cardtext3"),
				},
				{
					id: 4,
					src: geometryBlue,
					text: t("cardtext4"),
				},
				{
					id: 5,
					src: tropicalLeaves,
					text: t("cardtext5"),
				},
				{
					id: 6,
					src: bambi,
					text: t("cardtext6"),
				},
				{
					id: 7,
					src: byzantium,
					text: t("cardtext7"),
				},
				{
					id: 8,
					src: eveningGarden,
					text: t("cardtext8"),
				},
				{
					id: 9,
					src: featherMarquis,
					text: t("cardtext9"),
				},
				{
					id: 10,
					src: lavenderRoses,
					text: t("cardtext10"),
				},
			],
		},
		{
			id: 2,
			img: secondCollectionImg,
			heading: t("second-CollectionHeading"),
			cards: [
				{
					id: 11,
					src: safari,
					text: t("cardtext11"),
				},
				{
					id: 12,
					src: multicoloredAmethyst,
					text: t("cardtext12"),
				},
				{
					id: 13,
					src: stuccoOrnament,
					text: t("cardtext13"),
				},
				{
					id: 14,
					src: emerald,
					text: t("cardtext14"),
				},
				{
					id: 15,
					src: malachiteBox,
					text: t("cardtext15"),
				},
				{
					id: 16,
					src: scentsSpring,
					text: t("cardtext16"),
				},
				{
					id: 17,
					src: autumnLeafFall,
					text: t("cardtext17"),
				},
				{
					id: 18,
					src: blueBreeze,
					text: t("cardtext18"),
				},
				{
					id: 19,
					src: waterBlue,
					text: t("cardtext19"),
				},
				{
					id: 20,
					src: plaid,
					text: t("cardtext20"),
				},
			],
		},
		{
			id: 3,
			img: thirdCollectionImg,
			heading: t("third-CollectionHeading"),
			cards: [
				{
					id: 21,
					src: vintageStyle,
					text: t("cardtext21"),
				},
				{
					id: 22,
					src: flutteringDandelion,
					text: t("cardtext22"),
				},
				{
					id: 23,
					src: frenchRiviera,
					text: t("cardtext23"),
				},
				{
					id: 24,
					src: dollySheep,
					text: t("cardtext24"),
				},
				{
					id: 25,
					src: alpineHerbs,
					text: t("cardtext25"),
				},
				{
					id: 26,
					src: inspirational,
					text: t("cardtext26"),
				},
				{
					id: 27,
					src: greenLotus,
					text: t("cardtext27"),
				},
				{
					id: 28,
					src: mountainCornflower,
					text: t("cardtext28"),
				},
				{
					id: 29,
					src: sakuraBranch,
					text: t("cardtext29"),
				},
				{
					id: 30,
					src: oliveBranch,
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
							<p className="mt-4 mb-8 md:w-[290px] px-3 sm:px-10 md:px-0 leading-6 xs:text-[17px] tracking-wide">
								{t("collection-p")}
							</p>
							<Link
								to="/shop"
								onClick={scrollTop}
								className="hover:bg-black/90 hover:text-white transition-all bg-white rounded-[20px] px-10 py-[10px] text-slate-800 font-bold"
							>
								{t("collection-btn")}
							</Link>
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
