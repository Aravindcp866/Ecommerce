"use client"
import Link from "next/link";

export function BuyNowButton() {
    const playAudio = () => {
        const audio = new Audio("/audio/audio.mp3");
        audio.play();
    };

    return (
        <Link
            className="inline-block w-full h-14 text-lg font-semibold bg-yellow-gradient text-black/90 rounded-md hover:bg-yellow-600 transition text-center leading-[3.5rem]"
            href="/cart"
            onClick={(e) => {
                e.preventDefault();
                playAudio();
                setTimeout(() => {
                    window.location.href = "/cart";
                }, 700);
            }}
        >
            <i className="fa-solid fa-bag-shopping px-2"></i>
            Add to Bag
        </Link>
    );
}
