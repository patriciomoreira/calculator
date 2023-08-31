import "./MathBackground.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	return (
		<div className="math-background">
			<div className="operation addition">+</div>
			<div className="operation subtraction">-</div>
			<div className="operation multiplication">×</div>
			<div className="operation division">÷</div>
		</div>
	);
};
