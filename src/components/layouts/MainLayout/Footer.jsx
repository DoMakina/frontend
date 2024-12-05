export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#0B0F12] px-6 py-12 text-white">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Logo and Showroom Section */}

					<div>
						<h3 className="mb-4 font-medium text-gray-400">
							SHOWROOM
						</h3>
						<ul className="space-y-3">
							<li>
								<a href="#" className="hover:text-theme-blue">
									Rent car
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									New cars for sale
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									User cars for sale
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Sell your car
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Login as a Dealer
								</a>
							</li>
						</ul>
					</div>

					{/* About Section */}
					<div>
						<h3 className="mb-4 font-medium text-gray-400">
							ABOUT AUTO.HUNT
						</h3>
						<ul className="space-y-3">
							<li>
								<a href="#" className="hover:text-theme-blue">
									About Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									How it works
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Testimony
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Career
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									DoMakina Academy
								</a>
							</li>
						</ul>
					</div>

					{/* Help Center Section */}
					<div>
						<h3 className="mb-4 font-medium text-gray-400">
							HELP CENTER
						</h3>
						<ul className="space-y-3">
							<li>
								<a href="#" className="hover:text-theme-blue">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Office Location
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Privacy & Policy
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-theme-blue">
									Term & Conditions
								</a>
							</li>
						</ul>
					</div>

					{/* Newsletter Section */}
					<div>
						<h3 className="mb-4 font-medium text-gray-400">
							SUBSCRIBE TO OUR NEWSLETTER
						</h3>
						<p className="mb-4 text-sm">
							Get the latest discounts, promotions & exclusive
							benefits sent straight to your email.
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Type your email"
								className="flex-1 rounded-lg bg-white px-4 py-2 text-black"
							/>
							<button className="rounded-lg bg-blue-500 px-6 py-2 transition-colors hover:bg-blue-600">
								Send
							</button>
						</div>
					</div>
				</div>
				{/* Copyright */}
				<div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
					©{currentYear} All rights reserved by DoMakina
				</div>
			</div>
		</footer>
	);
}
