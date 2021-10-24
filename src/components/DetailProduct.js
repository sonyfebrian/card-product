import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Facebook from "../assets/facebook-logo.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Whatsapp from "../assets/whatsapp.png";

export default function DetailProduct() {
  const [product, setProduct] = useState([]);
  const search = useLocation().search;
  const [store, setStore] = useState([]);
  const [image, setImage] = useState([]);
  const permalink = new URLSearchParams(search).get("permalink");
  const BASE_URL = "https://apis-dev.aspenku.com";

  useEffect(() => {
    fetch(`https://apis-dev.aspenku.com/api/v3/product/${permalink}`, {
      headers: {
        authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setProduct(result.data);
        setStore(result.data.SpreeStore);
        setImage(result.data.SpreeProductImages);
      });
  }, [permalink]);

  return (
    <section className="text-gray-600 body-font ">
      <nav
        className="flex bg-gray-50 text-gray-700 border border-gray-200 py-3 px-5 rounded-lg"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2.5"
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
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">
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
              <div className="w-full sm:p-4 px-4">
                <h1 className="title-font font-extrabold text-5xl text-gray-900">
                  {list.name}
                </h1>
                {[store].map((data, i) => {
                  return (
                    <div className="font-medium text-gray-400 text-sm">
                      Dijual oleh: {data.store_name}
                    </div>
                  );
                })}
                <div className="text-price-color text-3xl font-bold">
                  $ {list.sell_price}
                </div>
                <div className="bg-black h-px w-full mt-1 divide-dashed"></div>
                <div className="leading-relaxed">
                  Minimal order: {list.min_qty_order}
                </div>
                <div className="leading-relaxed">
                  Deskripsi:{" "}
                  {list.description ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: list.description.replace(
                          /(<? *script)/gi,
                          "illegalscript"
                        ),
                      }}
                    ></div>
                  ) : (
                    []
                  )}
                </div>
                <div className="bg-black h-px w-full mt-1 divide-dashed"></div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://aspenku.com">
                  <img
                    src={Facebook}
                    alt="facebook"
                    className="w-10"
                    onmouseover="this.src='social-buttons/face-but-hov.png';"
                    onmouseout="this.src='social-buttons/face-but.png';"
                  />
                </a>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <a href="https://api.whatsapp.com/send?text=produk https://aspenku.com">
                  <img
                    src={Whatsapp}
                    alt="whatsapp"
                    className="w-10"
                    onmouseover="this.src='social-buttons/face-but-hov.png';"
                    onmouseout="this.src='social-buttons/face-but.png';"
                  />
                </a>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <a href="https://twitter.com/share?url=https://aspenku.com&text=product&via=tes&hashtags=tes">
                  <img
                    src={Twitter}
                    alt="twitter"
                    className="w-10"
                    onmouseover="this.src='social-buttons/face-but-hov.png';"
                    onmouseout="this.src='social-buttons/face-but.png';"
                  />
                </a>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <a href="https://www.linkedin.com/shareArticle?url=https://aspenku.com&title=tes">
                  <img
                    src={Linkedin}
                    className="w-10"
                    alt="linkedin"
                    onmouseover="this.src='social-buttons/face-but-hov.png';"
                    onmouseout="this.src='social-buttons/face-but.png';"
                  />
                </a>
              </div>
            </div>
            {image.map((data, i) => {
              return (
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 transition-all duration-500 ease-in-out ">
                  <img
                    className="object-cover object-center w-600 h-sm rounded-lg transition ease-in duration-700 "
                    src={BASE_URL + data.thumbnail_image}
                    alt="no"
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
