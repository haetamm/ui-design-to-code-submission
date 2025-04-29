import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Controller } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { regionApi } from '../../../api/regionApi';

const CardInfo = ({ title, fields, namespace, control, errors }) => {
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProvincesData = async () => {
      setLoading(true);
      try {
        const result = await regionApi.fetchProvinces();
        setProvinces(result.data || []);
      } finally {
        setLoading(false);
      }
    };
    fetchProvincesData();
  }, []);

  const fetchRegencies = async (provinceId) => {
    setLoading(true);
    try {
      const result = await regionApi.fetchRegencies(provinceId);
      setRegencies(result.data || []);
      setDistricts([]);
      setVillages([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchDistricts = async (regencyId) => {
    setLoading(true);
    try {
      const result = await regionApi.fetchDistricts(regencyId);
      setDistricts(result.data || []);
      setVillages([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchVillages = async (districtId) => {
    setLoading(true);
    try {
      const result = await regionApi.fetchVillages(districtId);
      setVillages(result.data || []);
    } finally {
      setLoading(false);
    }
  };

  const optionsMap = {
    province: provinces,
    regencies,
    district: districts,
    villages,
  };

  const handleChange = async (fieldValue, value, onChange) => {
    const selectedOption = optionsMap[fieldValue]?.find(
      (opt) => opt.id === value
    );
    if (selectedOption) {
      // Untuk select, gunakan nama dari opsi yang dipilih
      onChange(selectedOption.name);
      if (fieldValue === 'province') {
        await fetchRegencies(selectedOption.id);
      } else if (fieldValue === 'regencies') {
        await fetchDistricts(selectedOption.id);
      } else if (fieldValue === 'district') {
        await fetchVillages(selectedOption.id);
      }
    } else {
      // Untuk teks, gunakan nilai langsung dari input
      onChange(value);
    }
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg border-[1px] pb-6">
      <h2 className="font-bold mb-4 p-4 bg-[#0c2f3e] text-white rounded-t-lg">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-6">
        {fields.map(({ label, value, type, placeholder }) => (
          <div key={value}>
            <label className="block font-bold text-gray-500 mb-1">
              {label}
            </label>
            <Controller
              name={`${namespace}.${value}`}
              control={control}
              render={({ field }) => (
                <>
                  {(type === 'text' || type === 'number') && (
                    <InputText
                      {...field}
                      type={type}
                      className={`w-full border-[1px] p-[11px] ${errors[namespace]?.[value] ? 'border-red-500' : ''}`}
                      placeholder={`—${placeholder}—`}
                      value={field.value || ''}
                      onChange={(e) =>
                        handleChange(value, e.target.value, field.onChange)
                      }
                    />
                  )}
                  {type === 'select' && (
                    <select
                      {...field}
                      className={`w-full bg-white text-gray-500  border-[1px] h-[48px] px-2 rounded-md ${errors[namespace]?.[value] ? 'border-red-500' : ''}`}
                      value={
                        field.value
                          ? optionsMap[value]?.find(
                              (opt) => opt.name === field.value
                            )?.id || ''
                          : ''
                      }
                      onChange={(e) =>
                        handleChange(value, e.target.value, field.onChange)
                      }
                      disabled={loading || !optionsMap[value]?.length}
                    >
                      <option value="">—{placeholder}—</option>
                      {optionsMap[value]?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {loading ? 'Loading' : option.name}
                        </option>
                      ))}
                    </select>
                  )}
                </>
              )}
            />
            {errors[namespace]?.[value] && (
              <span className="text-red-500 text-sm">
                {errors[namespace][value].message}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  namespace: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CardInfo;
