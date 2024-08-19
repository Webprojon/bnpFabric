export default function NotFound() {
	return (
		<section className="">
			<div className="">
				<div className="flex justify-center">
					<div className="text-center">
						<div className="four_zero_four_bg bg-cover bg-center h-[100vh] flex items-center justify-center">
							<h1 className="text-6xl">404</h1>
						</div>
						<div className="content_box_404 mt-[-50px]">
							<h3 className="text-2xl font-semibold">Look like you're lost</h3>
							<p>The page you are looking for is not available!</p>
							<a
								href="/"
								className="link_404 text-white bg-green-500 rounded-lg py-2 px-5 inline-block mt-5"
							>
								Go to Home
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
