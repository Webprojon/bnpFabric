import { useParams } from "react-router-dom";

export default function ProductDetails() {
	const { text } = useParams();

	const formatTextForDisplay = (text: string) => text.replace(/-/g, " ");

	const products = [
		{
			id: 1,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled-2550x1912.jpg",
			text: "Squares",
		},
		{
			id: 2,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-scaled-2550x1912.jpg",
			text: "Ikat",
		},
		{
			id: 3,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled-2550x1912.jpg",
			text: "Circles",
		},
		{
			id: 4,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled-2550x1912.jpg",
			text: "Geometry blue",
		},
		{
			id: 5,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled-2550x1912.jpg",
			text: "Tropical leaves",
		},
		{
			id: 6,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled-2550x1912.jpg",
			text: "Bambi",
		},
		{
			id: 7,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled-2550x1912.jpg",
			text: "Byzantium",
		},
		{
			id: 8,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled-2550x1912.jpg",
			text: "Evening garden",
		},
		{
			id: 9,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled-2550x1912.jpg",
			text: "Feather Marquis",
		},
		{
			id: 10,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled-2550x1912.jpg",
			text: "Lavender roses",
		},
		{
			id: 11,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-50-scaled-2550x1912.jpg",
			text: "Safari",
		},
		{
			id: 12,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-49-scaled-2550x1912.jpg",
			text: "Multicolored amethyst",
		},
		{
			id: 13,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-48-scaled-2550x1912.jpg",
			text: "Stucco ornament",
		},
		{
			id: 14,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-47-scaled-2550x1912.jpg",
			text: "Emerald (AB)",
		},
		{
			id: 15,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled-2550x1912.jpg",
			text: "Malachite box",
		},
		{
			id: 16,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
			text: "Scents of spring",
		},
		{
			id: 17,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled-2550x1912.jpg",
			text: "Autumn leaf fall (AB)",
		},
		{
			id: 18,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled-2550x1912.jpg",
			text: "Blue Breeze (AB)",
		},
		{
			id: 19,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled-2550x1912.jpg",
			text: "Water Blue (AB)",
		},
		{
			id: 20,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled-2550x1912.jpg",
			text: "Plaid",
		},
		{
			id: 21,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled-2550x1912.jpg",
			text: "Vintage style",
		},
		{
			id: 22,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-scaled-2550x1912.jpg",
			text: "fluttering dandelion",
		},
		{
			id: 23,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled-2550x1912.jpg",
			text: "French Riviera",
		},
		{
			id: 24,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21-1014x760.jpg",
			text: "Dolly the Sheep",
		},
		{
			id: 25,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled-2550x1912.jpg",
			text: "Alpine herbs",
		},
		{
			id: 26,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled-2550x1912.jpg",
			text: "Inspirational",
		},
		{
			id: 27,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled-2550x1912.jpg",
			text: "Green lotus",
		},
		{
			id: 28,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled-2550x1912.jpg",
			text: "Mountain cornflower",
		},
		{
			id: 29,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled-2550x1912.jpg",
			text: "Sakura branch",
		},
		{
			id: 30,
			src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled-2550x1912.jpg",
			text: "Olive branch",
		},
	];

	const displayText = formatTextForDisplay(text || "");

	const product = products.find(
		(p) => p.text.toLowerCase() === displayText.toLowerCase(),
	);

	if (!product) {
		return (
			<div className="font-bold text-[40px] text-center mt-20">
				Bizda bunday tavar yo'q 🤷‍♂️
			</div>
		);
	}

	return (
		<div className="text-center">
			<h1 className="text-2xl font-bold mb-4">{product.text}</h1>
			<img src={product.src} alt={product.text} className="mx-auto" />
		</div>
	);
}
