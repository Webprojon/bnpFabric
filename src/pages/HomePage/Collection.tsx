import { Link } from "react-router-dom";
import { cardDetails } from "../../lib/data";

export default function HomeCollections() {
	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

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
									Material quality
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
							<span className="font-bold text-[28px] xs:text-[34px] leading-none">
								Bukhara Natural Product
							</span>
							<p className="mt-4 md:w-[290px] px-3 sm:px-10 md:px-0 leading-6 xs:text-[17px] tracking-wide">
								has been a company that produces cotton fabrics for use all over
								the world for many years
							</p>
							<button className="hover:bg-black/90 hover:text-white transition-all mt-8 bg-white rounded-[20px] px-10 py-2 text-slate-800 font-bold">
								Collection
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center mt-10 md:mt-[8rem] lg:mt-[11rem] mb-5">
						<h1 className="leading-none font-bold text-[28px] xs:text-[40px]">
							{card.heading}
						</h1>
						<p className="text-black/60 xs:text-[18px] mt-2 md:mt-3">
							Bukhara Natural Product
						</p>

						<div className="mt-8 md:mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-8 md:gap-y-14">
							{card.cards.map((item, index) => (
								<Link
									key={index}
									className="group"
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
