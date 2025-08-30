// app/news/page.tsx
import React from 'react';
import NewsCard from '@/components/news/NewsCard';
import newsData from '@/data/news.json'; // Import static news data

const NewsPage: React.FC = () => {
    return (
        <div>
            <h1>Berita Sekolah</h1>
            <div>
                {newsData.map(news => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;