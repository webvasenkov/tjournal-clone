import { navigation } from 'dummy-data/navigation';
import { useRouter } from 'next/router';
import cn from 'classnames';

function Navigation() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <ul className='max-w-sm flex flex-col gap-4'>
      {navigation.map((nav) => {
        const { link } = nav;
        const isActive = link == '/' ? path == link : path.includes(link);

        return (
          <li className='group' key={nav.name}>
            <a className='flex items-center gap-2' key={nav.name} href={link}>
              <nav.Icon
                className={cn('group-hover:text-rose-400 transition', {
                  'text-rose-400': isActive,
                })}
              />
              {nav.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
