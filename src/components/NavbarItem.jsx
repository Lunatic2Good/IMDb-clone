"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    return (
        <div>
            <Link className={`m-4 hover:text-amber-400 font-semibold p-2 ${
                genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            }`} href={`/?genre=${param}`}>
                {title}
            </Link>
        </div>
    );
}

export default function Navbar({ items = [] }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items.length > 0 ? (
                items.map(item => (
                    <NavbarItem key={item.param} title={item.title} param={item.param} />
                ))
            ) : (
                <div>No items to display</div>
            )}
        </Suspense>
    );
}