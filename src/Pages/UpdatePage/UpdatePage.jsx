import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Update } from "../../ApiServices/ApiServices";

const UpdatePage = () => {

  const loaderData = useLoaderData()
  const {message} = loaderData
  console.log(message);
  // console.log(loaderData);

  const handleUpdateProduct = (e) => {
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
  Update(message['_id'], productInfo);
  };

  return (
    <div>
      <Helmet>
        <title>Update Page || CRUD Project</title>
      </Helmet>
      <div className="bg-base-200 w-full">
        <form
          onSubmit={handleUpdateProduct}
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
              defaultValue={message.ProductName}
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
              defaultValue={message.ProductCode}
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
              defaultValue={message.Img}
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
              defaultValue={message.UnitPrice}
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
              defaultValue={message.Qty}
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
              defaultValue={message.TotalPrice}
              placeholder="Enter product unit price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control grid col-span-2 mt-6">
            <button type="submit" className="btn btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
