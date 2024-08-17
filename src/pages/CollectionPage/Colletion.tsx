import { IoChevronForward, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
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

	const collections = [
		{
			id: 1,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled.jpg",
			text: "Squares",
			category: "Winter Collection",
		},
		{
			id: 2,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-768x768.jpg",
			text: "Ikat",
			category: "Winter Collection",
		},
		{
			id: 3,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
			text: "Circles",
			category: "Winter Collection",
		},
		{
			id: 4,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
			text: "Geometry blue",
			category: "Winter Collection",
		},
		{
			id: 5,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
			text: "Tropical leaves",
			category: "Winter Collection",
		},
		{
			id: 6,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
			text: "Bembi",
			category: "Winter Collection",
		},
		{
			id: 7,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
			text: "Byzantium",
			category: "Winter Collection",
		},
		{
			id: 8,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
			text: "Evening garden",
			category: "Winter Collection",
		},
		{
			id: 9,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
			text: "Feather Marquis",
			category: "Winter Collection",
		},
		{
			id: 10,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
			text: "Lavender roses",
			category: "Winter Collection",
		},
		{
			id: 11,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-50-scaled.jpg",
			text: "Safari",
			category: "Autumn collection",
		},
		{
			id: 12,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-49-scaled.jpg",
			text: "Multicolored amethyst",
			category: "Autumn collection",
		},
		{
			id: 13,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-48-scaled.jpg",
			text: "Stucco ornament",
			category: "Autumn collection",
		},
		{
			id: 14,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-47-scaled.jpg",
			text: "Emerald (AB)",
			category: "Autumn collection",
		},
		{
			id: 15,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
			text: "Malachite box",
			category: "Autumn collection",
		},
		{
			id: 16,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
			text: "Scents of spring",
			category: "Autumn collection",
		},
		{
			id: 17,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
			text: "Autumn leaf fall (AB)",
			category: "Autumn collection",
		},
		{
			id: 18,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
			text: "Blue Breeze (AB)",
			category: "Autumn collection",
		},
		{
			id: 19,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
			text: "Water Blue (AB)",
			category: "Autumn collection",
		},
		{
			id: 20,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
			text: "Plaid",
			category: "Autumn collection",
		},
		{
			id: 21,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
			text: "Vintage style",
			category: "Summer collection",
		},
		{
			id: 22,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
			text: "fluttering dandelion",
			category: "Summer collection",
		},
		{
			id: 23,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
			text: "French Riviera",
			category: "Summer collection",
		},
		{
			id: 24,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
			text: "Dolly the Sheep",
			category: "Summer collection",
		},
		{
			id: 25,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
			text: "Alpine herbs",
			category: "Summer collection",
		},
		{
			id: 26,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
			text: "Inspirational",
			category: "Summer collection",
		},
		{
			id: 27,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
			text: "Green lotus",
			category: "Summer collection",
		},
		{
			id: 28,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
			text: "Mountain cornflower",
			category: "Summer collection",
		},
		{
			id: 29,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
			text: "Sakura branch",
			category: "Summer collection",
		},
		{
			id: 30,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
			text: "Olive branch",
			category: "Summer collection",
		},
	];

	return (
		<section className="xs:mt-5 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
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
								<Link to="/" className="hover:text-red-600 hover:font-medium">
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
							<h2 className="font-bold text-[26px] md:text-[36px] mb-3 leading-none">
								Collection
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
						{collections.slice(0, 8).map((item, index) => (
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
