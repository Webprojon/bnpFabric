export default function Home() {
	const infos = [
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_delivery_1095359.svg",
			title: "Free shipping",
			description: "Free shipping on all orders",
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_guarantee_952398.svg",
			title: "Return Guarantee",
			description: "30 day money back",
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/Group-995.svg",
			title: "Online support 24/7",
			description: "Technical support 24/7",
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Wallet_745515.svg",
			title: "Secure payment",
			description: "All payment methods accepted",
		},
	];

	return (
		<section className="relative mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="rounded-[20px] bg-black/75 mx-2 xs:mx-0 h-[35vh] xs:h-[40vh] sm:h-[60vh] border-2 md:h-[87vh]">
				<div className="flex">
					<img
						alt="home img"
						className="w-[400px] xs:w-[600px] sm:w-[800px] md:w-[1000px] lg:w-[80%]"
						src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
					/>
					<div className="absolute right-4 top-20 md:right-10 xs:top-[7rem] sm:top-4 md:top-10 text-white">
						<h1 className="flex flex-col leading-10 sm:leading-[4rem] md:leading-[6.4rem] text-right font-bold text-[20px] sm:text-[30px] md:text-[60px]">
							<span>Bukhara</span>
							<span className="text-[36px] sm:text-[44px] md:text-[90px]">
								Natural
							</span>
							<span className="text-[50px] sm:text-[60px] md:text-[130px]">
								Products
							</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-10 px-2 md:px-10 mt-10 md:mt-14">
				{infos.map((item, i) => (
					<div
						key={i}
						className="flex flex-col md:flex-row text-center md:text-left items-center md:space-x-6"
					>
						<img src={item.imgUrl} alt="delivery car" />
						<div className="mt-3 md:mt-0">
							<h2 className="font-bold text-[15px] md:text-[18px]">
								{item.title}
							</h2>
							<p className="text-black/55 text-[14px] xs:text-[16px]">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
