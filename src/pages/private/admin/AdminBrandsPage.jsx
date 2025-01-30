import { MainLayout } from "../../../components/layouts";
import BrandTable from "../../../components/pages/Admin/BrandTable";
import { useNavigate } from "react-router-dom";
import { deleteBrand } from "../../../api/admin";
import { useApi } from "../../../hooks";
import { useState } from "react";

const AdminBrandsPage = () => {
	const navigate = useNavigate();
	const { handleApiCall: deleteBrandApiCall } = useApi(deleteBrand);

	const [brands, setBrands] = useState([
		{
			id: 1,
			name: "Toyota",
			imageUrl:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FToyota-Symbol.png&f=1&nofb=1&ipt=2c5f771d7b7e6b7fe558dc1df30b902105056322658b37f1740ceb6023ba833f&ipo=images",
		},
		{
			id: 2,
			name: "Honda",
			imageUrl:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F03%2FHonda-Emblem.png&f=1&nofb=1&ipt=3a11625b819b96374790efce3d8cf012569431cb12da6119386ae282ccadf34b&ipo=images",
		},
		{
			id: 3,
			name: "Ford",
			imageUrl:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistcarbrands.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fford-new-logo.jpg&f=1&nofb=1&ipt=0137e657e9de795fcaf3773e0d836ab37a70f481939acb462a3def9a41cdd4a7&ipo=images",
		},
	]);

	const handleEdit = (id) => {
		navigate(`/admin/brands/edit/${id}`);
	};

	const handleDelete = (id) => {
		deleteBrandApiCall({ id }).then((data) => {
			if (data) {
				setBrands((prev) => prev.filter((brand) => brand.id !== id));
			}
		});
	};

	return (
		<MainLayout mainOptions={{ paddingVertical: false }}>
			<div className="container mx-auto px-4 py-8">
				<h1 className="mb-4 text-2xl font-bold">Car Brands</h1>
				<BrandTable
					brands={brands}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
			</div>
		</MainLayout>
	);
};

export default AdminBrandsPage;
