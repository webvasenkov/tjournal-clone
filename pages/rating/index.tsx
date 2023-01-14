import { useState } from 'react';
import { ratingTabs } from 'dummy-data/ratingTabs';
import cn from 'classnames';
import { MdAddCircleOutline, MdCheckCircleOutline } from 'react-icons/md';

function RatingPage() {
  const [selectedTab, setSelectedTab] = useState(ratingTabs[0]);
  const [added, setAdded] = useState(false);

  function handleClickOnTab(tabName: string) {
    return () => setSelectedTab(tabName);
  }

  function handleClickOnAdd() {
    setAdded(!added);
  }

  return (
    <>
      <div className='bg-white w-full p-4 rounded-md'>
        <h2 className='font-semibold'>Rating communities and blogs</h2>
        <p className='mt-4'>
          The ten best authors and commentators, as well as the administrators
          of the first ten communities from the rating by the end of the month,
          receive a <span className='text-rose-400'>plus-account</span> for a
          month for free
        </p>
        <div className='flex justify-between mt-4'>
          {ratingTabs.map((tab) => (
            <button
              className={cn(
                'font-medium uppercase text-gray-500 hover:text-rose-400 transition text-sm',
                { 'text-rose-400': selectedTab == tab }
              )}
              onClick={handleClickOnTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-8 w-full bg-white rounded-md'>
        <header className='flex justify-between pt-4 pb-2 px-4'>
          <h3 className='w-3/4 font-semibold'>Usernmae</h3>
          <h3 className='w-1/4 font-semibold'>Rating</h3>
        </header>
        <span className='block bg-gray-300 w-full h-px'></span>
        <ul className='pt-2 pb-4 px-4 flex flex-col gap-2'>
          <li className='flex justify-between'>
            <div className='flex w-3/4'>
              <span className='w-6'>1</span>
              <p>Vasya Pupkin</p>
            </div>
            <div className='w-1/4 flex justify-between items-center'>
              <span>540</span>
              <button onClick={handleClickOnAdd}>
                {added ? (
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
