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

function App() {
	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden select-none no-scroll">
			<GlobalContextProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/collection" element={<Colletion />} />
					<Route path="/product/:text" element={<ProductDetails />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
				<Network />
			</GlobalContextProvider>
		</section>
	);
}

export default App;
