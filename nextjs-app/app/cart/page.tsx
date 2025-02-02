'use client';
import { EmptyCart } from "../components/CartComponent/EmptyCart";
import { SelectedProduct } from "../components/CartComponent/SelectedProductList";
import { useData } from "../components/Context/GlobalContext";

export default function CartPage() {
  const { bag,addToBag } = useData();
  return (<div>
    {
      !bag?.length ? <EmptyCart /> : <SelectedProduct productList={bag} addToBag={addToBag} />

    }
  </div>)
}
