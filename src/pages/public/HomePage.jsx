import { MainLayout } from "../../components/layouts";
import { SearchBar, RowSelect } from "../../components/pages/HomePage";

const HomePage = () => {
	return (
		<MainLayout
			mainOptions={{
				paddingVertical: false,
			}}
		>
			<div className="flex w-full flex-col">
				<SearchBar />
				<RowSelect
					options={[
						{
							id: 1,
							label: "Sedan",
						},
						{
							id: 2,
							label: "Ok",
						},
					]}
				/>
				<h1>Home Page</h1>
			</div>
		</MainLayout>
	);
};

export default HomePage;
