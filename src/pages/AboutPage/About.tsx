export default function About() {
	return (
		<section className="mt-10 md:mt-16 px-2 lg:px-0 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col-reverse md:flex-row justify-between gap-x-10">
				<div className="lg:w-[690px]">
					<h1 className="font-bold my-6 md:mb-8 text-[22px] sm:text-[44px] leading-none">
						Bukhara Natural Product
					</h1>
					<p className="sm:text-[19px] tracking-wider sm:leading-8 text-black/70">
						Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory
						has been a company that produces cotton fabrics for use all over the
						world for many years.The main goal of this company is to produce
						high quality and cost effective products.The production process of
						this company is completely environmentally friendly.The company can
						produce any types of cotton raw materials according to the
						requirements and suggestions of customers.
					</p>
				</div>

				<img
					className="md:w-[500px] lg:w-[700px] md:h-[75vh] rounded-[15px] shadow-2xl"
					src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png"
					alt="Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for."
				/>
			</div>
		</section>
	);
}
