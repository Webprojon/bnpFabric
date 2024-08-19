import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Colletion from "./pages/CollectionPage/Colletion";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Network from "./components/Network";
import { GlobalContextProvider } from "./context/global-context";
import ProductDetails from "./pages/HomePage/Collection-Product";
import Footer from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFoundPage/NotFound";

function App() {
	const { t } = useTranslation();

	return (
		//select-none
		<section className="max-w-[1540px] mx-auto overflow-x-hidden no-scroll">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={t("linkAboutUrl")} element={<About />} />
					<Route path="/shop" element={<Colletion />}>
						<Route path="winter-collection" />
						<Route path="summer-collection" />
						<Route path="autumn-collection" />
					</Route>
					<Route path="/product/:text" element={<ProductDetails />} />
					<Route path={t("linkContactUrl")} element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
				<Network />
				<Toaster position="top-right" />
			</GlobalContextProvider>
		</section>
	);
}

export default App;
