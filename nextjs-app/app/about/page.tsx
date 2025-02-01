import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Welcome to <span className="font-semibold text-gray-800">UBV (United by Vibe)</span> – where fashion meets identity!
                        We create premium-quality T-shirts that let you express your vibe in the most stylish way.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
                        <p className="text-gray-600">
                            At UBV, we believe in <b>fashion with meaning</b>. Our T-shirts are more than just fabric;
                            they are statements of individuality, culture, and vibe.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-800">Why Choose UBV?</h3>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li><b>Premium 100% cotton</b> for unbeatable comfort</li>
                            <li><b>Trendsetting designs</b> inspired by modern culture</li>
                            <li><b>Eco-friendly printing methods</b> for sustainability</li>
                            <li><b>Fast shipping</b> across India</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Join the Vibe</h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        UBV isn’t just a brand – it's a <b>community of trendsetters</b>.
                        Be part of the movement and wear your vibe with pride.
                    </p>
                    <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition">
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>

    )
}
