function Footer() {
	const currentYear = new Date().getFullYear();
  
	return (
	  <footer>
		{/* Footer Main Content */}
		<div className="bg-black text-white text-center p-2  inset-x-0 ">
		  <div className="flex flex-row justify-around">
			<div>
			  <img src="/path/to/logo.png" alt="Logo" />
			</div>
			<div>
			  <h3 className="text-lg font-bold">SHOWROOM</h3>
			  <p>
				<a href="/new-cars" className="text-white hover:text-gray-400">
				  New cars for sale
				</a>
			  </p>
			  <p>
				<a href="/used-cars" className="text-white hover:text-gray-400">
				  Used cars for sale
				</a>
			  </p>
			  <p>
				<a
				  href="/sell-your-car"
				  className="text-white hover:text-gray-400"
				>
				  Sell your car
				</a>
			  </p>
			  <p>
				<a
				  href="/dealer-login"
				  className="text-white hover:text-gray-400"
				>
				  Log In as a Dealer
				</a>
			  </p>
			</div>
			<div>
			  <h3 className="text-lg font-bold">ABOUT DOMAKINA</h3>
			  <p>
				<a href="/about" className="text-white hover:text-gray-400">
				  About us
				</a>
			  </p>
			  <p>
				<a
				  href="/how-it-works"
				  className="text-white hover:text-gray-400"
				>
				  How it works
				</a>
			  </p>
			  <p>
				<a href="/careers" className="text-white hover:text-gray-400">
				  Careers
				</a>
			  </p>
			</div>
			<div>
			  <h3 className="text-lg font-bold">HELP CENTER</h3>
			  <p>
				<a href="/faqs" className="text-white hover:text-gray-400">
				  FAQs
				</a>
			  </p>
			  <p>
				<a href="/contact-us" className="text-white hover:text-gray-400">
				  Contact Us
				</a>
			  </p>
			  <p>
				<a
				  href="/office-location"
				  className="text-white hover:text-gray-400"
				>
				  Office location
				</a>
			  </p>
			  <p>
				<a
				  href="/privacy-policy"
				  className="text-white hover:text-gray-400"
				>
				  Privacy & Policy
				</a>
			  </p>
			  <p>
				<a
				  href="/terms-conditions"
				  className="text-white hover:text-gray-400"
				>
				  Terms & Conditions
				</a>
			  </p>
			</div>
		  </div>
		</div>
  
		{/* Footer Bottom */}
		<div className="bg-black text-white text-center p-2 sticky left-0 bottom-0 w-full border-t border-white">
		  <div>
		  <p>© {currentYear} DoMakina. All rights reserved</p>        </div>
		</div>
	  </footer>
	);
  }
  
  export default Footer;
  