import { IoChevronForward, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { cardDetails } from "../../lib/data";
import { useState } from "react";

export default function Colletion() {
	const [toggle, setToggle] = useState(false);
	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	return (
		<section className="xs:mt-5 md:mt-16 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col-reverse md:flex-row md:space-x-20">
				<div className="sm:w-[500px] lg:w-[390px] mt-10 md:mt-0">
					<form className="relative">
						<input
							type="text"
							required
							placeholder="Search here"
							className="pl-7 pr-16 py-[.9rem] rounded-[35px] text-[17px] outline-none w-full input-bg-collection text-black/50 placeholder:text-black/50"
						/>
						<div className="cursor-pointer absolute right-[6px] top-1/2 -translate-y-1/2 rounded-full p-3 bg-red-500 text-white">
							<IoSearch className="size-5" />
						</div>
					</form>

					<div className="flex flex-col mt-12">
						<div
							onClick={() => setToggle(!toggle)}
							className="flex items-center justify-between"
						>
							<span className="font-bold text-[22px]">Collection</span>
							<IoChevronForward
								className={`size-5 chevron-icon ${toggle ? "rotated" : ""}`}
							/>
						</div>

						{!toggle && (
							<div className="mx-auto md:mx-0 flex flex-col gap-y-6 md:gap-y-2 text-black/70 text-[17px] mt-6">
								<Link to="/" className="hover:text-red-600 hover:font-medium">
									Spring Collection
								</Link>
								<Link to="/" className="hover:text-red-600 hover:font-medium">
									Winter Collection
								</Link>
								<Link
									to="/"
									className="text-red-600 font-medium hover:text-red-600 hover:font-medium"
								>
									Summer Collection
								</Link>
								<Link to="/" className="hover:text-red-600 hover:font-medium">
									Autumn Collection
								</Link>
							</div>
						)}
					</div>
				</div>

				<div className="w-full">
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
						<div>
							<h2 className="font-bold text-[26px] md:text-[38px] mb-3 leading-none">
								Summer collection
							</h2>
							<span className="text-black/80">Showing 1-16 of 25</span>
						</div>
						<select className="mt-5 rounded-[24px] md:rounded-[27px] cursor-pointer outline-none appearance-none bg-black text-white py-3 md:py-[14px] pl-7 px-1">
							<option value="initial-sort">Initial sort</option>
							<option value="by-popularity">By popularity</option>
							<option value="by-rating">By rating</option>
							<option value="by-novelty">By novelty</option>
							<option value="prices-ascending">Prices: ascending</option>
							<option value="prices-decending">Prices: ascending</option>
						</select>
					</div>

					<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-8 md:gap-y-12">
						{cardDetails[0].cards.map((item, index) => (
							<Link
								key={index}
								className="group"
								onClick={scrollTop}
								to={`/product/${formatTextForUrl(item.text)}`}
							>
								<img
									alt="imgs"
									src={item.src}
									className="rounded-[22px] md:w-[260px] md:h-[35vh] cursor-pointer"
								/>
								<p className="xs:text-[19px] mt-3 text-black/90 font-medium transition-all group-hover:text-red-600 group-hover:font-bold">
									{item.text}
								</p>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
