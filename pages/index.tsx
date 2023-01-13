import Head from 'next/head';
import Image from 'next/image';
import { records } from 'dummy-data/records';
import {
  MdOutlineModeComment,
  MdRepeat,
  MdOutlineBookmarkBorder,
  MdShare,
} from 'react-icons/md';

function MainPage() {
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
          return (
            <li
              className='bg-white p-4 rounded-md flex flex-col gap-4 border border-rose-50'
              key={record.title + idx}>
              <h2 className='font-semibold'>{record.title}</h2>
              <p>{record.text}</p>
              <div className='relative h-64'>
                <Image
                  className='object-cover'
                  src={record.coverUrl || '/images/default-record-cover.jpg'}
                  fill
                  alt='Record cover'
                />
              </div>
              <div className='flex justify-between'>
                <button className='text-gray-500 hover:text-rose-400 transition'>
                  <MdOutlineModeComment />
                  <span className='sr-only'>Leave a comment</span>
                </button>
                <button className='text-gray-500 hover:text-rose-400 transition'>
                  <MdRepeat />
                  <span className='sr-only'>Repeat</span>
                </button>
                <button className='text-gray-500 hover:text-rose-400 transition'>
                  <MdOutlineBookmarkBorder />
                  <span className='sr-only'>Add to bookmark</span>
                </button>
                <button className='text-gray-500 hover:text-rose-400 transition'>
                  <MdShare />
                  <span className='sr-only'>Share</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MainPage;
