import Image from "next/image";
import emptyCart from "../../public/Icons/emptyCart.svg"
export function EmptyCart() {

    return (
        <div className="flex items-center  flex-col gap-4 pt-5 px-14">
            <Image src={emptyCart} alt="best Tshirt in India" width={400} height={400} />
            <h1 className="text-2xl text-black font-bold">Your Cart Is Empty!</h1>
        </div>
    );
}