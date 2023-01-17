import { useSSR } from 'hooks/useSSR';
import { useEffect } from 'react';
import { MdPublish } from 'react-icons/md';

function WritePage() {
  const isSSR = useSSR();

  // init editorjs
  useEffect(() => {
    async function initEditorJS() {
      const EditorJS = (await import('@editorjs/editorjs')).default;
      new EditorJS({
        holder: 'editor-js',
        placeholder: 'Enter the text of your article',
      });
    }

    if (!isSSR) {
      initEditorJS();
    }
  }, [isSSR]);

  return (
    <form className='container mx-auto mt-8'>
      <input
        className='w-full py-4 px-8 resize-none rounded-md border border-rose-50 text-xl font-bold focus:outline focus:outline-rose-400'
        placeholder='Heading'></input>
      <div
        id='editor-js'
        className='w-full h-[calc(100vh-311px)] bg-white mt-8 rounded-md border border-rose-50 py-4 px-16 overflow-hidden'
      />
      <button className='flex items-center gap-2 ml-auto mt-8 bg-rose-400 py-2 px-4 rounded-md text-rose-50 hover:text-white transition'>
        Publish
        <MdPublish />
      </button>
    </form>
  );
}

export default WritePage;
