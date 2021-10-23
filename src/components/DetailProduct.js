import React, { useEffect, useState } from "react";

export default function DetailProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://apis-dev.aspenku.com/api/v3/product/028884268481093082-Store-dummy-Baju-plastik",
      {
        headers: {
          authorization: "Basic QXNwZW5rdTpBc3Blbmt1",
        },
      }
    )
      .then((data) => data.json())
      .then((result) => {
        setProduct(result.data);
        console.log(result.data);
      });
  }, []);
  return (
    <div>
      <main className="flex items-center p-10 w-full h-full bg-white">
      {[product].map((list, i) => {
            return (
        <div className="border-t border-b pt-16 grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-start">
          
            <div
              className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
              style={{ minHeigth: "320px" }}
            >
                {list.SpreeProductVideos.map((tes, i) => {
                    return (
              <img
                className="w-full h-full object-cover"
                src={tes.url}
                alt="nike shoes"
              />

              );
            })}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="capitalize text-4xl font-extrabold">{list.name}</h1>
              <h2 className="text-3xl">${list.sell_price}</h2>
              <p className="text-lg text-gray-500	">
                {list.short_description}
              </p>
              <div className="flex items-center gap-4 my-6 cursor-pointer ">
                <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">
                  Add to bag
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            
          </div>
          
        </div>
        );
    })}
      </main>
    </div>
  );
}
