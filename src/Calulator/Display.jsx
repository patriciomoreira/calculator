const Display = props => {

	const reduceFont = props.reduceFont;
	return <div className={"display".concat(reduceFont ? " reduceFont" : "")}>{props.value}</div>;
}

export default Display;