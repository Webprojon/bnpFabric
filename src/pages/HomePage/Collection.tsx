import { Link } from "react-router-dom";
import { cardDetails } from "../../lib/data";

export default function HomeCollections() {
	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	return (
		<section>
			{cardDetails.map((card) => (
				<div key={card.id}>
					<div
						className={`text-white relative flex items-center justify-between h-[42vh] px-20 mt-[11rem] rounded-[22px]
							${
								card.id === 1
									? "bg-slate-600"
									: card.id === 2
									? "bg-indigo-950"
									: "bg-teal-900"
							}`}
					>
						<div className="flex flex-col">
							<span className="font-bold text-[100px] leading-none">100%</span>
							<span className="text-[22px] tracking-wide">
								Material quality
							</span>
						</div>

						<img
							src={card.img}
							alt="collection img"
							loading="lazy"
							className="w-[490px] h-[70vh]"
						/>

						<div className="w-[450px]">
							<span className="font-bold text-[34px]">
								Bukhara Natural Product
							</span>
							<p className="mt-4 w-[290px] leading-6 text-[17px] tracking-wide">
								has been a company that produces cotton fabrics for use all over
								the world for many years
							</p>
							<button className="hover:bg-black/90 hover:text-white transition-all mt-8 bg-white rounded-[20px] px-8 py-2 text-slate-800 font-bold">
								Collection
							</button>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center mt-[11rem] mb-5">
						<h1 className="leading-none font-bold text-[40px]">
							{card.heading}
						</h1>
						<p className="text-black/60 text-[18px] mt-3">
							Bukhara Natural Product
						</p>

						<div className="mt-14 flex justify-between gap-y-14 w-full flex-wrap">
							{card.cards.map((item, index) => (
								<Link
									to={`/product/${formatTextForUrl(item.text)}`}
									key={index}
								>
									<img
										alt="imgs"
										className="rounded-[15px] w-[260px] group hover:-translate-y-1 transition-all cursor-pointer"
										src={item.src}
									/>
									<p className="text-[19px] mt-3 text-black/90 font-medium transition-all group-hover:text-red-600 group-hover:font-bold">
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
