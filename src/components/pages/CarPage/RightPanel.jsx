function RightPanel(props) {
	return (
		<div className="rounded-lg bg-gray-50 p-4 md:col-span-3">
			<h2 className="mb-4 text-2xl font-bold">{props.carDetails.name}</h2>

			<p className="mb-4 text-gray-600">
				{props.carDetails.description}
			</p>

			<div className="mb-6">
				<p className="mb-2 font-bold">{props.carDetails.price}</p>
				<p className="font-semibold text-emerald-500">
					{props.carDetails.brand}
				</p>
                <p className="font-semibold text-emerald-500">
					{props.carDetails.model}
				</p>
                <p className="font-semibold text-emerald-500">
					{props.carDetails.year}
				</p>
                
			</div>

			<div className="mb-6 space-y-4">
				<h3 className="text-xl font-bold">Contact owner</h3>
				<div className="flex items-center justify-between">
					<span>Phone number:</span>
					<span className="font-bold">{props.carDetails.contact}</span>
				</div>
				
			</div>

		
		</div>
	);
}

export default RightPanel;
