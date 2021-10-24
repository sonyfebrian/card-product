import React, { useEffect, useState } from "react";
import Logo from "../assets/logo1.webp";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";


export default function Product() {
  const [product, setProduct] = useState([]);
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
 

  const url =
    "https://apis-dev.aspenku.com/product/thumbnail/163089780061.jpeg";

  const fuse = new Fuse(product, {
    keys: ["name"],
    includeScore: true,
  });

  const results = fuse.search(query);
  console.log("result", results);

  const productResults = query ? results.map((produk) => produk.item) : product;

  const handleClick = () => {
    setActive(!active);
  };

  function handleOnSearch({currentTarget = {}}) {
    const { value } = currentTarget;
    setQuery(value);

  }

  useEffect(() => {
    fetch(
      `https://apis-dev.aspenku.com/api/v1/product?limit=100&price={"min":"1","max":"1000"}&skip=0`,
      {
        headers: {
          authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
        },
      }
    )
      .then((data) => data.json())
      .then((result) => {
        setProduct(result.data.rows);
        console.log(result.data.rows);
      });
  }, []);

  

  return (
    <React.Fragment>
      <nav className="flex sticky top-0 py-3 z-40 items-center flex-wrap bg-white p-3 shadow-xl w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <img className="h-10 w-10" src={Logo} alt="logo" />
          <span className="ml-3 text-xl font-bold">Tokoku</span>
        </div>
        <button
          className=" inline-flex p-3 hover:bg-white rounded lg:hidden text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          {/* <img
            src="/images/logo/menu1.svg"
            alt="menu bar"
            className="h-6 w-6"
          /> */}
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Search Product Name"
                value={query}
                onChange={handleOnSearch}
              />
            </div>
          </div>
        </div>
      </nav>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {productResults.sort((a, b) => a.sell_price-b.sell_price).map((list, i) => {
              return (
                <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                    {[list.SpreeProductImages.filter].map((tes, i) => {
                      return (
                        <div
                          key={i}
                          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                        >
                          <img
                            src={tes.main_image}
                            alt={tes.alternative_text}
                            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                          />
                        </div>
                      );
                    })}
                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                      <h3 className="py-2 px-3 font-bold truncate tracking-wide text-center text-gray-800 uppercase dark:text-white">
                        {list.name}
                      </h3>
                      <div className="flex items-center justify-between px-3  py-o bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-price-color dark:text-gray-200">
                        $ {list.sell_price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-0 pb-1.5 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                         {list.unit_measure}
                        </span>
                        <Link to={`/detail-produk?permalink=${list.permalink}`}>
                          <button
                            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                          >
                            Detail Produk
                          </button>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
