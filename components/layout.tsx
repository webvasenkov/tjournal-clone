import Header from './header';
import { Montserrat } from '@next/font/google';
import Navigation from './navigation';
import Comments from './comments';

const montserrat = Montserrat();

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Props) {
  return (
    <div className={montserrat.className}>
      <Header />
      <div className='container mx-auto flex justify-between mt-8'>
        <Navigation />
        <div className='max-w-md'>{children}</div>
        <Comments />
      </div>
    </div>
  );
}

export default Layout;
