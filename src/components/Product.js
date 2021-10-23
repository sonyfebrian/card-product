import React, { useEffect, useState } from "react";
import Logo from '../assets/logo1.webp'
import { Link } from "react-router-dom";


export default function Product() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState([]);
  const [, setMain] = useState([]);
  const [active, setActive] = React.useState(false);
  

  const url = "https://apis-dev.aspenku.com/product/thumbnail/163089780061.jpeg"

  

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    fetch(`https://apis-dev.aspenku.com/api/v1/product?limit=100&price={"min":"1","max":"1000"}&skip=0`, {
      headers: {
        authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setProduct(result.data.rows);
        console.log(result.data.rows);
       
      });
  }, []);

  useEffect(() => {
    fetch("https://apis-dev.aspenku.com/api/v3/product/028884268481093082-Store-dummy-Baju-plastik", {
      headers: {
        authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setImage(result.data);
        console.log(result.data);
      });
  }, []);

  return (
    <React.Fragment>
      <nav className="flex sticky top-0 py-3 z-40 items-center flex-wrap bg-white p-3 shadow-xl w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
       
        <img
              className="h-10 w-10"
              src={Logo}
              alt="logo"
              
            />
      <span className="ml-3 text-xl">Tokoku</span>
    
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
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
            
            <input   type="text" className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search Products"/>
        </div>
          </div>
        </div>
      </nav>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {product.map((list, i) => {
            return (
              <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                  {[list.SpreeProductImages.filter].map((tes, i) => {
                    return (
                      <div
                        key={i}
                        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                      >
                        <img src={tes.main_image} alt={tes.alternative_text} className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"/>
                        
                      </div>
                    );
                  })}
                  <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                      {list.name}
                    </h3>
                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        ${list.sell_price}
                      </span>
                      <Link to="/detail-product" >
                      <button
                        onClick={() => setShow(true)}
                        className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                      >
                        Add to cart
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* show modal */}
          {show ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                      <div className="w-1/3 bg-cover"></div>
                      <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                          Backpack
                        </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit In odit
                        </p>
                        <div className="flex mt-2 item-center">
                          <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-gray-500 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>

                          <svg
                            className="w-5 h-5 text-gray-500 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        </div>

                        <div className="flex justify-between mt-3 item-center">
                          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                            $220
                          </h1>
                          <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShow(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShow(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}
