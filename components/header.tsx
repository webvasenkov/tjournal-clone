import { MdAddCircleOutline, MdOutlineLogin } from 'react-icons/md';

function Header() {
  return (
    <header className='bg-white py-4 border-b border-rose-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-rose-50 bg-gradient-to-r from-rose-400 to-rose-300 w-12 h-12 flex items-center justify-center p-3 text-3xl font-bold rounded-xl -rotate-12'>
            J
          </div>
          <input
            className='ml-4 bg-rose-50 rounded-md py-2 px-4'
            placeholder='Search'></input>
          <button className='flex items-center gap-2 ml-4 bg-rose-400 py-2 px-4 rounded-md text-rose-50 hover:text-white transition'>
            New record
            <MdAddCircleOutline />
          </button>
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
