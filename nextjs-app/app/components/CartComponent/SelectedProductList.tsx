import Image from "next/image";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export function SelectedProduct({ productList, addToBag }: any) {
  const [price, setPrice] = useState<number>(599);
  const [quantity, setQuantity] = useState<number>(1);

  const calculatePrice = (type: string) => {
    if (type === "add") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setQuantity((prev) => prev + 1);
    }
  };
  const addDeleteProduct = (id: string) => {
    const index = productList.findIndex((e: any) => e?._id == id)
    if (index >= 0) {
      const modifiedArr = productList.slice(index, 1)
      addToBag(modifiedArr)
    }
  }

  return (
    <div className="space-y-4">
      {productList?.map((ele: any, i: number) => (
        <div
          key={ele?._id + i}
          className="flex items-center border border-gray-300 rounded-lg p-4 gap-4 shadow-md"
        >
          {/* Image Section */}
          <div className="w-20 h-20 flex-shrink-0">
            <Image
              className="rounded-md object-cover"
              src={ele?.image?.asset?.url}
              width={80}
              height={80}
              alt="Best T-shirt in India" />
          </div>

          {/* Product Details */}
          <div className="flex-grow space-y-2">
            <div className="font-semibold text-base">{ele.stockName}</div>
            <div className="text-sm text-gray-500">Size: L</div>

            {/* Quantity Control */}
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                onClick={() => calculatePrice("add")}
              >
                -
              </button>
              <span className="font-bold text-gray-700">{quantity}</span>
              <button

                className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                onClick={() => calculatePrice("minus")}
              >
                +
              </button>
            </div>

            {/* Total Price */}
            <div className="text-sm font-medium text-gray-700">
              Total Price:
              <span className="font-bold text-black pl-2">
                ₹{price * quantity}
              </span>
            </div>
          </div>

          {/* Delete Icon */}
          <button className="text-red-600 hover:text-red-800">
            <RiDeleteBinLine size={24} onClick={(e) => addDeleteProduct(ele._id)} />
          </button>

        </div>
      ))}
      <div className="p-4 w-full">
        <button className=" w-full h-14 text-lg font-semibold bg-yellow-gradient text-white/90 rounded-md hover:bg-yellow-600 transition text-center leading-[3.5rem]">Go To Checkout</button>
      </div>
    </div>
  );
}
