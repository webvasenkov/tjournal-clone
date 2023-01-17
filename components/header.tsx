import { MdAddCircleOutline, MdOutlineLogin } from 'react-icons/md';
import Link from 'next/link';

function Header() {
  return (
    <header className='bg-white py-4 border-b border-rose-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link
            className='text-rose-50 bg-gradient-to-r from-rose-400 to-rose-300 w-12 h-12 flex items-center justify-center p-3 text-3xl font-bold rounded-xl -rotate-12 border-4 border-white hover:border-4 hover:border-rose-100 transition cursor-pointer'
            href='/'>
            J
          </Link>
          <input
            className='ml-4 bg-rose-50 rounded-md py-2 px-4 w-96'
            placeholder='Search'></input>
          <Link
            className='flex items-center gap-2 ml-4 bg-rose-400 py-2 px-4 rounded-md text-rose-50 hover:text-white transition'
            href='/write'>
            New article
            <MdAddCircleOutline />
          </Link>
        </div>
        <button className='flex items-center gap-2 text-rose-400 border border-rose-400 py-2 px-4 rounded-md hover:text-rose-50 hover:bg-rose-400 transition'>
          Login
          <MdOutlineLogin />
        </button>
      </div>
    </header>
  );
}

export default Header;
