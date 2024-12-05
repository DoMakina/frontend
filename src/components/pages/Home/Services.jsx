export default function ServicesSection() {
	return (
		<div className="w-full bg-blue-500 px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-col rounded-lg p-6 md:flex-row">
				{/* Left Section (Text) */}
				<div className="mb-12 text-white md:mb-0 md:w-2/3">
					<h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
						All the service we will provide you
					</h2>
					<p className="text-lg opacity-90 md:text-xl">
						Get the car of your dreams with the installments of your
						choice. There are various attractive offers from Moladin
						through our collaboration with various trusted leasing
						partners.
					</p>
				</div>

				{/* Right Section (Service Cards) */}
				<div className="w-full space-y-6 rounded-2xl bg-white p-6 md:w-1/3">
					{/* Buy Car Card */}
					<a href="#" className="block">
						<div>
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-2xl font-semibold text-gray-900">
									Buy Car
								</h3>
								<span className="text-gray-400">
									3.4K cars available
								</span>
							</div>
							<p className="mb-4 text-gray-500">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Dui viverra nisi mauris netus
								vitae natoque dictum scelerisque accumsan.
							</p>
							<div className="flex justify-end">
								<svg
									className="h-6 w-6 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</a>

					{/* Sell Car Card */}
					<a href="#" className="block">
						<div className="border-t pt-6">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-2xl font-semibold text-gray-900">
									Sell Car
								</h3>
								<span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-500">
									Register Now
								</span>
							</div>
							<p className="mb-4 text-gray-500">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Dui viverra nisi mauris netus
								vitae natoque dictum scelerisque accumsan.
							</p>
							<div className="flex justify-end">
								<svg
									className="h-6 w-6 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
