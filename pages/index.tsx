import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { records } from 'dummy-data/records';
import ArticlePanel from 'components/article-panel';

function MainPage() {
  const [selectedArticle, setSelectedArticle] = useState('');

  function handleSelectArticle(title: string) {
    return () => setSelectedArticle(title);
  }

  function resetSelectedArticle() {
    setSelectedArticle('');
  }

  return (
    <>
      <Head>
        <title>TJournal Clone</title>
        <meta
          name='description'
          content='TJournal Clone created by Denis Vasenkov'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ul className='flex flex-col gap-8'>
        {records.map((record, idx) => {
          const key = record.title + idx;
          const link = `news/${record.title
            .toLowerCase()
            .split(' ')
            .join('-')}`;

          return (
            <li
              className={cn(
                'bg-white py-4 px-8 rounded-md border border-rose-50 transition',
                { 'border-rose-400': selectedArticle == key }
              )}
              key={key}>
              <Link
                href={link}
                onMouseMove={handleSelectArticle(key)}
                onMouseOut={resetSelectedArticle}>
                <h2 className='font-semibold'>{record.title}</h2>
              </Link>
              <p className='mt-4'>{record.text}</p>
              <div className='relative h-64 mt-4'>
                <Image
                  className='object-cover'
                  src={record.coverUrl || '/images/default-record-cover.jpg'}
                  fill
                  alt='Record cover'
                />
              </div>
              <ArticlePanel className='mt-4' articleLink={link} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MainPage;
