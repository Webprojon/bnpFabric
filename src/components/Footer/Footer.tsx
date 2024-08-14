import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<div
				className="flex flex-col gap-y-10 md:flex-row flex-wrap justify-between px-2 lg:px-0 mt-[3rem] md:mt-[7rem] tracking-wide mb-14 md:mb-20 mx-auto 
      max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]"
			>
				<div>
					<img
						alt="footer img"
						className="w-[280px] xs:w-[320px]"
						src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
					/>
					<p className="w-[250px] mt-6 md:mt-4 text-black/60">
						'Bukhara Natural Product' has been a company that produces cotton
						fabrics for many years for use all over the world.
					</p>
				</div>

				<div className="flex flex-col space-y-2 text-black/75">
					<p className="font-bold text-[22px] md:text-[20px] mb-1 md:mb-4">
						Menu
					</p>
					<Link to="/">Home</Link>
					<Link to="/about">About Us</Link>
					<Link to="/collection">Collection</Link>
					<Link to="/contact">Contacts</Link>
				</div>

				<div className="flex flex-col space-y-1 text-black/75">
					<p className="font-bold text-[22px] md:text-[20px] mb-1 md:mb-4">
						Contacts
					</p>
					<span>Bukhara, st. Alpomysh 80.</span>
					<a href="mailto:Bnpuz@bk.ru" target="blank">
						Bnpuz@bk.ru
					</a>
					<span>bnp_fabrik</span>
					<a href="mailto:info@bnpfabric.com" target="blank">
						info@bnpfabric.com
					</a>
					<a href="tel:+998-93-383-75-85" target="blank">
						+998 93 383 75 85
					</a>
					<a href="tel:+998-93-960-78-00" target="blank">
						+998 93 960 78 00
					</a>
				</div>

				<div>
					<p className="font-bold text-[20px] mb-4">Subscribe to our email</p>
					<form className="relative w-[100%] xs:w-[70%] sm:w-[60%] md:w-[500px]">
						<input
							type="text"
							required
							placeholder="Enter Your Email"
							className="px-4 sm:px-8 py-3 sm:py-[1.1rem] rounded-[35px] outline-none w-[100%] md:w-[500px] input-bg text-black/40 placeholder:text-black/40"
						/>
						<button className="absolute right-[5px] sm:right-[.5rem] top-1/2 -translate-y-1/2 rounded-[25px] px-5 sm:px-9 py-[7px] sm:py-[.7rem] bg-red-600 text-white hover:bg-black transition-all">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div className="bg-black py-4 md:py-6 px-7 text-gray-300 text-[14px] md:text-[17px]">
				<p>© 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.</p>
			</div>
		</footer>
	);
}
