import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import { Delete } from "../../ApiServices/ApiServices";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://crud-project-server.vercel.app/readProduct`)
      .then((res) => setProducts(res?.data?.message));
  }, []);

  console.log(products);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home page</title>
      </Helmet>

      {error && <p>{error}</p>}

      <div className="mt-10">
        <table className="w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>SL</label>
              </th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="text-center space-y-3">
                <th>
                  <label>{index + 1}</label>
                </th>
                <td className="flex flex-col items-center">
                  <img src={product.Img} alt="Image" className="h-16" />
                </td>
                <td>{product.ProductName}</td>
                <td>{product.ProductCode}</td>
                <td>{product.UnitPrice}</td>
                <td>{product.Qty}</td>
                <td>{product.TotalPrice}</td>
                <td>
                  <Link
                    to={`/updatePage/${product._id}`}
                    className="btn btn-ghost bg-[#11d431] text-white"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <Link
                    onClick={() => Delete(product._id)}
                    className="btn btn-ghost bg-[#e21111] text-white"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
