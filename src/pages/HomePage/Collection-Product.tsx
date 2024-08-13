import { Link, useParams } from "react-router-dom";
import { products } from "../../lib/data";
import { useState } from "react";

export default function ProductDetails() {
	const [isActivePage, setIsActivePage] = useState(false);
	const { text } = useParams();

	const formatTextForDisplay = (text: string) => text.replace(/-/g, " ");

	const displayText = formatTextForDisplay(text || "");

	const product = products.find(
		(p) => p.text.toLowerCase() === displayText.toLowerCase(),
	);

	const defineActivePage = () => {
		setIsActivePage(!isActivePage);
	};

	const tabStyles = (isActive: boolean) =>
		`pt-5 text-black/${isActive ? "60" : "80 border-t-[.2rem] border-red-500"}`;

	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	if (!product) {
		return (
			<div className="font-bold text-[40px] text-center mt-20">
				Bizda bunday tavar yo'q 🤷‍♂️
			</div>
		);
	}

	return (
		<section className="mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="my-14 flex justify-between items-center">
				<img
					src={product.src}
					alt={product.text}
					className="rounded-[20px] w-[720px] h-[96vh]"
				/>

				<div className="tracking-wide">
					<h2 className="font-bold text-[40px]">{product.text}</h2>
					<table className="w-[500px] my-4 border border-black/30 text-black/70">
						<tbody className="text-[17px]">
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									Material:
								</td>
								<td className="px-6 py-4">100% cotton flannel</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py- border-r border-black/30">
									Pillowcase:
								</td>
								<td className="px-6 py-4">50x70 cm (2 pcs.)</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									Bed sheet:
								</td>
								<td className="px-6 py-4">260×280 cm (1 piece)</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									Duvet cover:
								</td>
								<td className="px-6 py-4">160x220 cm (2 pcs.)</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">Size:</td>
								<td className="px-6 py-4">Special size</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									Manufacturer:
								</td>
								<td className="px-6 py-4">Bukhara Natural Product</td>
							</tr>
							<tr>
								<td className="px-6 py-5 border-r border-black/30"></td>
								<td className="px-6 py-5"></td>
							</tr>
						</tbody>
					</table>
					<span className="text-[17px] text-black/70">
						Category:{" "}
						<Link to="/collection" className="text-red-600">
							{product.category}
						</Link>
					</span>
				</div>
			</div>

			<div className="border-t border-black/40 my-[6rem]">
				<div
					className={`flex justify-center items-center space-x-20 text-[18px] font-bold cursor-pointer 
						${isActivePage ? "text-black" : "text-black/60"}`}
				>
					<span onClick={defineActivePage} className={tabStyles(isActivePage)}>
						Description
					</span>
					<span onClick={defineActivePage} className={tabStyles(!isActivePage)}>
						Reviews (0)
					</span>
				</div>

				{isActivePage ? (
					<div className="mt-20 flex flex-col mx-auto max-w-[1020px] tracking-wide">
						<div>
							<h2 className="font-bold text-[25px]">Reviews</h2>
							<p className="py-10 text-[17px] text-black/70">
								There are no reviews yet
							</p>
							<p className="font-bold text-[24px]">
								Be the first to review “{product.text}”
							</p>
							<p className="text-black/85 tracking-wider mb-10">
								Your email address will not be published. Required fields are
								marked *
							</p>
						</div>

						<form className="flex flex-col space-y-7">
							<div className="flex justify-between">
								<div className="flex flex-col">
									<label
										htmlFor="name"
										className="text-[18px] mb-3 text-black/70"
									>
										Name *
									</label>
									<input
										type="text"
										required
										id="name"
										autoComplete="off"
										className="bg-gray-200 rounded-[27px] w-[470px] py-4 px-6 outline-none"
									/>
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="email"
										className="text-[18px] mb-3 text-black/70"
									>
										Email *
									</label>
									<input
										type="email"
										required
										id="email"
										autoComplete="off"
										className="bg-gray-200 rounded-[27px] w-[470px] py-4 px-6 outline-none"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="review"
									className="text-[18px] mb-3 text-black/70"
								>
									Your review *
								</label>
								<textarea
									id="review"
									rows={9}
									required
									autoComplete="off"
									className="bg-gray-200 resize rounded-[20px] p-6 outline-none no-scroll"
								></textarea>
							</div>

							<button className="py-3 self-end px-16 rounded-[25px] text-[17px] bg-red-600 hover:bg-red-500 transition-all text-white font-medium">
								Send
							</button>
						</form>
					</div>
				) : (
					<div className="mt-20 flex flex-col space-y-6 mx-auto max-w-[1020px]">
						<h2 className="font-bold text-[25px]">Description</h2>
						<p className="font-bold text-[28px] text-black/80">
							Bedding set {product.text}
						</p>
						<p className="text-black/65">
							Bed linen is a household item and bedroom decor designed for
							comfort and beauty. You can choose from a variety of bed sets that
							include sheets, blankets, pillow crafts and other accessories.
							They have various designs, prints, embroideries or other design
							elements. They are easy and quick to clean and clean. They are
							made from soft materials and they make your bedrooms cozy and
							cozy.
						</p>
					</div>
				)}
			</div>

			<div className="flex flex-col items-center mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
				<h2 className="text-[38px] font-bold">Similar products</h2>

				<div className="grid lg:grid-cols-4 gap-x-14 mt-16">
					{product.similars.map((similar) => (
						<Link
							key={similar.id}
							className="group"
							onClick={scrollTop}
							to={`/product/${formatTextForUrl(similar.text)}`}
						>
							<img
								src={similar.src}
								alt={similar.text}
								className="rounded-[15px] w-[320px] hover:-translate-y-1 transition-all cursor-pointer"
							/>
							<p className="mt-4 text-[19px] tracking-wider text-sky-600 font-bold transition-all group-hover:text-red-600 group-hover:font-bold">
								{similar.text}
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
