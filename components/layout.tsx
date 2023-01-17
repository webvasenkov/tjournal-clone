import Header from './header';
import { Montserrat } from '@next/font/google';
import Navigation from './navigation';
import Comments from './comments';
import { useRouter } from 'next/router';

const montserrat = Montserrat();

type Props = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: Props) {
  const router = useRouter();
  const mainLinks = ['rating', 'subscriptions', 'news'];
  const paths = router.asPath.split('/');
  const isMainContent =
    paths.some((path) => mainLinks.includes(path)) ||
    (paths.length == 2 && paths.every((path) => path == ''));

  if (isMainContent) {
    return (
      <div className={montserrat.className}>
        <Header />
        <div className='container mx-auto flex justify-between mt-8'>
          <Navigation />
          <div className='max-w-lg w-full'>{children}</div>
          <Comments />
        </div>
      </div>
    );
  }

  return (
    <div className={montserrat.className}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
