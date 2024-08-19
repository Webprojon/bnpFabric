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
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<section className="max-w-[1540px] mx-auto select-none overflow-x-hidden no-scroll">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shop" element={<Colletion />}>
						<Route path="/shop/:category" />
						<Route path="/shop/:category" />
						<Route path="/shop/:category" />
						<Route path="/shop/:category" />
					</Route>
					<Route path="/product/:text" element={<ProductDetails />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
				<Network />
				<Toaster position="top-right" />
			</GlobalContextProvider>
		</section>
	);
}

export default App;
