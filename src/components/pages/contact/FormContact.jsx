import React from 'react';
import PropTypes from 'prop-types';
import { contactField } from '../../../utils/fieldInput';
import {
  contact_category_option as contact_category,
  contact_type_option as contact_type,
  employment_type_option as employment_type,
  gender_option as gender,
} from '../../../utils/selectOption';
import { Button } from 'primereact/button';
import FormCustom from '../../layouts/FormCustom';

const FormContact = ({ control, errors, id }) => {
  const optionsMap = {
    contact_type,
    gender,
    employment_type,
    contact_category,
  };

  return (
    <div className="bg-white pb-3 rounded-md">
      <FormCustom
        fields={contactField}
        optionsMap={optionsMap}
        gridClass="grid grid-cols-1 xs:grid-cols-[30%_70%] lg:grid-cols-[25%_75%] space-x-0 md:space-x-2"
        control={control}
        errors={errors}
      />
      <div className="hidden md:flex items-center justify-end space-x-1 md:mx-7 md:mb-3">
        <Button
          label={id ? 'Update' : 'Simpan'}
          icon="pi pi-save"
          size="large"
          className={`${id ? 'bg-[#0c2f3e]' : 'bg-[#1cabe6]'} p-2.5 text-white`}
          type="submit"
        />
      </div>
    </div>
  );
};

FormContact.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  id: PropTypes.string,
};

export default FormContact;
