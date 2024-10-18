import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "@/components/Cards/ProductCard";

import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { Label } from "@radix-ui/react-label";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {
  getAllProducts,
  getProductsByCategoryAndSubCategory,
  getProductsBySubCategory,
} from "@/services/operations/productAPI";
import { getAllSales } from "@/services/operations/designAPI";

const Products = () => {
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [fabric, setFabric] = useState("");
  const [category, setCategory] = useState("");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(16);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category");
  const subcategoryParam = searchParams.get("subcategory");
  const subcategoryParams = subcategoryParam ? subcategoryParam.split(",") : [];
  const [sales, getSales] = useState([]);
  const [saleType, setSaleType] = useState("");

  // get all sale
  const getAllSale = async () => {
    const response = await getAllSales();
    // console.log(response.data[0]);
    // getSales(response.data[3]);
    setSaleType(response.data[0].name);
    // console.log(response.data[0]);
  };

  useEffect(() => {
    getAllSale();
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response;
        if (id) {
          response = await getProductsBySubCategory(id);
        } else if (categoryParam && subcategoryParams.length > 0) {
          if (subcategoryParams.length === 1) {
            // Single subcategory
            response = await getProductsByCategoryAndSubCategory(
              categoryParam,
              subcategoryParams[0]
            );
          } else {
            // Multiple subcategories
            const subcategoryPromises = subcategoryParams.map((subcategory) =>
              getProductsByCategoryAndSubCategory(categoryParam, subcategory)
            );
            const subcategoryResults = await Promise.all(subcategoryPromises);
            response = subcategoryResults.flat();
          }
        } else if (categoryParam) {
          response = await axios.get(`/getProductByCategory/${categoryParam}`);
        } else {
          response = await getAllProducts();
        }

        // Shuffle the products
        const shuffledProducts = response.sort(() => 0.5 - Math.random());
        setProducts(shuffledProducts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id, categoryParam, subcategoryParam]);
  const renderFilterAccordion = () => (
    <Accordion className="p-0">
      <AccordionItem key="1" aria-label="Price" title="Price">
        <div className="flex gap-4 text-[#484B5A]">
          <input
            type="radio"
            value="0-500"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label> Less than ₹500</Label>
        </div>
        <div className="flex gap-4 text-[#484B5A]">
          <input
            type="radio"
            value="500-1000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label> ₹500 - ₹1000</Label>
        </div>
        <div className="flex gap-4 text-[#484B5A]">
          <input
            type="radio"
            value="1000-1500"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label> ₹1000 - ₹1500 </Label>
        </div>
        <div className="flex gap-4 text-[#484B5A]">
          <input
            type="radio"
            value="1500-2000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label> ₹1500 - ₹2000</Label>
        </div>
        <div className="flex gap-4 text-[#484B5A]">
          <input
            type="radio"
            value="2000+"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Label> More than ₹2000</Label>
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Color" title="Color">
        {Array.from(new Set(products.map((p) => p.color))).map((color) => (
          <div
            key={color}
            className="flex gap-4 text-[#484B5A] justify-between items-center mb-2"
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                value={color}
                onChange={(e) => setColor(e.target.checked ? color : "")}
                className="w-[20px]"
              />
              <div className="flex align-middle items-center gap-1 text-[16px]">
                <div className="w-[15px] h-[15px] bg-[#DDD3C9] rounded-[50%]"></div>
                <Label className="text-[16px]">{color}</Label>
              </div>
            </div>
            <div className="text-[12px]">
              {products.filter((p) => p.color === color).length}
            </div>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Size" title="Size">
        {Array.from(
          new Set(products.flatMap((p) => p.sizes.map((s) => s.size)))
        ).map((size) => (
          <div
            key={size}
            className="flex gap-4 text-[#484B5A] justify-between items-center mb-2"
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                value={size}
                onChange={(e) => setSize(e.target.checked ? size : "")}
                className="w-[20px]"
              />
              <div className="flex align-middle items-center gap-1 text-[16px]">
                <Label className="text-[16px]">{size}</Label>
              </div>
            </div>
            <div className="text-[12px]">
              (
              {
                products.filter((p) => p.sizes.some((s) => s.size === size))
                  .length
              }
              )
            </div>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Fabric" title="Fabric">
        {Array.from(new Set(products.map((p) => p.fabric))).map((fabric) => (
          <div
            key={fabric}
            className="flex gap-4 text-[#484B5A] justify-between items-center mb-2"
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                value={fabric}
                onChange={(e) => setFabric(e.target.checked ? fabric : "")}
                className="w-[20px]"
              />
              <div className="flex align-middle items-center gap-1 text-[16px]">
                <Label className="text-[16px]">{fabric}</Label>
              </div>
            </div>
            <div className="text-[12px]">
              ({products.filter((p) => p.fabric === fabric).length})
            </div>
          </div>
        ))}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Availability" title="Availability">
        <div className="flex gap-4 text-[#484B5A] justify-between items-center mb-2">
          <div className="flex gap-3">
            <input
              type="checkbox"
              value="inStock"
              onChange={(e) => setQ(e.target.checked ? "inStock" : "")}
              className="w-[20px]"
            />
            <div className="flex align-middle items-center gap-1 text-[16px]">
              <Label className="text-[16px]">In stock</Label>
            </div>
          </div>
          <div className="text-[12px]">
            ({products.filter((p) => p.isAvailable && p.stock > 0).length})
          </div>
        </div>
        <div className="flex gap-4 text-[#484B5A] justify-between items-center mb-2">
          <div className="flex gap-3">
            <input
              type="checkbox"
              value="outOfStock"
              onChange={(e) => setQ(e.target.checked ? "outOfStock" : "")}
              className="w-[20px]"
            />
            <div className="flex align-middle items-center gap-1 text-[16px]">
              <Label className="text-[16px]">Out of stock</Label>
            </div>
          </div>
          <div className="text-[12px]">
            ({products.filter((p) => !p.isAvailable || p.stock === 0).length})
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );

  return (
    <div>
      {/* Mobile filter button */}
      <p className="flex lg:hidden justify-center">
        <Button onPress={onOpen}>Filter</Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex justify-between mt-4">
                  <Label className="textColor text-xl font-bold ">Filter</Label>
                  <p
                    className="font-normal cursor-pointer"
                    onClick={() => {
                      setPrice("");
                      setColor("");
                      setSize("");
                      setFabric("");
                      setQ("");
                    }}
                  >
                    Clear All
                  </p>
                </ModalHeader>
                <ModalBody>{renderFilterAccordion()}</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Apply
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </p>

      <div className="w-[90%] m-auto flex">
        {/* Desktop filter sidebar */}
        <div className="w-[25%] p-2 mt-4 hidden lg:block">
          <div className="flex justify-between p-2">
            <h1 className="textColor font-bold text-[20px]">Filter</h1>
            <p
              className="cursor-pointer"
              onClick={() => {
                setPrice("");
                setColor("");
                setSize("");
                setFabric("");
                setQ("");
              }}
            >
              Clear All
            </p>
          </div>
          <div className="p-0 mt-5">{renderFilterAccordion()}</div>
        </div>

        {/* Product grid */}
        <div className="w-[100%] lg:w-[75%]">
          <div className="flex flex-wrap justify-center gap-4 mt-4 rounded-md ">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              products
                .filter(
                  (product) =>
                    (!price ||
                      (price === "0-500" && product.newPrice < 500) ||
                      (price === "500-1000" &&
                        product.newPrice >= 500 &&
                        product.newPrice < 1000) ||
                      (price === "1000-1500" &&
                        product.newPrice >= 1000 &&
                        product.newPrice < 1500) ||
                      (price === "1500-2000" &&
                        product.newPrice >= 1500 &&
                        product.newPrice < 2000) ||
                      (price === "2000+" && product.newPrice >= 2000)) &&
                    (!color || product.color === color) &&
                    (!size || product.sizes.some((s) => s.size === size)) &&
                    (!fabric || product.fabric === fabric) &&
                    (!q ||
                      (q === "inStock"
                        ? product.isAvailable && product.stock > 0
                        : !product.isAvailable || product.stock === 0))
                )
                .map((product) => (
                  <ProductCard
                    key={product._id}
                    imgURL={product.images[0]}
                    title={product.name}
                    oprice={product.oldPrice}
                    nprice={product.newPrice}
                    id={product._id}
                    saleType={saleType}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
