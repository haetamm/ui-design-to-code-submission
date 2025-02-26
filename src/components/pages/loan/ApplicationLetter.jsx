import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

const ApplicationLetter = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = document.querySelector('#letter-content img');
    if (img && img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
    }
  }, []);

  const handleDownloadPDF = () => {
    if (!imageLoaded) {
      alert('Gambar masih dimuat, coba lagi sebentar.');
      return;
    }

    const element = document.getElementById('letter-content');
    const opt = {
      margin: [0.3, 1, 0.3, 1],
      filename: 'surat_keterangan_loan_market.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: 'auto',
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className='w-full bg-white h-full mb-4 text-black rounded-md'>
      <div className='px-3 pt-4 pb-10 md:p-10'>
        <div id='letter-content' className='text-lg p-1'>
          <div className='flex justify-end mb-3'>
            <img
              src='/img/loan-market-logo.webp'
              alt='logo-img'
              className='h-[80px] w-[80px]'
            />
          </div>

          <h1 className='text-2xl font-bold text-center'>Surat Keterangan</h1>
          <div className='mt-4'>
            <p className='text-gray-600'>15/3/2023</p>
            <p className='text-gray-600'>Ref: null</p>
          </div>
          <div className='mt-10'>
            <p className='font-semibold'>Kepada Yth:</p>
            <p>Perihal: Surat Pengantar Aplikasi Loan Market</p>
          </div>
          <p className='my-10'>
            Sehubungan dengan adanya aplikasi atas nama debitur:
          </p>
          <p>
            <strong>Nama Debitur:</strong> John Doe
          </p>
          <p>
            <strong>Alamat:</strong> null
          </p>
          <p>
            <strong>Plafon Kredit:</strong> Rp5,000,000,000.00
          </p>
          <p>
            <strong>Jenis Fasilitas:</strong> Kredit Pemilikan Rumah Secondary
            (KPR Secondary)
          </p>
          <p>
            <strong>Alamat Agunan:</strong> null
          </p>
          <p className='mt-12'>
            Maka dengan ini kami ingin memberitahukan bahwa calon debitur
            tersebut merupakan referral dari Loan Market. Kami mohon bantuan
            rekan-rekan Bank Mandiri untuk dapat membantu memproses kredit calon
            debitur tersebut.
          </p>
          <p className='mb-12'>
            Demikian surat ini kami buat atas perhatian dan kerjasamanya kami
            ucapkan terima kasih.
          </p>
          <p className='font-semibold'>Yohannes Affandy (Jojo)</p>
          <p className='mt-20'>Loan Market Office Dev</p>
        </div>

        <div className='flex justify-end mt-4'>
          <button
            onClick={handleDownloadPDF}
            className='mt-6 text-white px-4 py-2 rounded bg-[#1cabe6]'
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLetter;
