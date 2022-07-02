import React, {ReactNode} from 'react';
import Head from 'next/head';
import {Sidebar} from '../components';

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>CMR Client Administrator | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="sm:w-2/3 xl:w-4/5 p-5">
            <>
              <h1>{title}</h1>
              {children}
            </>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
