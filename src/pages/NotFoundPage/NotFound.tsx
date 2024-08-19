import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<section className="mt-16 flex flex-col items-center justify-center w-full">
			<div className="four_zero_four_bg bg-cover w-[1000px] h-[100vh]"></div>
			<div className="text-center">
				<h3 className="text-[40px] font-bold">404</h3>
				<p className="font-medium text-[20px]">
					The page you are looking for is not available!
				</p>
				<Link
					to="/"
					className="link_404 text-white bg-green-500 hover:bg-green-600 rounded-lg py-2 px-5 inline-block mt-5"
				>
					Back to home
				</Link>
			</div>
		</section>
	);
}
