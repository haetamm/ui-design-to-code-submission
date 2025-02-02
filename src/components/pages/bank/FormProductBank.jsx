import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import {
  listBank,
  listGuarantee,
  listTargetMarket,
  product_type,
  updateProductBankField,
} from '../../../utils/fieldInput';
import { dataProductBank } from '../../../utils/data';

const FormProductBank = ({ id }) => {
  const [checkedPromotion, setCheckedPromotion] = useState(false);
  const [productData, setProductData] = useState(null);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedProductType, setSelectedProductType] = useState(null);
  const [guarantee, setGuarantee] = useState([]);
  const [targetMarket, setTargetMarket] = useState([]);
  const [commision, setCommision] = useState(0);
  const [appraisal, setAppraisal] = useState(0);
  const [floating, setFloating] = useState(0);
  const [loanToValue, setLoanToValue] = useState(0);
  const [penaltyFee, setPenaltyFee] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [fixRate, setFixRate] = useState(0);
  const [yearFixRate, setYearFixRate] = useState(0);
  const [maxTenor, setMaxTenor] = useState(0);
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [dates, setDates] = useState(null);

  useEffect(() => {
    if (id) {
      const data = dataProductBank.find((item) => item.id === parseInt(id));
      if (data) {
        setProductData(data);
        setSelectedBank(data.bank_name);
        setSelectedProductType(data.productType);
        setGuarantee(data.guarantee.split(',').map((item) => item.trim()));
        setTargetMarket(
          data.target_market.split(',').map((item) => item.trim())
        );
        setCommision(data.commision);
        setAppraisal(data.appraisal);
        setFloating(data.floating);
        setLoanToValue(data.loan_to_value);
        setPenaltyFee(data.penalty_fee);
        setInterestRate(data.interest_rate);
        setFixRate(data.fix_rate);
        setYearFixRate(data.year_fix_rate);
        setMaxTenor(data.max_tenor);
        setDescription(data.description);
        setUrl(data.url);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      selectedBank,
      selectedProductType,
      guarantee,
      targetMarket,
      commision,
      appraisal,
      floating,
      loanToValue,
      penaltyFee,
      interestRate,
      fixRate,
      yearFixRate,
      maxTenor,
      description,
      url,
      dates,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='bg-white p-3 md:p-8 rounded-md'>
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
                className='w-full bg-white border-[1px] focus-none'
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
                className='w-full bg-white border-[1px] focus-none'
              />
            </div>

            <div className='mb-2'>
              <div className='flex space-x-2 mt-3 items-center'>
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
                value={dates}
                onChange={(e) => setDates(e.value)}
                showIcon
                selectionMode='range'
                className='w-full bg-gray-200 border-[1px] h-[44px] px-1 mt-1.5 rounded-md'
              />
            </div>

            <div className='mb-3.5'>
              <p className='font-bold'>Jaminan</p>
              <div className='grid grid-cols-1 xs:grid-cols-2'>
                {listGuarantee.map((item, index) => (
                  <div key={index} className='flex space-x-2 mt-3 items-center'>
                    <input
                      type='checkbox'
                      checked={guarantee.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setGuarantee([...guarantee, item]);
                        } else {
                          setGuarantee(guarantee.filter((i) => i !== item));
                        }
                      }}
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
                  <div key={index} className='flex space-x-2 mt-3 items-center'>
                    <input
                      checked={targetMarket.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setTargetMarket([...targetMarket, item]);
                        } else {
                          setTargetMarket(
                            targetMarket.filter((i) => i !== item)
                          );
                        }
                      }}
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
                  <div className='flex items-center border-slate-300 border-[1px] text-white rounded-md'>
                    <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                      -
                    </span>
                    <input
                      value={productData ? productData[value] : 0}
                      onChange={(e) => {
                        if (value === 'commision') setCommision(e.target.value);
                        if (value === 'appraisal') setAppraisal(e.target.value);
                        if (value === 'floating') setFloating(e.target.value);
                      }}
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
                    <div className='flex items-center border-slate-300 border-[1px] text-white rounded-md mt-1'>
                      <span className='cursor-pointer rounded-l py-[13px] px-3.5 duration-100 hover:text-blue-50 bg-[#1cabe6]'>
                        -
                      </span>
                      <input
                        value={productData ? productData[value] : 0}
                        onChange={(e) => {
                          if (value === 'loan_to_value')
                            setLoanToValue(e.target.value);
                          if (value === 'penalty_fee')
                            setPenaltyFee(e.target.value);
                          if (value === 'interest_rate')
                            setInterestRate(e.target.value);
                          if (value === 'fix_rate') setFixRate(e.target.value);
                          if (value === 'year_fix_rate')
                            setYearFixRate(e.target.value);
                          if (value === 'max_tenor')
                            setMaxTenor(e.target.value);
                        }}
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
          </div>
        </div>
        <div className='hidden md:flex items-center justify-end space-x-1 mt-auto'>
          <Button
            label={`${id ? 'Update' : 'Tambah Produk'}`}
            icon='pi pi-save'
            size='large'
            className='w-[180px] py-1.5 px-3 bg-[#0c2f3e] text-white cursor-not-allowed'
          />
        </div>
      </form>
    </>
  );
};

FormProductBank.propTypes = {
  id: PropTypes.string,
};
export default FormProductBank;
