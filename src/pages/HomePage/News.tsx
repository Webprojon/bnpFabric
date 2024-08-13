export default function NewsSection() {
	const newsItems = [
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/adult-blur-close-up-267394-637x357.png",
			date: "10/05/2019",
			author: "admin",
			title: "How to choose perfect gadgets",
			description:
				"When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...",
		},
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/daniel-korpai-1074289-unsplash-637x357.png",
			date: "10/05/2019",
			author: "admin",
			title: "How to choose perfect gadgets",
			description:
				"When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper...",
		},
		{
			imgSrc:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/billetto-editorial-334686-unsplash-637x357.png",
			date: "10/05/2019",
			author: "admin",
			title: "How to choose perfect gadgets",
			description:
				"There are many variations passages of Lorem Ipsum available, but the majority have suffered alterat ...",
		},
	];

	return (
		<section className="mt-[6rem] mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col items-center">
				<h1 className="leading-none font-bold text-[42px]">News</h1>
				<p className="text-black/60 mt-3 text-[18px]">
					Bukhara Natural Product
				</p>

				<div className="grid grid-cols-3 gap-x-10 my-10">
					{newsItems.map((item, index) => (
						<div key={index}>
							<img
								alt="news imgs"
								src={item.imgSrc}
								className="rounded-[20px] shadow-2xl"
							/>
							<div className="pr-[7rem]">
								<div className="space-x-5 mt-6 text-[17px]">
									<span>{item.date}</span>
									<span>by {item.author}</span>
								</div>
								<h2 className="my-4 font-bold text-[22px]">{item.title}</h2>
								<p className="text-black/85 text-[17px] leading-6">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
