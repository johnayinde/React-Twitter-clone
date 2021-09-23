import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widget from "./components/widget/Widget";

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Feed />
			<Widget />
		</div>
	);
}

export default App;
