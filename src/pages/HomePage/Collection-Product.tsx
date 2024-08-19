import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useTranslation } from "react-i18next";
// Winter Images
import squares from "../../assets/images/winter-products/squares.jpg";
import ikat from "../../assets/images/winter-products/ikat.jpg";
import circles from "../../assets/images/winter-products/circles.jpg";
import geometryBlue from "../../assets/images/winter-products/geometryBlue.jpg";
import tropicalLeaves from "../../assets/images/winter-products/tropicalLeaves.jpg";
import bambi from "../../assets/images/winter-products/bambi.jpg";
import byzantium from "../../assets/images/winter-products/byzantium.jpg";
import eveningGarden from "../../assets/images/winter-products/eveningGarden.jpg";
import featherMarquis from "../../assets/images/winter-products/featherMarquis.jpg";
import lavenderRoses from "../../assets/images/winter-products/lavenderRoses.jpg";
// Autumn Images
import safari from "../../assets/images/autumn-products/safari.jpg";
import multicoloredAmethyst from "../../assets/images/autumn-products/multicoloredAmethyst.jpg";
import stuccoOrnament from "../../assets/images/autumn-products/stuccoOrnament.jpg";
import emerald from "../../assets/images/autumn-products/emerald.jpg";
import malachiteBox from "../../assets/images/autumn-products/malachiteBox.jpg";
import scentsSpring from "../../assets/images/autumn-products/scentsSpring.jpg";
import autumnLeafFall from "../../assets/images/autumn-products/autumnLeaf.jpg";
import blueBreeze from "../../assets/images/autumn-products/blueBreeze.jpg";
import waterBlue from "../../assets/images/autumn-products/waterBlue.jpg";
import plaid from "../../assets/images/autumn-products/plaid.jpg";
// Summer Images
import vintageStyle from "../../assets/images/summer-products/vintageStyle.jpg";
import flutteringDandelion from "../../assets/images/summer-products/flutteringDandelion.jpg";
import frenchRiviera from "../../assets/images/summer-products/frenchRiviera.jpg";
import dollySheep from "../../assets/images/summer-products/dollySheep.jpg";
import alpineHerbs from "../../assets/images/summer-products/alpineHerbs.jpg";
import inspirational from "../../assets/images/summer-products/inspirational.jpg";
import greenLotus from "../../assets/images/summer-products/greeLotus.jpg";
import mountainCornflower from "../../assets/images/summer-products/mountainCornflower.jpg";
import sakuraBranch from "../../assets/images/summer-products/sakuraBranch.jpg";
import oliveBranch from "../../assets/images/summer-products/oliveBranch.jpg";

export default function ProductDetails() {
	const [isActivePage, setIsActivePage] = useState(false);
	const { text } = useParams();
	const { t } = useTranslation();

	// Data
	const products = [
		{
			id: 1,
			src: squares,
			text: t("productcard-1.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 1,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
					text: t("productcard-1.similars.text1"),
				},
				{
					id: 2,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
					text: t("productcard-1.similars.text2"),
				},
				{
					id: 3,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
					text: t("productcard-1.similars.text3"),
				},
				{
					id: 4,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
					text: t("productcard-1.similars.text4"),
				},
			],
		},
		{
			id: 2,
			src: ikat,
			text: t("productcard-2.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 5,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
					text: t("productcard-2.similars.text1"),
				},
				{
					id: 6,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
					text: t("productcard-2.similars.text2"),
				},
				{
					id: 7,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
					text: t("productcard-2.similars.text3"),
				},
				{
					id: 8,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
					text: t("productcard-2.similars.text4"),
				},
			],
		},
		{
			id: 3,
			src: circles,
			text: t("productcard-3.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 9,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
					text: t("productcard-3.similars.text1"),
				},
				{
					id: 10,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
					text: t("productcard-3.similars.text2"),
				},
				{
					id: 11,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
					text: t("productcard-3.similars.text3"),
				},
				{
					id: 12,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
					text: t("productcard-3.similars.text4"),
				},
			],
		},
		{
			id: 4,
			src: geometryBlue,
			text: t("productcard-4.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
					text: t("productcard-4.similars.text1"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("productcard-4.similars.text2"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
					text: t("productcard-4.similars.text3"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
					text: t("productcard-4.similars.text4"),
				},
			],
		},
		{
			id: 5,
			src: tropicalLeaves,
			text: t("productcard-5.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 17,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-50-scaled.jpg",
					text: t("productcard-5.similars.text1"),
				},
				{
					id: 18,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-49-scaled.jpg",
					text: t("productcard-5.similars.text2"),
				},
				{
					id: 19,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-48-scaled.jpg",
					text: t("productcard-5.similars.text3"),
				},
				{
					id: 20,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-47-scaled.jpg",
					text: t("productcard-5.similars.text4"),
				},
			],
		},
		{
			id: 6,
			src: bambi,
			text: t("productcard-6.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
					text: t("productcard-6.similars.text1"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
					text: t("productcard-6.similars.text2"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
					text: t("productcard-6.similars.text3"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
					text: t("productcard-6.similars.text4"),
				},
			],
		},
		{
			id: 7,
			src: byzantium,
			text: t("productcard-7.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-7.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-7.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-7.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-7.similars.text4"),
				},
			],
		},
		{
			id: 8,
			src: eveningGarden,
			text: t("productcard-8.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 29,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-768x768.jpg",
					text: t("productcard-8.similars.text1"),
				},
				{
					id: 30,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled.jpg",
					text: t("productcard-8.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-8.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-8.similars.text4"),
				},
			],
		},
		{
			id: 9,
			src: featherMarquis,
			text: t("productcard-9.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 1,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
					text: t("productcard-9.similars.text1"),
				},
				{
					id: 2,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
					text: t("productcard-9.similars.text2"),
				},
				{
					id: 3,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
					text: t("productcard-9.similars.text3"),
				},
				{
					id: 4,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
					text: t("productcard-9.similars.text4"),
				},
			],
		},
		{
			id: 10,
			src: lavenderRoses,
			text: t("productcard-10.text"),
			category: t("firstCollectionHeading"),
			similars: [
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
					text: t("productcard-10.similars.text1"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("productcard-10.similars.text2"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
					text: t("productcard-10.similars.text3"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
					text: t("productcard-10.similars.text4"),
				},
			],
		},
		{
			id: 11,
			src: safari,
			text: t("productcard-11.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 1,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
					text: t("productcard-11.similars.text1"),
				},
				{
					id: 2,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
					text: t("productcard-11.similars.text2"),
				},
				{
					id: 3,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
					text: t("productcard-11.similars.text3"),
				},
				{
					id: 4,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
					text: t("productcard-11.similars.text4"),
				},
			],
		},
		{
			id: 12,
			src: multicoloredAmethyst,
			text: t("productcard-12.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
					text: t("productcard-12.similars.text1"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("productcard-12.similars.text2"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
					text: t("productcard-12.similars.text3"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
					text: t("productcard-12.similars.text4"),
				},
			],
		},
		{
			id: 13,
			src: stuccoOrnament,
			text: t("productcard-13.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
					text: t("productcard-13.similars.text1"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
					text: t("productcard-13.similars.text2"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
					text: t("productcard-13.similars.text3"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
					text: t("productcard-13.similars.text4"),
				},
			],
		},
		{
			id: 14,
			src: emerald,
			text: t("productcard-14.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 1,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-15-scaled.jpg",
					text: t("productcard-14.similars.text1"),
				},
				{
					id: 2,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-16-scaled.jpg",
					text: t("productcard-14.similars.text2"),
				},
				{
					id: 3,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-17-scaled.jpg",
					text: t("productcard-14.similars.text3"),
				},
				{
					id: 4,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-18-scaled.jpg",
					text: t("productcard-14.similars.text4"),
				},
			],
		},
		{
			id: 15,
			src: malachiteBox,
			text: t("productcard-15.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
					text: t("productcard-15.similars.text1"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("productcard-15.similars.text2"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
					text: t("productcard-15.similars.text3"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
					text: t("productcard-15.similars.text4"),
				},
			],
		},
		{
			id: 16,
			src: scentsSpring,
			text: t("productcard-16.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
					text: t("productcard-16.similars.text1"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
					text: t("productcard-16.similars.text2"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
					text: t("productcard-16.similars.text3"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
					text: t("productcard-16.similars.text4"),
				},
			],
		},
		{
			id: 17,
			src: autumnLeafFall,
			text: t("productcard-17.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-17.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-17.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-17.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-17.similars.text4"),
				},
			],
		},
		{
			id: 18,
			src: blueBreeze,
			text: t("productcard-18.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 5,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
					text: t("productcard-18.similars.text1"),
				},
				{
					id: 6,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
					text: t("productcard-18.similars.text2"),
				},
				{
					id: 7,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
					text: t("productcard-18.similars.text3"),
				},
				{
					id: 8,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
					text: t("productcard-18.similars.text4"),
				},
			],
		},
		{
			id: 19,
			src: waterBlue,
			text: t("productcard-19.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 5,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
					text: t("productcard-19.similars.text1"),
				},
				{
					id: 6,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
					text: t("productcard-19.similars.text2"),
				},
				{
					id: 7,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
					text: t("productcard-19.similars.text3"),
				},
				{
					id: 8,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
					text: t("productcard-19.similars.text4"),
				},
			],
		},
		{
			id: 20,
			src: plaid,
			text: t("productcard-20.text"),
			category: t("secondCollectionHeading"),
			similars: [
				{
					id: 9,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
					text: t("productcard-20.similars.text1"),
				},
				{
					id: 10,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
					text: t("productcard-20.similars.text2"),
				},
				{
					id: 11,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
					text: t("productcard-20.similars.text3"),
				},
				{
					id: 12,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
					text: t("productcard-20.similars.text4"),
				},
			],
		},
		{
			id: 21,
			src: vintageStyle,
			text: t("productcard-21.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-21.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-21.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-21.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-21.similars.text4"),
				},
			],
		},
		{
			id: 22,
			src: flutteringDandelion,
			text: t("productcard-22.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
					text: t("productcard-22.similars.text1"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
					text: t("productcard-22.similars.text2"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
					text: t("productcard-22.similars.text3"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
					text: t("productcard-22.similars.text4"),
				},
			],
		},
		{
			id: 23,
			src: frenchRiviera,
			text: t("productcard-23.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 5,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-19-scaled.jpg",
					text: t("productcard-23.similars.text1"),
				},
				{
					id: 6,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-20-scaled.jpg",
					text: t("productcard-23.similars.text2"),
				},
				{
					id: 7,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-21.jpg",
					text: t("productcard-23.similars.text3"),
				},
				{
					id: 8,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-22-scaled.jpg",
					text: t("productcard-23.similars.text4"),
				},
			],
		},
		{
			id: 24,
			src: dollySheep,
			text: t("productcard-24.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 13,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-46-scaled.jpg",
					text: t("productcard-24.similars.text1"),
				},
				{
					id: 14,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-45-scaled-2550x1912.jpg",
					text: t("productcard-24.similars.text2"),
				},
				{
					id: 15,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-44-scaled.jpg",
					text: t("productcard-24.similars.text3"),
				},
				{
					id: 16,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-43-scaled.jpg",
					text: t("productcard-24.similars.text4"),
				},
			],
		},
		{
			id: 25,
			src: alpineHerbs,
			text: t("productcard-25.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 9,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
					text: t("productcard-25.similars.text1"),
				},
				{
					id: 10,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
					text: t("productcard-25.similars.text2"),
				},
				{
					id: 11,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
					text: t("productcard-25.similars.text3"),
				},
				{
					id: 12,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
					text: t("productcard-25.similars.text4"),
				},
			],
		},
		{
			id: 26,
			src: inspirational,
			text: t("productcard-26.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-26.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-26.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-26.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-26.similars.text4"),
				},
			],
		},
		{
			id: 27,
			src: greenLotus,
			text: t("productcard-27.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-27.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-27.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-27.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-27.similars.text4"),
				},
			],
		},
		{
			id: 28,
			src: mountainCornflower,
			text: t("productcard-28.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 21,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled.jpg",
					text: t("productcard-28.similars.text1"),
				},
				{
					id: 22,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled.jpg",
					text: t("productcard-28.similars.text2"),
				},
				{
					id: 23,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-65-scaled.jpg",
					text: t("productcard-28.similars.text3"),
				},
				{
					id: 24,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled.jpg",
					text: t("productcard-28.similars.text4"),
				},
			],
		},
		{
			id: 29,
			src: sakuraBranch,
			text: t("productcard-29.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 9,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-42-scaled.jpg",
					text: t("productcard-29.similars.text1"),
				},
				{
					id: 10,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-41-scaled.jpg",
					text: t("productcard-29.similars.text2"),
				},
				{
					id: 11,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-24-scaled.jpg",
					text: t("productcard-29.similars.text3"),
				},
				{
					id: 12,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-23-768x768.jpg",
					text: t("productcard-29.similars.text4"),
				},
			],
		},
		{
			id: 30,
			src: oliveBranch,
			text: t("productcard-30.text"),
			category: t("thirdCollectionHeading"),
			similars: [
				{
					id: 25,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled.jpg",
					text: t("productcard-30.similars.text1"),
				},
				{
					id: 26,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled.jpg",
					text: t("productcard-30.similars.text2"),
				},
				{
					id: 27,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled.jpg",
					text: t("productcard-30.similars.text3"),
				},
				{
					id: 28,
					src: "https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled.jpg",
					text: t("productcard-30.similars.text4"),
				},
			],
		},
	];

	const formatTextForDisplay = (text: string) => text.replace(/-/g, " ");

	const displayText = formatTextForDisplay(text || "");

	const product = products.find(
		(p) => p.text.toLowerCase() === displayText.toLowerCase(),
	);

	const defineActivePage = () => {
		setIsActivePage(!isActivePage);
	};

	const tabStyles = (isActive: boolean) =>
		`pt-5 text-black/${isActive ? "60" : "80 border-t-[.2rem] border-red-500"}`;

	const formatTextForUrl = (text: string) =>
		text.toLowerCase().replace(/\s+/g, "-");

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	if (!product) {
		return (
			<div className="font-bold text-[40px] text-center mt-20">
				{t("notFoundProduct")} 🤷‍♂️
			</div>
		);
	}

	return (
		<section className="mx-auto px-2 lg:px-0 max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
			<div className="xs:mt-5 flex flex-col md:flex-row justify-between items-center">
				<InnerImageZoom
					src={product.src}
					zoomSrc={product.src}
					className="rounded-[20px] md:w-[520px] md:h-[80vh] lg:w-[720px] lg:h-[85%]"
					zoomType="hover"
					hideHint={true}
				/>

				<div className="tracking-wide">
					<h2 className="font-bold mt-8 text-[28px] md:text-[40px]">
						{product.text}
					</h2>
					<table className="lg:w-[460px] my-4 border border-black/30 text-black/70">
						<tbody className="text-[15px] xs:text-[17px]">
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									{t("material")}:
								</td>
								<td className="px-6 py-4">100% {t("material-text")}</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py- border-r border-black/30">
									{t("pillowcase")}:
								</td>
								<td className="px-6 py-4">50x70 cm (2 {t("piece")})</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									{t("bed-sheet")}:
								</td>
								<td className="px-6 py-4">260×280 cm (1 {t("piece")})</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									{t("duvet-cover")}:
								</td>
								<td className="px-6 py-4">160x220 cm (2 {t("piece")})</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									{t("size")}:
								</td>
								<td className="px-6 py-4">{t("special-size")}</td>
							</tr>
							<tr className="border-b border-black/30">
								<td className="px-6 py-4 border-r border-black/30">
									{t("manufacturer")}:
								</td>
								<td className="px-6 py-4">{t("collection-p-2")}</td>
							</tr>
							<tr>
								<td className="px-6 py-5 border-r border-black/30"></td>
								<td className="px-6 py-5"></td>
							</tr>
						</tbody>
					</table>
					<span className="text-[17px] text-black/70">
						{t("category")}:{" "}
						<Link to="/collection" className="text-red-600">
							{product.category}
						</Link>
					</span>
				</div>
			</div>

			<div className="border-t border-black/40 my-[3rem] md:my-[6rem]">
				<div
					className={`flex justify-center items-center space-x-10 md:space-x-20 md:text-[18px] font-bold cursor-pointer 
						${isActivePage ? "text-black" : "text-black/60"}`}
				>
					<span onClick={defineActivePage} className={tabStyles(isActivePage)}>
						{t("description")}
					</span>
					<span onClick={defineActivePage} className={tabStyles(!isActivePage)}>
						{t("reviews")} (0)
					</span>
				</div>

				{isActivePage ? (
					<div className="mt-8 md:mt-20 flex flex-col mx-auto max-w-[1020px] tracking-wide">
						<div>
							<h2 className="font-bold text-[20px] md:text-[25px]">
								{t("reviews")}
							</h2>
							<p className="py-5 md:py-10 text-[17px] text-black/70">
								{t("reviews-p")}
							</p>
							<p className="font-bold text-[18px] md:text-[24px]">
								{t("reviews-p2")} “{product.text}”
							</p>
							<p className="text-black/85 tracking-wider mt-2 mb-6 md:mb-10">
								{t("reviews-p3")}
							</p>
						</div>

						<form className="flex flex-col space-y-7">
							<div className="flex flex-col sm:flex-row justify-between">
								<div className="flex flex-col">
									<label
										htmlFor="name"
										className="text-[18px] mb-3 text-black/70"
									>
										{t("review-label1")} *
									</label>
									<input
										type="text"
										required
										id="name"
										autoComplete="off"
										className="bg-gray-200 rounded-[22px] md:rounded-[27px] sm:w-[310px] md:w-[470px] py-4 px-6 outline-none"
									/>
								</div>
								<div className="flex flex-col mt-4 sm:mt-0">
									<label
										htmlFor="email"
										className="text-[18px] mb-3 text-black/70"
									>
										{t("review-label2")} *
									</label>
									<input
										type="email"
										required
										id="email"
										autoComplete="off"
										className="bg-gray-200 rounded-[22px] md:rounded-[27px] sm:w-[310px] md:w-[470px] py-4 px-6 outline-none"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<label
									htmlFor="review"
									className="text-[18px] mb-3 text-black/70"
								>
									{t("review-label3")} *
								</label>
								<textarea
									id="review"
									required
									autoComplete="off"
									className="bg-gray-200 resize rounded-[20px] h-[30vh] md:h-[40vh] p-6 outline-none no-scroll"
								></textarea>
							</div>

							<button className="py-3 self-end px-12 md:px-16 rounded-[25px] text-[17px] bg-red-600 hover:bg-red-500 transition-all text-white font-medium">
								{t("review-btn")}
							</button>
						</form>
					</div>
				) : (
					<div className="mt-8 md:mt-20 flex flex-col space-y-3 mdspace-y-6 mx-auto max-w-[1020px]">
						<h2 className="font-bold text-[20px] md:text-[25px]">
							{t("description")}
						</h2>
						<p className="font-bold text-[22px] md:text-[28px] text-black/80">
							{t("desc-p")} {product.text}
						</p>
						<p className="text-black/65">{t("desc-p2")}</p>
					</div>
				)}
			</div>

			<div className="flex flex-col items-center mx-auto max-w-[450px] xs:max-w-[600px] sm:max-w-[800px] md:max-w-[1460px]">
				<h2 className="text-[28px] md:text-[38px] font-bold">
					{t("similar-text")}
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-x-14 mt-4 md:mt-16">
					{product.similars.map((similar) => (
						<Link
							key={similar.id}
							className="group"
							onClick={scrollTop}
							to={`/product/${formatTextForUrl(similar.text)}`}
						>
							<img
								src={similar.src}
								alt={similar.text}
								className="rounded-[15px] w-[320px] hover:-translate-y-1 transition-all cursor-pointer"
							/>
							<p className="mt-4 xs:text-[19px] tracking-wider text-sky-600 font-bold transition-all group-hover:text-red-600 group-hover:font-bold">
								{similar.text}
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
