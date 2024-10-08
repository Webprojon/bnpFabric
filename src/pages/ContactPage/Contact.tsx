import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../components/Modal";
import { AppDispatch, Rootstate } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal } from "../../redux/slices";

export default function Contact() {
	const dispatch: AppDispatch = useDispatch();
	const isModal = useSelector((state: Rootstate) => state.user.isModal);

	const [emailValue, setEmailValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [textAreaValue, settextAreaValue] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const token = "6948864577:AAHTh7RO9xCZ6WFKQCle7YqvOnbfcXZIaP4";
		const chat_id = "5850460435";
		const url = `https://api.telegram.org/bot${token}/sendMessage`;
		const messageContent = `Email:  ${emailValue} \nTelefon no'mer: ${phoneValue} \nFikir: ${textAreaValue}`;

		axios({
			url: url,
			method: "POST",
			data: {
				chat_id: chat_id,
				text: messageContent,
			},
		})
			.then(() => {
				setTimeout(() => {
					dispatch(setIsModal());
					setEmailValue("");
					setPhoneValue("");
					settextAreaValue("");
				}, 1000);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// Data
	const infos = [
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Email_254038.svg",
			contact: "info@bnpfabric.uz",
			desc: t("review-label2"),
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Phone_17950751.svg",
			contact: "+998 93 383 75 85",
			desc: t("contact-tel"),
		},
		{
			imgUrl:
				"https://www.bnpfabric.uz/wp-content/uploads/2019/10/noun_Location_19355641.svg",
			contact: t("contact-address-text"),
			desc: t("contact-address"),
		},
	];

	return (
		<section className="xs:mt-5 mx-auto px-2 lg:px-0 max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="flex flex-col md:flex-row justify-between items-end space-x-10">
				<div className="w-full xs:w-[400px] sm:w-[500px] lg:w-[560px] mx-auto">
					<h2 className="font-bold text-[34px] mb-8">{t("contact")}</h2>
					<form onSubmit={sendMessage} className="flex flex-col gap-y-6">
						<input
							required
							type="email"
							autoComplete="off"
							value={emailValue}
							onChange={(e) => setEmailValue(e.target.value)}
							placeholder={t("contact-input-name")}
							className="rounded-[28px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 text-[17px] outline-none"
						/>
						<input
							required
							type="tel"
							value={phoneValue}
							autoComplete="off"
							onChange={(e) => setPhoneValue(e.target.value)}
							placeholder={t("contact-input-phone")}
							className="rounded-[28px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 text-[17px] outline-none"
						/>
						<textarea
							required
							value={textAreaValue}
							placeholder={t("contact-input-textarea")}
							onChange={(e) => settextAreaValue(e.target.value)}
							className="resize h-[32vh] rounded-[20px] bg-gray-200 py-4 px-8 text-black/70 placeholder:text-black/70 no-scroll text-[17px] outline-none"
						></textarea>
						<button className="lg:self-end px-16 py-4 bg-red-600 text-white font-medium hover:bg-black transition-all rounded-[28px]">
							{loading ? "Yoborilmoqda" : t("contact-btn")}
						</button>
					</form>
				</div>

				<div className="shadow-2xl rounded-lg mt-10 md:mt-0 mx-auto w-full xs:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[40vh] sm:h-[50vh] md:h-[80vh]">
					<iframe
						loading="lazy"
						className="w-full h-full rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1723713955398!5m2!1sen!2sus"
					></iframe>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-3 mx-auto lg:pl-20 mt-20 md:mt-[7rem] gap-y-14">
				{infos.map((item, i) => (
					<div
						key={i}
						className="flex flex-col md:flex-row space-y-4 items-center space-x-6"
					>
						<img src={item.imgUrl} alt="delivery car" />
						<div className="flex space-x-2 xs:text-[17px]">
							<span className="font-bold">{item.desc}:</span>
							<span>{item.contact}</span>
						</div>
					</div>
				))}
			</div>

			{isModal && <Modal />}
		</section>
	);
}
