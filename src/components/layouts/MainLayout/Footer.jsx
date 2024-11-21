const Footer = () => {
	return (
		<footer className="flex w-full items-center justify-center bg-theme-text py-5 text-sm text-white">
			<p>
				&copy; {new Date().getFullYear()} Do Makina?. All rights
				reserved.
			</p>
		</footer>
	);
};

export default Footer;
