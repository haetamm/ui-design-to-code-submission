import React from 'react';
import { Helmet } from 'react-helmet-async';
import CampaignTable from '../components/pages/whatsapp-report/CampaignTable';
import CardNotif from '../components/pages/whatsapp-report/CardNotif';
import CardUserWhatsapp from '../components/pages/whatsapp-report/CardUserWhatsapp';
import ChatPerformanceTable from '../components/pages/whatsapp-report/ChatPerformanceTable';

const WhatsappReportPage = () => {
  return (
    <>
      <Helmet>
        <title>Whatsapp Report | Loan Market</title>
        <meta name="description" content="Whatsapp Report  page" />
      </Helmet>
      <div className="mt-2 p-3 md:p-6 md:mt-0">
        <CardNotif />
        <div className="grid grid-cols-1 xl:grid-cols-[74%_26%] xl:space-x-6">
          <CampaignTable />
          <CardUserWhatsapp />
        </div>
        <ChatPerformanceTable />
      </div>
    </>
  );
};

export default WhatsappReportPage;
