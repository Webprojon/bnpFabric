export default function Contact() {
	const infos = [
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Email_254038.svg",
			contact: "info@bnpfabric.uz",
			desc: "Email:",
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Phone_17950751.svg",
			contact: "+998 93 383 75 85",
			desc: "Tel:",
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/noun_Location_19355641.svg",
			contact: "Bukhara, st. Alpomysh 80.",
			desc: "Address:",
		},
	];

	return (
		<section className="mt-16 mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex justify-between items-end">
				<div className="w-[560px]">
					<h2 className="font-bold text-[34px] mb-8">Contact</h2>
					<form className="w-full flex flex-col gap-y-6">
						<input
							required
							type="email"
							autoComplete="off"
							placeholder="Your email"
							className="rounded-[28px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 text-[17px] outline-none"
						/>
						<input
							required
							type="email"
							autoComplete="off"
							placeholder="Phone number"
							className="rounded-[28px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 text-[17px] outline-none"
						/>
						<textarea
							required
							placeholder="Your message here"
							className="resize h-[32vh] rounded-[20px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 no-scroll text-[17px] outline-none"
						></textarea>
						<button className="self-end px-16 py-4 bg-red-600 text-white font-medium hover:bg-black transition-all rounded-[28px]">
							Submit
						</button>
					</form>
				</div>

				<div className="w-[800px] h-[80vh]">
					<iframe
						loading="lazy"
						className="w-full h-full"
						src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1723713955398!5m2!1sen!2sus"
					></iframe>
				</div>
			</div>

			<div className="grid grid-cols-3 mx-auto pl-20 mt-[7rem]">
				{infos.map((item, i) => (
					<div key={i} className="flex items-center space-x-6">
						<img src={item.imgUrl} alt="delivery car" />
						<div className="flex space-x-2 text-[17px]">
							<span className="font-bold">{item.desc}</span>
							<span>{item.contact}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
