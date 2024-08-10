import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Colletion from "./pages/Collection/Colletion";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Network from "./components/Network";

function App() {
	return (
		<section className="max-w-[1540px] mx-auto overflow-x-hidden select-none">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/collection" element={<Colletion />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Network />
		</section>
	);
}

export default App;
