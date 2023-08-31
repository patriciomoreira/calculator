import { Component } from "react";
import "./Calculator.css";
import Display from "./Display";
import Buttons from "./Buttons";

const initialState = {
	displayValue: '0',
	clearDisplay: false,
	operation: null,
	values: [0, 0],
	current: 0,
	reduceFont: false
}

export default class Calculator extends Component {

	state = {...initialState };

	constructor(props) {
		super(props);

		this.clearMemory = this.clearMemory.bind(this);
		this.setOperation = this.setOperation.bind(this);
		this.addDigit = this.addDigit.bind(this);
	}

	clearMemory(){
		this.setState({...initialState});
	}

	setOperation(operation){

		if(this.state.current === 0) {
			
			this.setState({operation, current: 1, clearDisplay: true});
			
		}else {
			const equals = operation === '=';
			const currentOperation = this.state.operation;

			const values = [...this.state.values];

			console.log(currentOperation);
			switch (currentOperation) {
				
				case '+':
					values[0] = values[0] + values[1];
					break;

				case '-':
					values[0] = values[0] - values[1];
					break;

				case '*':
					values[0] = values[0] * values[1];
					break;

				case '÷':
					values[0] = values[0] / values[1];
					break;

				default:
					values[0] = this.state.values[0];
					break;
			}

			values[1] = 0;

			this.setState({
				displayValue: values[0],
				operation: equals ? null : operation,
				current: equals ? 0 : 1,
				clearDisplay: !equals,
				values
			})

			this.reduceFont();
		}
		
	}

	addDigit(digit){
		
		if(digit === '.' && this.state.displayValue.toString().includes('.')){
			return
		}

		const clearDisplay = this.state.displayValue === '0'
			|| this.state.clearDisplay;
		const currentValue = clearDisplay ? '' : this.state.displayValue;
		const displayValue = currentValue + digit;

		this.setState({displayValue, clearDisplay : false});

		if(digit !== '.'){
			const i = this.state.current;
			const newValue = parseFloat(displayValue);
			const values = [...this.state.values];
			values[i] = newValue;
			this.setState({values});
		}

		this.reduceFont();
		
	}

	reduceFont(){

		const values = [...this.state.values];
		
		if(values[0].toString().length > 9) {
			this.setState({reduceFont: true})
		}
		else{
			this.setState({reduceFont: false})
		}
	}

	render() {
		return (
			<div className="calculator">
				<Display reduceFont={this.state.reduceFont} value={this.state.displayValue}/>
				<Buttons clearMemory={this.clearMemory} addDigit={this.addDigit} setOperation={this.setOperation}/>
			</div>
		);
	}
}
