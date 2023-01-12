import Image from 'next/image';
import { comments } from 'dummy-data/comments';
import { MdOutlineMoreHoriz } from 'react-icons/md';

function Comments() {
  return (
    <div className='max-w-sm'>
      <h2 className='font-semibold'>Comments</h2>
      <ul className='mt-4 flex flex-col gap-4'>
        {comments.map((comment, idx) => {
          const { user } = comment;
          const fullName = `${user.firstName} ${user.lastName}`;

          return (
            <li>
              <div className='flex items-center gap-2' key={fullName + idx}>
                <div className='relative w-8 h-8 rounded-md overflow-hidden'>
                  <Image
                    className='object-cover'
                    src={user.avatarUrl || '/images/default-avatar.jpg'}
                    fill
                    alt="User's avatar"
                  />
                </div>
                <h3 className='font-medium text-sm'>{fullName}</h3>
              </div>
              <p className='mt-2 text-sm'>{comment.text}</p>
            </li>
          );
        })}

        <button className='hover:text-rose-500 transition'>
          <MdOutlineMoreHoriz />
          <span className='sr-only'>Show more comments</span>
        </button>
      </ul>
    </div>
  );
}

export default Comments;
