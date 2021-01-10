import React from 'react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import Profile from 'components/Profile';

import LeftArrow from 'public/icons/left-arrow.svg';
import RightArrow from 'public/icons/right-arrow.svg';

type PageLayoutProps = {
  pages?: Array<string>;
};

type NavigationProps = {
  pages?: Array<string>;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, pages }) => (
  <div className="lg:p-16 xl:p-24 w-screen lg:h-screen bg-wallpaper bg-left bg-cover">
    <div className="shadow-xl lg:flex h-full w-full">
      <div className="text-white flex flex-col bg-white bg-opacity-25 lg:overflow-y-scroll lg:rounded-tl-2xl lg:rounded-bl-2xl px-6 lg:px-12 py-10 w-full lg:w-2/6 lg:h-full border-black backdrop-blur">
        <Profile />
      </div>
      <div className="relative bg-white w-full lg:w-2/3 h-full lg:rounded-tr-2xl lg:rounded-br-2xl">
        <div
          className="
          h-full w-full flex flex-col px-6 lg:px-12 py-10 overflow-x-scroll"
        >
          {children}
        </div>

        <Navigation pages={pages} />
      </div>
    </div>
  </div>
);

const Navigation = ({ pages }: NavigationProps) => {
  const router = useRouter();

  if (!pages || !pages.includes(router.pathname)) return null;

  const defaultIndex = pages.findIndex(urlPath => urlPath === router.pathname);

  const [pageIndex, setPageIndex] = useState(defaultIndex);

  const previousTab = useCallback(() => {
    if (pages[pageIndex - 1]) {
      setPageIndex(pageIndex - 1);
      router.push(pages[pageIndex - 1]);
    }
  }, [pageIndex]);

  const nextTab = useCallback(() => {
    if (pages[pageIndex + 1]) {
      setPageIndex(pageIndex + 1);
      router.push(pages[pageIndex + 1]);
    }
  }, [pageIndex]);

  return (
    <>
      <div
        onClick={previousTab}
        className="cursor-pointer shadow-lg absolute bg-white rounded-full w-10 h-10 top-8 right-20 lg:-left-5 lg:top-1/2"
      >
        <div className="relative w-full h-full">
          <LeftArrow
            width={15}
            height={15}
            fill={pages[pageIndex - 1] ? '#000' : 'rgba(0,0,0,.3)'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div
        onClick={nextTab}
        className="cursor-pointer shadow-lg absolute bg-white rounded-full w-10 h-10 top-8 right-6 lg:-right-5 lg:top-1/2"
      >
        <div className="relative w-full h-full">
          <RightArrow
            width={15}
            height={15}
            fill={pages[pageIndex + 1] ? '#000' : 'rgba(0,0,0,.3)'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
