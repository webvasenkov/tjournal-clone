import { useState } from 'react';
import { ratingTabs } from 'dummy-data/ratingTabs';
import cn from 'classnames';
import { MdAddCircleOutline, MdCheckCircleOutline } from 'react-icons/md';

function RatingPage() {
  const [selectedTab, setSelectedTab] = useState(ratingTabs[0]);
  const [follow, setFollow] = useState(false);

  function handleClickOnTab(tabName: string) {
    return () => setSelectedTab(tabName);
  }

  function handleFollow() {
    setFollow(!follow);
  }

  return (
    <>
      <div className='bg-white rounded-md border border-rose-50'>
        <div className=' w-full py-4 px-8 '>
          <h2 className='font-semibold'>Rating communities and blogs</h2>
          <p className='mt-4'>
            The ten best authors and commentators, as well as the administrators
            of the first ten communities from the rating by the end of the
            month, receive a <span className='text-rose-400'>plus-account</span>{' '}
            for a month for free
          </p>
        </div>
        <div className='flex justify-between'>
          {ratingTabs.map((tab) => (
            <button
              className={cn(
                'relative font-medium uppercase text-gray-500 hover:text-rose-400 transition text-sm p-4 w-full before:transition',
                {
                  'text-rose-400 before:absolute before:w-full before:h-0.5 before:bg-rose-400 before:bottom-0 before:left-0':
                    selectedTab == tab,
                }
              )}
              onClick={handleClickOnTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-8 w-full bg-white rounded-md border border-rose-50'>
        <header className='flex justify-between py-4 px-8 border-b'>
          <h3 className='w-3/4 font-semibold'>Usernmae</h3>
          <h3 className='w-1/4 font-semibold'>Rating</h3>
        </header>
        <ul className='py-4 px-8 flex flex-col gap-2'>
          <li className='flex justify-between'>
            <div className='flex w-3/4'>
              <span className='w-6'>1</span>
              <p>Vasya Pupkin</p>
            </div>
            <div className='w-1/4 flex justify-between items-center'>
              <span>540</span>
              <button onClick={handleFollow}>
                {follow ? (
                  <>
                    <MdCheckCircleOutline className='text-rose-400' />
                    <span className='sr-only'>Remove</span>
                  </>
                ) : (
                  <>
                    <MdAddCircleOutline className='hover:text-rose-400 transition cursor-pointer' />
                    <span className='sr-only'>Add</span>
                  </>
                )}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RatingPage;
