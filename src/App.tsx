import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
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

	const location = useLocation();
	const pathname = location.pathname;
	const homeAccess = pathname === "/";
	const aboutAccess = pathname === t("linkAboutUrl");
	const productAccess = pathname === "/product/:text";
	const contactAccess = pathname === t("linkContactUrl");
	const collectionAccess = pathname === "/shop";
	const springAccess = pathname === "/shop/spring-collection";
	const summerAccess = pathname === "/shop/summer-collection";
	const autumnAccess = pathname === "/shop/autumn-collection";
	const winterAccess = pathname === "/shop/winter-collection";

	const allAccess =
		homeAccess ||
		aboutAccess ||
		productAccess ||
		contactAccess ||
		collectionAccess ||
		springAccess ||
		summerAccess ||
		autumnAccess ||
		winterAccess;

	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden no-scroll">
			<GlobalContextProvider>
				{allAccess && <Header />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path={t("linkAboutUrl")} element={<About />} />
					<Route path="/shop" element={<Colletion />}>
						<Route path="spring-collection" />
						<Route path="winter-collection" />
						<Route path="summer-collection" />
						<Route path="autumn-collection" />
					</Route>
					<Route path="/product/:text" element={<ProductDetails />} />
					<Route path={t("linkContactUrl")} element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				{allAccess && <Footer />}
				<Network />
				<Toaster position="top-right" />
			</GlobalContextProvider>
		</section>
	);
}

export default App;
