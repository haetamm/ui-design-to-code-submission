import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import ButtomBottom from '../components/pages/bank/ButtomBottom';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import {
  listBank,
  listGuarantee,
  listTargetMarket,
  product_type,
  updateProductBankField,
} from '../utils/fieldInput';
import { Calendar } from 'primereact/calendar';
import { useParams } from 'react-router-dom';
import { dataProductBank } from '../utils/data';
import { Helmet } from 'react-helmet-async';

const BankUpdatePage = () => {
  const { id } = useParams();
  const [checkedPromotion, setCheckedPromotion] = useState(false);
  const [productData, setProductData] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [guarantee, setGuarantee] = useState([]);
  const [targetMarket, setTargetMarket] = useState([]);
  const [, setCommision] = useState(0);
  const [, setAppraisal] = useState(0);
  const [, setFloating] = useState(0);
  const [, setLoanToValue] = useState(0);
  const [, setPinaltyFee] = useState(0);
  const [, setInterestRate] = useState(0);
  const [, setFixRate] = useState(0);
  const [, setYearFixRate] = useState(0);
  const [, setMaxTenor] = useState(0);
  const [description, setDescription] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const data = dataProductBank.find((item) => item.id === parseInt(id));
    if (data) {
      setProductData(data);
      setSelectedBank(data.bank_name);
      setSelectedProductType(data.product_type);
      setGuarantee(data.guarantee.split(',').map((item) => item.trim()));
      setTargetMarket(data.target_market.split(',').map((item) => item.trim()));
      setCommision(data.commision);
      setAppraisal(data.appraisal);
      setFloating(data.floating);
      setLoanToValue(data.loan_to_value);
      setPinaltyFee(data.penalty_fee);
      setInterestRate(data.interest_rate);
      setFixRate(data.fix_rate);
      setYearFixRate(data.year_fix_rate);
      setMaxTenor(data.max_tenor);
      setDescription(data.description);
      setUrl(data.url);
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Edit Product | Loan Market</title>
        <meta name='description' content='Edit Product page' />
      </Helmet>
      <div className='mt-[60px] mb-14 md:mb-0'>
        <div className='px-3 py-6 md:p-6'>
          <div className='bg-white p-3 md:p-8 rounded-md'>
            <div className='grid gird-cols-1 lg:grid-cols-2 gap-0 lg:gap-14'>
              <div>
                <div className='mb-2'>
                  <p className='font-bold mb-2'>Bank</p>
                  <Dropdown
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.value)}
                    options={listBank}
                    optionLabel='name'
                    placeholder='Pilih Bank'
                    className=' w-full bg-white border-[1px] focus-none'
                  />
                </div>
                <div className='mb-2'>
                  <p className='font-bold mb-2'>Jenis Product</p>
                  <Dropdown
                    value={selectedProductType}
                    onChange={(e) => setSelectedProductType(e.value)}
                    options={product_type.slice(1, 4)}
                    optionLabel='name'
                    placeholder='Pilih Bank'
                    className=' w-full bg-white border-[1px] focus-none'
                  />
                </div>
                <div className='mb-2'>
                  <div className=' flex space-x-2 mt-3 items-center'>
                    <input
                      type='checkbox'
                      className='checkbox-custome h-5 w-5 cursor-pointer'
                      onChange={(e) => setCheckedPromotion(e.target.checked)}
                      checked={checkedPromotion}
                    />
                    <p className='font-bold'>Promotional Product</p>
                  </div>
                  <Calendar
                    disabled={!checkedPromotion}
                    showIcon
                    selectionMode='range'
                    className='w-full bg-gray-200 border-[1px] h-[44px] px-1 mt-1.5 rounded-md'
                  />
                </div>
                <div className='mb-3.5'>
                  <p className='font-bold'>Jaminan</p>
                  <div className='grid grid-cols-1 xs:grid-cols-2'>
                    {listGuarantee.map((item, index) => (
                      <div
                        key={index}
                        className=' flex space-x-2 mt-3 items-center'
                      >
                        <input
                          type='checkbox'
                          checked={guarantee.includes(item)}
                          className='checkbox-custome h-5 w-5 cursor-pointer'
                        />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mb-3.5'>
                  <p className='font-bold'>Target Market</p>
                  <div className='grid grid-cols-1 xs:grid-cols-2'>
                    {listTargetMarket.map((item, index) => (
                      <div
                        key={index}
                        className=' flex space-x-2 mt-3 items-center'
                      >
                        <input
                          checked={targetMarket.includes(item)}
                          type='checkbox'
                          className='checkbox-custome h-5 w-5 cursor-pointer'
                        />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {updateProductBankField
                  .slice(0, 3)
                  .map(({ label, value }, index) => (
                    <div key={index} className='mb-2'>
                      <p className='font-bold'>{label}</p>
                      <div className='flex items-center border-slate-300 border-[1px]  text-white rounded-md'>
                        <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                          -
                        </span>
                        <input
                          value={productData ? productData[value] : 0}
                          className='h-8 w-full border bg-white text-black text-center text-xs outline-none border-none'
                          autoFocus='false'
                        />
                        <span className='cursor-pointer rounded-r py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                          +
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='flex flex-col mt-1'>
                <div>
                  {updateProductBankField
                    .slice(3, 9)
                    .map(({ label, value }, index) => (
                      <div key={index} className='mb-2'>
                        <p className='font-bold'>{label}</p>
                        <div className='flex items-center border-slate-300 border-[1px]  text-white rounded-md mt-1'>
                          <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                            -
                          </span>
                          <input
                            value={productData ? productData[value] : 0}
                            className='h-8 w-full border text-center text-xs outline-none text-black border-none'
                            autoFocus='false'
                          />
                          <span className='cursor-pointer rounded-r py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                            +
                          </span>
                        </div>
                      </div>
                    ))}
                  <div className='mb-3.5'>
                    <p className='font-bold mb-2'>Keterangan</p>
                    <InputTextarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      cols={30}
                      className='w-full border-[1px] px-2'
                    />
                  </div>
                  <div className='mb-3.5'>
                    <p className='font-bold'>URL</p>
                    <InputText
                      onChange={(e) => setUrl(e.target.value)}
                      value={url}
                      className='w-full border-[1px] py-3 px-2'
                    />
                  </div>
                </div>
                <div className='hidden md:flex items-center justify-end space-x-1 mt-auto'>
                  <Button
                    label='Update'
                    icon='pi pi-save'
                    size='large'
                    className=' w-[120px] p-3 bg-[#0c2f3e] text-white cursor-not-allowed'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtomBottom>
        <Button
          label='Update'
          icon='pi pi-save'
          size='large'
          className=' w-full p-3 bg-[#0c2f3e] text-white'
        />
      </ButtomBottom>
    </>
  );
};

export default BankUpdatePage;
