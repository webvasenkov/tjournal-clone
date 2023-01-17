import ArticlePanel from 'components/article-panel';
import Image from 'next/image';
import cn from 'classnames';
import { commentTabs } from 'dummy-data/commentTabs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { comments } from 'dummy-data/comments';
import { MdSend } from 'react-icons/md';

function ArticlePage() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(commentTabs[0]);

  function handleClickOnTab(tabName: string) {
    return () => setSelectedTab(tabName);
  }

  const slug = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query?.slug;

  return (
    <>
      <div className='bg-white py-4 px-8 border border-rose-50 flex flex-col'>
        <h1 className='text text-xl font-bold'>
          American Psycho in all cinemas
        </h1>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
        <ArticlePanel className='mt-8' articleLink={slug || ''} />
        <div className='mt-8 ml-auto flex gap-4 items-center'>
          <div className='relative w-8 h-8 rounded-md overflow-hidden'>
            <Image
              className='object-cover'
              src={'/images/default-avatar.jpg'}
              fill
              alt="User's avatar"
            />
          </div>
          <h3 className='font-medium text-sm'>Vasya Pupkin</h3>
          <span className='text-green-400 font-bold text-sm'>+42</span>
        </div>
      </div>
      <div className='mt-8 bg-white border border-rose-50'>
        <div id='comments' className='py-4 px-8'>
          <h2 className='font-bold'>{comments.length} Comments</h2>
        </div>
        <div className='flex justify-between'>
          {commentTabs.map((tab) => (
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
        <form className='relative'>
          <textarea
            className='w-full py-4 px-8 resize-none border-b h-32'
            placeholder='Write a comment'
          />
          <button className='bg-rose-400 text-white p-2 rounded-md absolute bottom-8 right-8 opacity-50 transition hover:opacity-100'>
            <MdSend />
            <span className='sr-only'>Send a comment</span>
          </button>
        </form>
        <ul>
          {' '}
          {comments.map((comment, idx) => {
            const { user } = comment;
            const fullName = `${user.firstName} ${user.lastName}`;

            return (
              <li
                className={cn('border-b', {
                  'border-none': comments.length - 1 == idx,
                })}
                key={fullName + idx}>
                <div className='px-8 py-4'>
                  <div className='flex gap-4 items-center'>
                    <div className='relative w-8 h-8 rounded-md overflow-hidden'>
                      <Image
                        className='object-cover'
                        src={
                          comment.user.avatarUrl || '/images/default-avatar.jpg'
                        }
                        fill
                        alt="User's avatar"
                      />
                    </div>
                    <div className='w-full flex justify-between'>
                      <h4 className='font-medium text-sm'>{fullName}</h4>
                      <span className='text-gray-500 text-sm'>
                        {comment.time}
                      </span>
                    </div>
                  </div>
                  <p className='mt-4'>{comment.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ArticlePage;
