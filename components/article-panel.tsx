import Link from 'next/link';
import {
  MdBookmarkBorder,
  MdOutlineModeComment,
  MdRepeat,
  MdShare,
} from 'react-icons/md';
import cn from 'classnames';

interface Props {
  articleLink: string;
  className?: string;
}

function ArticlePanel({ articleLink, className }: Props) {
  return (
    <div className={cn('flex justify-between', className)}>
      <Link
        className='text-gray-500 hover:text-rose-400 transition'
        href={articleLink + '#comments'}>
        <MdOutlineModeComment />
        <span className='sr-only'>Leave a comment</span>
      </Link>
      <button className='text-gray-500 hover:text-rose-400 transition'>
        <MdRepeat />
        <span className='sr-only'>Repeat</span>
      </button>
      <button className='text-gray-500 hover:text-rose-400 transition'>
        <MdBookmarkBorder/>
        <span className='sr-only'>Add to bookmark</span>
      </button>
      <button className='text-gray-500 hover:text-rose-400 transition'>
        <MdShare />
        <span className='sr-only'>Share</span>
      </button>
    </div>
  );
}

export default ArticlePanel;
