import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const links = [
    {text: 'Clients', url: '/'},
    {text: 'Orders', url: '/orders'},
    {text: 'Products', url: '/products'},
  ];

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 p-5">
      <div>
        <p className="text-white text-2xl">Soy Sidebar</p>
      </div>

      <nav className="mt-5 list-none">
        {links.map((link, index) => {
          const isActive = router.pathname === link.url;
          return (
            <li key={index} className={`p-3 ${isActive ? 'bg-blue-800' : ''}`}>
              <Link href={`${link.url}`}>
                <a className="text-white mb-2 block">{link.text}</a>
              </Link>
            </li>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
