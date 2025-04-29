import React, { useState } from 'react';
import CardDetail from '../CardDetail';
import { dataBankOfficer } from '../../../utils/data';
import { bankOfficerField } from '../../../utils/fieldInput';
import { Button } from 'primereact/button';
import {
  bank_officer_option as bank_officer,
  bank_option as bank,
  product_type_option as product,
  region_option as region,
} from '../../../utils/selectOption';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bankOfficerSchema } from '../../../utils/validation';
import FormCustom from '../../layouts/FormCustom';

const BankOfficerSection = () => {
  const [edit, setEdit] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bankOfficerSchema),
    mode: 'onChange',
    defaultValues: {
      bank: dataBankOfficer ? dataBankOfficer.bank : '',
      product: dataBankOfficer ? dataBankOfficer.product : '',
      region: dataBankOfficer ? dataBankOfficer.region : '',
      bank_officer: dataBankOfficer ? dataBankOfficer.bank_officer : '',
    },
  });

  const optionsMap = {
    bank,
    product,
    region,
    bank_officer,
  };

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <>
      <div className="w-full bg-white h-full mb-4 text-black rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-end space-x-3 mx-6 pt-6">
            <Button
              onClick={toggleEdit}
              type="button"
              icon={`${!edit ? 'pi pi-times' : 'pi pi-save'}`}
              size="large"
              className=" p-2.5 border border-[#1cabe6] text-[#1cabe6] bg-text-white focus:ring-0"
              aria-label="Edit"
            />
            <Button
              icon="pi pi-trash"
              type="button"
              size="large"
              className=" p-2.5 border border-[#1cabe6] text-[#1cabe6] bg-text-white focus:ring-0"
              aria-label="Edit"
            />
          </div>
          {edit && (
            <CardDetail data={dataBankOfficer} fields={bankOfficerField} />
          )}
          {!edit && (
            <FormCustom
              fields={bankOfficerField}
              optionsMap={optionsMap}
              gridClass="grid grid-cols-1 xs:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] space-x-0 md:space-x-2"
              control={control}
              errors={errors}
            />
          )}
          {!edit && (
            <div className="flex items-center justify-end space-x-1 m-6 pb-6">
              <Button
                type="submit"
                label="Save"
                icon="pi pi-save"
                size="large"
                className=" p-2.5 bg-[#1cabe6] text-white"
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default BankOfficerSection;
