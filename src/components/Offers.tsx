import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getOffers } from '@/lib/api';
import { Offer } from '@/data/offers';

export default async function Offers() {
    const offers: Offer[] = await getOffers();

    return (
        <section id="offers" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                    عروضنا المميزة
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div key={offer.id} className="glass-card p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
                            <p className="text-lg text-white mb-4">{offer.text}</p>
                            {offer.link && (
                                <Link href={offer.link} className="inline-block mt-2 text-purple-400 hover:underline">
                                    تفاصيل أكثر
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
