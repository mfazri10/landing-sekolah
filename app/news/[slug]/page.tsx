// app/news/[slug]/page.tsx
import React from 'react';
import newsData from '@/data/news.json'; // Import static news data
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

type NewsItem = {
    slug: string;
    title: string;
    date?: string | null;
    content: string;
    [key: string]: unknown;
};

export default function NewsDetailPage({ params }: Props) {
    const { slug } = params;

    // Temukan berita berdasarkan slug
    const newsItem = (newsData as NewsItem[]).find((news) => news.slug === slug);

    if (!newsItem) {
        // Gunakan helper app-router untuk merender 404
        notFound();
    }

    const formattedDate = newsItem.date
        ? new Date(newsItem.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
        : null;

    return (
        <main className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
            {formattedDate && <p className="text-sm text-gray-600 mb-6">{formattedDate}</p>}
            <article className="prose">{newsItem.content}</article>
        </main>
    );
}

// Optional: pre-render available news pages at build time
export function generateStaticParams() {
    return (newsData as NewsItem[]).map((n) => ({ slug: n.slug }));
}