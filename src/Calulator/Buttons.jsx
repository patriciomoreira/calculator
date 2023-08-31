// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	return (
		<div className="buttons">
			<div onClick={_ => props.clearMemory()} className="button clear">C</div>
			<div onClick={e => props.setOperation(e.target.innerHTML)} className="button operator">÷</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">7</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">8</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">9</div>
			<div onClick={e => props.setOperation(e.target.innerHTML)} className="button operator">*</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">4</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">5</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">6</div>
			<div onClick={e => props.setOperation(e.target.innerHTML)} className="button operator">-</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">1</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">2</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">3</div>
			<div onClick={e => props.setOperation(e.target.innerHTML)} className="button operator">+</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button zero br-left">0</div>
			<div onClick={e => props.addDigit(e.target.innerHTML)} className="button">.</div>
			<div onClick={e => props.setOperation(e.target.innerHTML)} className="button operator br-right">=</div>
		</div>
	);
};
