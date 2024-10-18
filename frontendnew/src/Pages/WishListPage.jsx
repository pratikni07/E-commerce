import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getWishlist } from "@/services/operations/wishlistAPI"; // Adjust the path as per your project structure
import ProductCard from "@/components/Cards/ProductCard";
const WishListPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const userId = user._id;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    } else {
      getWishlistItems();
    }
  }, [token]);

  const getWishlistItems = async () => {
    try {
      const res = await getWishlist(userId); // Assuming getWishlist returns data in the expected format
      setProducts(res.data.wishlist.products);
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
      // Handle error as needed
    }
  };

  return (
    <div>
      {token ? (
        <div className="mt-[30px]  lg:mb-[60px] mb-[100px]">
          <div className="textColor font-bold text-[25px] lg:text-[25px] mb-[40px] flex justify-center cursor-pointer">
            <p>WISHLIST</p>
          </div>
          {products.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4 mt-4 rounded-md">
              {products.map((prod) => (
                <ProductCard
                  key={prod.product._id}
                  imgURL={prod.product.images[0]}
                  title={prod.product.name}
                  oprice={prod.product.oldPrice}
                  nprice={prod.product.newPrice}
                  id={prod.product._id}
                />
              ))}
            </div>
          ) : (
            <p>Wishlist is empty</p>
          )}
        </div>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <div className="text-center">
            <div className="w-[200px] h-[200px] bg-slate-500 mx-auto">
              {/* Content inside the square */}
            </div>
            <h5 className="text-3xl font-bold text-gray-500 mt-7 text-[23px]">
              You need to login to access this page
            </h5>
            <button className="mt-5 bg-[#8E3E63] text-white py-2 rounded hover:bg-[#6d304f] px-6 font-bold">
              Login Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishListPage;
