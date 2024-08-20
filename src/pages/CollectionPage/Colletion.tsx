import { IoChevronForward, IoSearch } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

export default function Colletion() {
	const [toggle, setToggle] = useState(false);
	const { t } = useTranslation();

	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	// Data
	const collections = [
		{ path: "/shop/spring-collection", label: "spring" },
		{ path: "/shop/winter-collection", label: "winter" },
		{ path: "/shop/summer-collection", label: "summer" },
		{ path: "/shop/autumn-collection", label: "autumn" },
	];

	const products = [
		{
			id: 1,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled.jpg",
			text: t("productcard-1.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 2,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-768x768.jpg",
			text: t("productcard-2.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 3,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
			text: t("productcard-3.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 4,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
			text: t("productcard-4.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 5,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
			text: t("productcard-5.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 6,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
			text: t("productcard-6.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 7,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
			text: t("productcard-7.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 8,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
			text: t("productcard-8.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 9,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
			text: t("productcard-9.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 10,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
			text: t("productcard-10.text"),
			category: t("firstCollectionHeading"),
		},
		{
			id: 11,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-50-scaled.jpg",
			text: t("productcard-11.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 12,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-49-scaled.jpg",
			text: t("productcard-12.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 13,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-48-scaled.jpg",
			text: t("productcard-13.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 14,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-47-scaled.jpg",
			text: t("productcard-14.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 15,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
			text: t("productcard-15.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 16,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
			text: t("productcard-16.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 17,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
			text: t("productcard-17.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 18,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
			text: t("productcard-18.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 19,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
			text: t("productcard-19.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 20,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
			text: t("productcard-20.text"),
			category: t("secondCollectionHeading"),
		},
		{
			id: 21,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
			text: t("productcard-21.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 22,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
			text: t("productcard-22.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 23,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
			text: t("productcard-23.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 24,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
			text: t("productcard-24.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 25,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
			text: t("productcard-25.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 26,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
			text: t("productcard-26.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 27,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
			text: t("productcard-27.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 28,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
			text: t("productcard-28.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 29,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
			text: t("productcard-29.text"),
			category: t("thirdCollectionHeading"),
		},
		{
			id: 30,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
			text: t("productcard-30.text"),
			category: t("thirdCollectionHeading"),
		},
	];

	const pathname = useLocation().pathname;
	const params = useParams().category;
	const categories = products.filter((item) => item.category === params);

	return (
		<section className="xs:mt-5 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col-reverse md:flex-row md:space-x-20">
				<div className="sm:w-[500px] lg:w-[390px] mt-10 md:mt-0">
					<form className="relative">
						<input
							type="text"
							required
							placeholder={t("collection-search")}
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
							<span className="font-bold text-[22px]">{t("collection")}</span>
							<IoChevronForward
								className={`size-5 chevron-icon ${toggle && "rotated"}`}
							/>
						</div>

						{!toggle && (
							<div className="mx-auto md:mx-0 flex flex-col gap-y-6 md:gap-y-2 text-black/70 text-[17px] mt-6">
								{collections.map((collection, index) => (
									<Link
										key={index}
										to={collection.path}
										className={`hover:text-red-600
											${pathname === collection.path && "text-red-600 font-medium"}`}
									>
										{t(collection.label)}
									</Link>
								))}
							</div>
						)}
					</div>
				</div>

				<div className="w-full">
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
						<div>
							<h2 className="font-bold text-[26px] capitalize md:text-[32px] leading-none mb-2">
								{pathname === "/shop"
									? t("collection")
									: pathname === "/shop/spring-collection"
									? t("spring")
									: ""}
							</h2>
							{categories.slice(0, 1).map((item) => (
								<h2 className="font-bold text-[26px] capitalize md:text-[32px] mb-3 leading-none">
									{item.category.replace("-", " ").split(" ").slice(0, 1)}{" "}
									{t("collection")}
								</h2>
							))}
							<span className="text-black/80 mt-3">
								{pathname !== "/shop/spring-collection" &&
									t("collection-span-showing")}
							</span>
						</div>
						{pathname !== "/shop/spring-collection" && (
							<Link
								to="/contact"
								className="mt-5 md:mt-0 rounded-[24px] md:rounded-[27px] cursor-pointer tracking-wider bg-black text-white text-[18px] py-2 md:py-3 px-10"
							>
								{t("collection-order-btn")}
							</Link>
						)}
					</div>
					{pathname === "/shop/spring-collection" && (
						<div className="flex items-center space-x-2 border border-sky-500 bg-sky-50 w-full rounded-md p-4 mt-5">
							<div className="flex items-center justify-center text-white w-6 h-6 rounded-full bg-sky-600">
								<MdInfoOutline className="size-5" />
							</div>
							<span>{t("spring-collection-message")}</span>
						</div>
					)}

					<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 sm:gap-x-8 md:gap-y-12">
						{(pathname === "/shop" ? products : categories)
							.slice(0, 8)
							.map((item, index) => (
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
