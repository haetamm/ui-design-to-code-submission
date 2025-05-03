import { Button } from 'primereact/button';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import DesignTable from '../components/pages/marketing-tool/DesignTable';

const MarketingPage = () => {
  const dataTemplate = [
    {
      id: 1,
      title: 'Newsletter',
      img: '/img/newsletter.png',
    },
    {
      id: 2,
      title: 'Business Card',
      img: '/img/businesscard.png',
    },
    {
      id: 1,
      title: 'Email Signature',
      img: '/img/emailsignature.png',
    },
    {
      id: 1,
      title: 'Hello Pack',
      img: '/img/hellopack.png',
    },
  ];
  return (
    <>
      <Helmet>
        <title>Marketing Tools| Loan Market</title>
        <meta name="description" content="Marketing Tools page" />
      </Helmet>
      <div className="mt-6 md:mb-8">
        <div className="p-3 px-3 pt-0 md:px-3 lg:px-4 xl:px-6 py-4 xs:pt-0 w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dataTemplate.map(({ id, title, img }) => (
              <React.Fragment key={id}>
                <div className="mb-2">
                  <img src={img} alt={title} className="h-[341px]" />
                  <div className="text-center bg-white py-3 rounded-b-xl border-b-[1px] border-x-[1px] border-slate-300">
                    {title}
                  </div>
                  <Button
                    label="Create"
                    icon="pi pi-plus"
                    size="large"
                    className="mt-2 w-full p-2.5 bg-[#1cabe6] text-white rounded-xl"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-8">
            <DesignTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingPage;
