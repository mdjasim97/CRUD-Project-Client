import { Helmet } from "react-helmet";
import { Create } from "../../ApiServices/ApiServices";

const CreatePage = () => {
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ProductName = formData.get("name");
    const ProductCode = formData.get("code");
    const Img = formData.get("link");
    const UnitPrice = formData.get("unitPrice");
    const Qty = formData.get("qty");
    const TotalPrice = formData.get("totalPrice");

    const productInfo = {
      ProductName,
      ProductCode,
      Img,
      UnitPrice,
      Qty,
      TotalPrice,
    };

    // console.log(productInfo);
    Create(productInfo);
  };

  return (
    <div>
      <Helmet>
        <title>Create Page || CRUD Project</title>
      </Helmet>

      <div className="bg-base-200 w-full my-10">
        <form
          onSubmit={handleCreateProduct}
          className="card-body grid grid-cols-2 m-5"
        >
          {/* product name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name.."
              className="input input-bordered"
              required
            />
          </div>

          {/* product code  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Code</span>
            </label>
            <input
              type="text"
              name="code"
              placeholder="Enter product code"
              className="input input-bordered"
              required
            />
          </div>

          {/* product img  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image Link</span>
            </label>
            <input
              type="text"
              name="link"
              placeholder="Enter product image link"
              className="input input-bordered"
              required
            />
          </div>

          {/* Product Unit Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Unit Price</span>
            </label>
            <input
              type="number"
              name="unitPrice"
              placeholder="Enter product unit price"
              className="input input-bordered"
              required
            />
          </div>

          {/* Product Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Qty</span>
            </label>
            <input
              type="number"
              name="qty"
              placeholder="Enter product quantity"
              className="input input-bordered"
              required
            />
          </div>

          {/* Product total Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product total price</span>
            </label>
            <input
              type="number"
              name="totalPrice"
              placeholder="Enter product unit price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control grid col-span-2 mt-6">
            <button type="submit" className="btn bg-red-600 font-bold text-white text-xl">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
