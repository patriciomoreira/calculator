import "./App.css";
import Calculator from "./Calculator/Calculator";
import MathBackground from "./style/MathBackground";

function App() {
	return (
		<div className="App">
			<MathBackground />
			<h2>CALCULATOR .js</h2>
			<Calculator></Calculator>
		</div>
	);
}

export default App;
