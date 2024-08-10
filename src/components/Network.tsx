import { FaTelegram } from "react-icons/fa";

export default function Network() {
	return (
		<a
			target="blank"
			className="fixed right-8 bottom-6 z-[1000] animate__animated animate__tada animate__infinite animate__slower"
			href="https://telegram.me/Bukharanaturalproduct"
		>
			<FaTelegram className="size-[5.2rem] w-[3.5rem] h-[3.5rem] rounded-full text-sky-500 bg-white " />
		</a>
	);
}
