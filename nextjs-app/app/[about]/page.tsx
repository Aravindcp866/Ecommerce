import React from 'react';

export default function Page() {
    return (
        <section className="p-6 bg-gray-50 text-gray-800">
            <p className="text-gray-600 leading-relaxed mb-4">
                Malayali Made is a brand dedicated to showcasing the rich heritage and culture of Kerala through
                meticulously crafted products. Our slogan, 
                <span className="italic text-gray-800"> "Where crafted with pride, worn with swag,"</span> reflects our 
                commitment to delivering high-quality items that resonate with authenticity and style.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">Leadership Team</h2>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800">Chief Designer & Officer, Co-founder</h3>
                <p className="font-semibold">Vishnu SP</p>
                <p className="text-gray-600 leading-relaxed">
                    Vishnu SP is the visionary behind the creative direction of Malayali Made. With a keen eye for design
                    and innovation, Vishnu ensures that every product is a masterpiece that embodies the essence of
                    Kerala's culture and artistry.
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800">Chief Executive Officer (CEO) & Co-founder</h3>
                <p className="font-semibold">Akash AS</p>
                <p className="text-gray-600 leading-relaxed">
                    Akash AS brings his entrepreneurial spirit and strategic thinking to Malayali Made. As the CEO, he
                    drives the company's vision and oversees its growth, ensuring that Malayali Made remains a leader in
                    its niche.
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                    Chief Technology Officer (CTO), Business Strategist & Co-founder
                </h3>
                <p className="font-semibold">Aravind CP</p>
                <p className="text-gray-600 leading-relaxed">
                    Aravind CP plays a pivotal role in shaping the technological and strategic direction of Malayali
                    Made. His expertise in technology and business strategy ensures the company operates efficiently
                    while staying ahead of market trends.
                </p>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">Our Philosophy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
                At Malayali Made, we take pride in our roots. Every product we create tells a story of tradition,
                passion, and craftsmanship. Our goal is to connect with individuals who appreciate the unique blend of
                heritage and modernity that our brand represents.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-700">Contact Us</h2>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside">
                <li>Website: <span className="text-gray-500 italic">[Coming Soon]</span></li>
                <li>Email: <span className="text-blue-600 underline">info@malayalimade.com</span></li>
                <li>
                    Social Media: <span className="text-blue-600">@malayalimade</span> on Instagram, Facebook, and
                    Twitter
                </li>
            </ul>
            <p className="mt-6 text-gray-600 leading-relaxed">
                Join us on this journey to celebrate Kerala's vibrant culture with pride and swag!
            </p>
        </section>
    );
}
