import { z, string, date, object, array, preprocess, number } from 'zod';

// loan
export const need_type = string().min(1, 'wajib diisi');
export const loan_type = string().min(1, 'wajib diisi');
export const placement_amount = preprocess(
  (value) => parseFloat(value),
  number().min(1, 'wajib diisi')
);
export const placement_duration = string().min(1, 'wajib diisi');
export const deposit_certificate_name = string().min(1, 'wajib diisi');
export const deposit_renewal = string().min(1, 'wajib diisi');

// employment info
export const current_job = string().min(1, 'wajib diisi');
export const company_type = string().min(1, 'wajib diisi');
export const company_name = string().min(1, 'wajib diisi');
export const business_field = string().min(1, 'wajib diisi');
export const company_phone_number = string().min(1, 'wajib diisi');
export const company_email = string()
  .min(1, 'wajib diisi')
  .email('format email invalid');
export const company_address = string().min(1, 'wajib diisi');
export const current_position = string().min(1, 'wajib diisi');
export const years_of_experience = string().min(1, 'wajib diisi');
export const monthly_income = string().min(1, 'wajib diisi');

// additional info
export const fullName = string().min(1, 'wajib diisi');
export const relationship = string().min(1, 'wajib diisi');
export const phone = string().min(1, 'wajib diisi');
export const address = string().min(1, 'wajib diisi');

export const gender = string().min(1, 'wajib diisi');
export const birth_date = date({ required_error: 'wajib diisi' });
export const marital_status = string().min(1, 'wajib diisi');
export const marriage_type = string().min(1, 'wajib diisi');
export const number_of_dependents = string().min(1, 'wajib diisi');
export const last_education = string().min(1, 'wajib diisi');
export const home_ownership_status = string().min(1, 'wajib diisi');
export const home_phone_number = string().min(1, 'wajib diisi');
export const mother_maiden_name = string().min(1, 'wajib diisi');
export const length_of_residence = string().min(1, 'wajib diisi');
export const desired_monthly_installment = preprocess(
  (value) => parseFloat(value),
  number().min(1, 'wajib diisi')
);
export const preferred_bank = string().min(1, 'wajib diisi');
export const unpleasant_bank_experience = string().min(1, 'wajib diisi');
export const monthly_sales_revenue = preprocess(
  (value) => parseFloat(value),
  number().min(1, 'wajib diisi')
);
export const business_expansion_plan = string().min(1, 'wajib diisi');
export const payment_terms = string().min(1, 'wajib diisi');
export const additional_income = string().min(1, 'wajib diisi');
export const monthly_salary_and_allowance = preprocess(
  (value) => parseFloat(value),
  number().min(1, 'wajib diisi')
);

// address
export const street = string().min(1, 'Alamat Lengkap wajib diisi');
export const postal_code = string().min(1, 'Kode Pos wajib diisi');
export const province = string().min(1, 'Provinsi wajib diisi');
export const regencies = string().min(1, 'Kab./Kota wajib diisi');
export const district = string().min(1, 'Kecamatan wajib diisi');
export const villages = string().min(1, 'Kelurahan wajib diisi');

export const price = preprocess(
  (value) => (value === '' || value === null ? null : Number(value)),
  number().min(1, 'Harga wajib diisi').nullable()
);

// document file
export const pdfFileSchema = z
  .instanceof(File, { message: 'Input harus berupa file' })
  .refine((file) => file.type === 'application/pdf', 'File harus berupa PDF')
  .refine((file) => file.size > 0, 'File tidak boleh kosong')
  .refine((file) => file.size <= 500000, 'File tidak boleh lebih dari 500 KB');

// review loan section
export const review = string().min(1, 'wajib diisi');

// bank officer at loan section
export const bank = string().min(1, 'wajib diisi');
export const product = string().min(1, 'wajib diisi');
export const region = string().min(1, 'wajib diisi');
export const bank_officer = string().min(1, 'wajib diisi');

export const additionalInfoSchema = object({
  gender,
  birth_date,
  marital_status,
  marriage_type,
  number_of_dependents,
  last_education,
  home_ownership_status,
  home_phone_number,
  mother_maiden_name,
  length_of_residence,
  desired_monthly_installment,
  preferred_bank,
  unpleasant_bank_experience,
  monthly_sales_revenue,
  business_expansion_plan,
  payment_terms,
  additional_income,
  monthly_salary_and_allowance,
  familyData: array(
    object({
      fullName,
      relationship,
      phone,
      address,
    })
  ).min(1, 'Minimal 1 data keluarga wajib diisi'),
});

export const loanSchema = object({
  need_type,
  loan_type,
  placement_amount,
  placement_duration,
  deposit_certificate_name,
  deposit_renewal,
});

export const employmentInfoSchema = object({
  current_job,
  company_type,
  company_name,
  business_field,
  company_phone_number,
  company_email,
  company_address,
  current_position,
  years_of_experience,
  monthly_income,
});

export const addressSchema = object({
  street,
  postal_code,
  province,
  regencies,
  district,
  villages,
});

export const fullAddressSchema = object({
  dataKtp: addressSchema,
  dataDomisili: addressSchema,
  dataCompany: addressSchema,
});

export const assetInfoSchema = object({
  dataAsset: object({
    street,
    postal_code,
    province,
    regencies,
    district,
    villages,
    price,
  }),
});

export const uploadDocSchema = object({
  applicant_id_card: pdfFileSchema,
  spouse_id_card: pdfFileSchema,
  family_card: pdfFileSchema,
  marriage_divorce_certificate: pdfFileSchema,
  applicant_tax_id: pdfFileSchema,
  property_separation_deed: pdfFileSchema,
  collateral_documents: pdfFileSchema,
  bank_application_pdf: pdfFileSchema,
  credit_agreement: pdfFileSchema,
  ppjb_document: pdfFileSchema,
  tax_report: pdfFileSchema,
  pay_slip: pdfFileSchema,
  account_statement: pdfFileSchema,
  company_recommendation: pdfFileSchema,
  additional_file_1: pdfFileSchema,
  additional_file_2: pdfFileSchema,
});

export const reviewSchema = object({
  review,
});

export const bankOfficerSchema = object({
  bank,
  product,
  region,
  bank_officer,
});
