'use client';
import { useData } from "../components/Context/GlobalContext";

export default function CartPage() {
  const { bag } = useData();

  console.log({ bag })

  return <div className="flex items-center  flex-col gap-4 pt-5 px-14">

    <i className="fa-solid fa-cart-shopping w-10 h-10"></i>
    <h1 className="text-2xl text-black font-bold">Your Cart Is Empty!</h1>
    <h4 className="font-semibold text-lg ">When you add products, they will appear here.</h4>
  </div>;
}
