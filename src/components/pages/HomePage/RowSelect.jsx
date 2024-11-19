import { useState } from "react";

const RowSelect = ({ options = [] }) => {
	const [selectedOption, setSelectedOption] = useState(1);
    
	console.log(selectedOption);
	return (
		<div className="flex flex-row space-x-5">
			{selectedOption}
			<button onClick={() => (setSelectedOption(selectedOption+1))}>add</button>
			{options.map((option) => (
				<span key={option.id}>{option.label}</span>
			))}
		</div>
	);
};

export default RowSelect;
