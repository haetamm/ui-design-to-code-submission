import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import CardInfo from './CardInfo';
import { fullAddressSchema } from '../../../utils/validation';
import { addressField } from '../../../utils/fieldInput';
import InputCheckbox from './InputCheckbox';

const AddressSection = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(fullAddressSchema),
    mode: 'onChange',
    defaultValues: {
      dataKtp: {
        street: '',
        postal_code: '',
        province: '',
        regencies: '',
        district: '',
        villages: '',
      },
      dataDomisili: {
        street: '',
        postal_code: '',
        province: '',
        regencies: '',
        district: '',
        villages: '',
      },
      dataCompany: {
        street: '',
        postal_code: '',
        province: '',
        regencies: '',
        district: '',
        villages: '',
      },
    },
  });

  const [isDomisiliSameAsKtp, setIsDomisiliSameAsKtp] = useState(false);
  const [isCompanySameAsKtp, setIsCompanySameAsKtp] = useState(false);

  const dataKtp = watch('dataKtp');

  // Fungsi generik untuk menangani perubahan checkbox
  const handleCheckboxChange = (e, fieldName, setIsSameAsKtp) => {
    const checked = e.target.checked;
    setIsSameAsKtp(checked);
    if (checked) {
      setValue(fieldName, { ...dataKtp }, { shouldValidate: true });
    } else {
      setValue(
        fieldName,
        {
          street: '',
          postal_code: '',
          province: '',
          regencies: '',
          district: '',
          villages: '',
        },
        { shouldValidate: true }
      );
    }
  };

  // Sinkronisasi dataDomisili dengan dataKtp
  useEffect(() => {
    if (isDomisiliSameAsKtp) {
      setValue('dataDomisili', { ...dataKtp }, { shouldValidate: true });
    }
  }, [dataKtp, isDomisiliSameAsKtp, setValue]);

  // Sinkronisasi dataCompany dengan dataKtp
  useEffect(() => {
    if (isCompanySameAsKtp) {
      setValue('dataCompany', { ...dataKtp }, { shouldValidate: true });
    }
  }, [dataKtp, isCompanySameAsKtp, setValue]);

  const onSubmit = (data) => {
    const payload = {
      dataKtp: { ...data.dataKtp },
      dataDomisili: isDomisiliSameAsKtp
        ? { ...data.dataKtp }
        : { ...data.dataDomisili },
      dataCompany: isCompanySameAsKtp
        ? { ...data.dataKtp }
        : { ...data.dataCompany },
    };
    console.log('FormData Submitted:', payload);
  };

  return (
    <div className="w-full p-1 md:p-7 bg-white h-full mb-4 text-black rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardInfo
          title="Data KTP"
          fields={addressField}
          namespace="dataKtp"
          control={control}
          errors={errors}
        />
        <InputCheckbox
          isSameData={isDomisiliSameAsKtp}
          handleChange={(e) =>
            handleCheckboxChange(e, 'dataDomisili', setIsDomisiliSameAsKtp)
          }
          label="Domisili Sesuai KTP"
          id="domisili"
        />
        {!isDomisiliSameAsKtp && (
          <CardInfo
            title="Data Domisili"
            fields={addressField}
            namespace="dataDomisili"
            control={control}
            errors={errors}
          />
        )}
        <InputCheckbox
          isSameData={isCompanySameAsKtp}
          handleChange={(e) =>
            handleCheckboxChange(e, 'dataCompany', setIsCompanySameAsKtp)
          }
          label="Alamat Tempat Bekerja / Perusahaan Sesuai KTP"
          id="company"
        />
        {!isCompanySameAsKtp && (
          <CardInfo
            title="Data Alamat Tempat Kerja"
            fields={addressField}
            namespace="dataCompany"
            control={control}
            errors={errors}
          />
        )}
        <div className="flex items-center justify-end space-x-1 mt-10 px-7 pb-7 md:p-0">
          <Button
            type="submit"
            label="Save"
            icon="pi pi-save"
            size="large"
            className="bg-[#1cabe6] p-2.5 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddressSection;
