// components/NewsCard.tsx
import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
    news: {
        id: number;
        title: string;
        slug: string;
        excerpt: string;
    };
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    return (
        <div>
            <Link href={`/news/${news.slug}`}>
                <h2>{news.title}</h2>
                <p>{news.excerpt}</p>
            </Link>
        </div>
    );
};

export default NewsCard;