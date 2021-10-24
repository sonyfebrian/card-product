import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DetailProduct() {
  const [product, setProduct] = useState([]);
  const search = useLocation().search;
  const permalink = new URLSearchParams(search).get("permalink");


  useEffect(() => {
    fetch(`https://apis-dev.aspenku.com/api/v3/product/${permalink}`, {
      headers: {
        authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setProduct(result.data);
        console.log(result.data);
      });
  }, [permalink]);

  return (
    <section className="text-gray-600 body-font ">
      <nav
        class="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 rounded-lg"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link
              to="/"
              class="text-gray-700 hover:text-gray-900 inline-flex items-center"
            >
              <svg
                class="w-5 h-5 mr-2.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium">
                Detail Product
              </span>
            </div>
          </li>
        </ol>
      </nav>
      {[product].map((list, i) => {
        return (
          <div key={i} className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-3xl mb-1 text-gray-900">
                {list.name}
                </h1>
               
                {/* <div className="leading-relaxed text-sm">
                Dijual oleh: {list.SpreeStore.store_name}
                </div> */}
              
                <div className="text-price-color font-bold">
                 $ {list.sell_price}
                </div>
                <div className="bg-black h-px w-full mt-1 divide-dashed"></div>
                <div className="leading-relaxed">
                Minimal order: {list.min_qty_order}
                </div>
                <div className="leading-relaxed">
                Deskripsi: {list.description ? <div dangerouslySetInnerHTML={{__html: list.description.replace(/(<? *script)/gi, 'illegalscript')}} ></div>:[]}
                </div>
                
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src="https://dummyimage.com/600x300"
                alt="stats"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
