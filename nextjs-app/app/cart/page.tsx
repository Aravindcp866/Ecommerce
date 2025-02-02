'use client';
import { EmptyCart } from "../components/CartComponent/EmptyCart";
import { useData } from "../components/Context/GlobalContext";

export default function CartPage() {
  const { bag } = useData();

  console.log({ bag })

  return (<div>
    {
      !bag?.length && <EmptyCart />
    }
  </div>)
}
