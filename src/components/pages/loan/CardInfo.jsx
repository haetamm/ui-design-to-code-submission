import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { regionApi } from '../../../api/regionApi';

const CardInfo = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedRegency, setSelectedRegency] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProvincesData = async () => {
      setLoading(true);
      const result = await regionApi.fetchProvinces();

      setProvinces(result.data || []);
      setLoading(false);
    };
    fetchProvincesData();
  }, []);

  const optionsMap = {
    province: provinces,
    regencies: regencies,
    district: districts,
    villages: villages,
  };

  const settersMap = {
    province: setSelectedProvince,
    regencies: setSelectedRegency,
    district: setSelectedDistrict,
    villages: setSelectedVillage,
  };

  const fetchRegencies = async (provinceId) => {
    setLoading(true);
    const result = await regionApi.fetchRegencies(provinceId);

    setRegencies(result.data || []);
    setSelectedRegency(null);
    setDistricts([]);
    setSelectedDistrict(null);
    setVillages([]);
    setSelectedVillage(null);
    setLoading(false);
  };

  const fetchDistricts = async (regencyId) => {
    setLoading(true);
    const result = await regionApi.fetchDistricts(regencyId);

    setDistricts(result.data || []);
    setSelectedDistrict(null);
    setVillages([]);
    setSelectedVillage(null);
    setLoading(false);
  };

  const fetchVillages = async (districtId) => {
    setLoading(true);
    const result = await regionApi.fetchVillages(districtId);

    setVillages(result.data || []);
    setSelectedVillage(null);
    setLoading(false);
  };

  const handleChange = async (e, fieldValue) => {
    const value = typeof e === 'object' && e.target ? e.target.value : e;
    const selectedOption = optionsMap[fieldValue]?.find(
      (opt) => opt.id === value
    );

    if (selectedOption) {
      settersMap[fieldValue](selectedOption);
      setFormData((prev) => ({ ...prev, [fieldValue]: selectedOption.name }));

      // Panggil fetch berikutnya berdasarkan field yang dipilih
      if (fieldValue === 'province') {
        await fetchRegencies(selectedOption.id);
      } else if (fieldValue === 'regencies') {
        await fetchDistricts(selectedOption.id);
      } else if (fieldValue === 'district') {
        await fetchVillages(selectedOption.id);
      }
    } else {
      // Untuk text dan number
      setFormData((prev) => ({ ...prev, [fieldValue]: value }));
    }

    if (onSubmit) {
      onSubmit({
        ...formData,
        [fieldValue]: selectedOption ? selectedOption.name : value,
      });
    }
  };

  return (
    <>
      <div className='w-full mx-auto bg-white rounded-lg border-[1px] pb-6'>
        <h2 className='font-bold mb-4 p-4 bg-[#0c2f3e] text-white rounded-t-lg'>
          {title}
        </h2>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-6'>
          {fields.map(({ label, value, type }, index) => (
            <div key={index}>
              <label className='block font-bold text-gray-700 mb-1'>
                {label}
              </label>
              {type === 'text' && (
                <InputText
                  className='w-full border-[1px] p-[11px]'
                  placeholder={`${label}`}
                  value={formData[value] || ''}
                  onChange={(e) => handleChange(e, value)}
                />
              )}

              {type === 'select' && (
                <select
                  name={value}
                  className='w-full bg-white border-[1px] h-[48px] px-2 rounded-md'
                  value={
                    value === 'province'
                      ? selectedProvince?.id || ''
                      : value === 'regencies'
                        ? selectedRegency?.id || ''
                        : value === 'district'
                          ? selectedDistrict?.id || ''
                          : value === 'villages'
                            ? selectedVillage?.id || ''
                            : ''
                  }
                  onChange={(e) => handleChange(e, value)}
                  disabled={loading || !optionsMap[value]?.length}
                >
                  <option value=''>{`—Pilih ${label}—`}</option>
                  {optionsMap[value]?.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              )}

              {type === 'number' && (
                <InputNumber
                  className='w-full border-[1px] h-[48px] rounded-lg px-3 focus:outline-none'
                  inputId='currency-indonesia'
                  mode='currency'
                  currency='IDR'
                  locale='id-ID'
                  value={formData[value] || null}
                  onValueChange={(e) => handleChange(e.value, value)}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['text', 'select', 'number']).isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
};

export default CardInfo;
