export const detailProductBankField = [
  {
    label: 'Bank',
    value: 'bank_name',
    type: 'text',
  },
  {
    label: 'Nama Produk',
    value: 'product_name',
    type: 'text',
  },
  {
    label: 'Jaminan',
    value: 'guarantee',
    type: 'text',
  },
  {
    label: 'Target Market',
    value: 'target_market',
    type: 'text',
  },
  {
    label: 'Komisi',
    value: 'commision',
    type: 'text',
  },
  {
    label: 'Appraisal',
    value: 'appraisal',
    type: 'text',
  },
  {
    label: 'Floating',
    value: 'floating',
    type: 'text',
  },
  {
    label: 'Loan to Value',
    value: 'loan_to_value',
    type: 'text',
  },
  {
    label: 'Penalty Fee',
    value: 'penalty_fee',
    type: 'text',
  },
  {
    label: 'Interest Rate',
    value: 'interest_rate',
    type: 'text',
  },
  {
    label: 'Fix Rate %',
    value: 'fix_rate',
    type: 'text',
  },
  {
    label: 'Fix Rate (year)',
    value: 'year_fix_rate',
    type: 'text',
  },
  {
    label: 'Max Tenor (year)',
    value: 'max_tenor',
    type: 'text',
  },
  {
    label: 'Keterangan',
    value: 'description',
    type: 'textarea',
  },
  {
    label: 'URL',
    value: 'url',
    type: 'text',
  },
];

export const detailDeveloperField = [
  {
    label: 'Developer',
    value: 'name_dev',
    type: 'text',
  },
  {
    label: 'Nama Project',
    value: 'name_product',
    type: 'text',
  },

  {
    label: 'Type Produk',
    value: 'type_product',
    type: 'text',
  },
  {
    label: 'Harga Unit',
    value: 'price',
    type: 'number',
  },
  {
    label: 'Type Property',
    value: 'type_property',
    type: 'text',
  },
  {
    label: 'Unit Property',
    value: 'unit',
    type: 'number',
  },
  {
    label: 'Address',
    value: 'address',
    type: 'text',
  },
];

export const productBankField = [
  {
    label: 'Bank',
    value: 'bank_name',
    type: 'select',
  },
  {
    label: 'Jenis Produk',
    value: 'product_type',
    type: 'select',
  },
  {
    label: 'Promotial Product',
    value: 'promotial_date',
    type: 'date',
  },
  {
    label: 'Jaminan',
    value: 'guarantee',
    type: 'checkbox',
  },
  {
    label: 'Target Market',
    value: 'target_market',
    type: 'checkbox',
  },
  {
    label: 'Komisi',
    value: 'commision',
    type: 'number',
  },
  {
    label: 'Appraisal',
    value: 'appraisal',
    type: 'number',
  },
  {
    label: 'Floating',
    value: 'floating',
    type: 'number',
  },
  {
    label: 'Loan to Value',
    value: 'loan_to_value',
    type: 'number',
  },
  {
    label: 'Penalty Fee',
    value: 'penalty_fee',
    type: 'number',
  },
  {
    label: 'Interest Rate',
    value: 'interest_rate',
    type: 'number',
  },
  {
    label: 'Fix Rate',
    value: 'fix_rate',
    type: 'number',
  },
  {
    label: 'Fix Rate (year)',
    value: 'year_fix_rate',
    type: 'number',
  },
  {
    label: 'Max Tenor (year)',
    value: 'max_tenor',
    type: 'number',
  },
  {
    label: 'Keterangan',
    value: 'description',
    type: 'textarea',
  },
  {
    label: 'URL',
    value: 'url',
    type: 'text',
  },
];

export const creditScoringIndividualField = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
  },
  {
    label: 'Date Of Birth',
    value: 'birth_date',
    type: 'date',
  },
  {
    label: 'KTP',
    value: 'nik',
    type: 'text',
  },
  {
    label: 'Purpose',
    value: 'credit_purpose',
    type: 'select',
  },
];

export const creditScoringCompanyField = [
  {
    label: 'Name',
    value: 'name',
    type: 'text',
  },
  {
    label: 'Purpose',
    value: 'credit_purpose',
    type: 'select',
  },
  {
    label: 'NPWP',
    value: 'npwp',
    type: 'text',
  },
];

export const uploadDocField = [
  {
    label: 'Fotokopi KTP Pemohon',
    value: 'applicant_id_card',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi KTP Pemohon',
  },
  {
    label: 'Fotokopi KTP Suami / Istri',
    value: 'spouse_id_card',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi KTP Suami / Istri',
  },
  {
    label: 'Fotokopi Kartu Keluarga',
    value: 'family_card',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi Kartu Keluarga',
  },
  {
    label: 'Fotokopi Akta Nikah/Cerai',
    value: 'marriage_divorce_certificate',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi Akta Nikah/Cerai',
  },
  {
    label: 'Fotokopi NPWP Pemohon',
    value: 'applicant_tax_id',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi NPWP Pemohon',
  },
  {
    label:
      'Akta Pisah Harta Notaril dan didaftarkan ke KUA atau catatan sipil (jika ada)',
    value: 'property_separation_deed',
    category: 'personal_data',
    placeholder:
      'Upload Akta Pisah Harta Notaril dan didaftarkan ke KUA atau catatan sipil (jika ada)',
  },
  {
    label: 'Fotokopii Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir',
    value: 'collateral_documents',
    category: 'warranty_data',
    placeholder:
      'Upload Fotokopii Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir',
  },
  {
    label:
      'Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan',
    value: 'bank_application_pdf',
    category: 'warranty_data',
    placeholder:
      'Upload Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan',
  },
  {
    label: 'Fotokopi Perjanjian Kredit (Jika Over Kredit)',
    value: 'credit_agreement',
    category: 'warranty_data',
    placeholder: 'Upload Fotokopi Perjanjian Kredit (Jika Over Kredit)',
  },
  {
    label: 'Dokumen PPJB (Jika Developer)',
    value: 'ppjb_document',
    category: 'warranty_data',
    placeholder: 'Dokumen PPJB (Jika Developer)',
  },
  {
    label: 'Fotokopi SPT/PPh21',
    value: 'tax_report',
    category: 'financial_data',
    placeholder: 'Upload Fotokopi SPT/PPh21',
  },
  {
    label: 'Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan',
    value: 'pay_slip',
    category: 'financial_data',
    placeholder: 'Upload Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan',
  },
  {
    label: 'Fotokopi R/K atau tabungan 1 Bulan Terakhir',
    value: 'account_statement',
    category: 'financial_data',
    placeholder: 'Upload Fotokopi R/K atau tabungan 1 Bulan Terakhir',
  },
  {
    label: 'Surat Keterangan/Rekomendasi Perusahaan',
    value: 'company_recommendation',
    category: 'financial_data',
    placeholder: 'Upload Surat Keterangan/Rekomendasi Perusahaan',
  },
  {
    label: 'File Kekurangan 1',
    value: 'additional_file_1',
    category: 'additional_data',
    placeholder: 'File Kekurangan 1',
  },
  {
    label: 'File Kekurangan 2',
    value: 'additional_file_2',
    category: 'additional_data',
    placeholder: 'File Kekurangan 2',
  },
];

export const contactField = [
  {
    label: 'Type Contact',
    value: 'contact_type',
    type: 'select',
    placeholder: 'Pilih Contact Type',
  },
  {
    label: 'Nama Lengkap',
    value: 'name',
    type: 'text',
    placeholder: 'Isi Nama Lengkap',
  },
  {
    label: 'Jenis Kelamin',
    value: 'gender',
    type: 'select',
    placeholder: 'Pilih Jenis Kelamin',
  },
  {
    label: 'Lahir',
    value: 'birth_date',
    type: 'date',
    placeholder: 'dd/mm/yyyy',
  },
  {
    label: 'Jabatan',
    value: 'position',
    type: 'text',
    placeholder: 'Isi Jabatan',
  },
  {
    label: 'Type Pekerjaan',
    value: 'employment_type',
    type: 'select',
    placeholder: 'Pilih Job Type',
  },
  {
    label: 'Perusahaan',
    value: 'company',
    type: 'text',
    placeholder: 'Isi Nama Perusahaan',
  },
  {
    label: 'Kategori',
    value: 'contact_category',
    type: 'select',
    placeholder: 'Pilih Kategori',
  },
  {
    label: 'Email',
    value: 'email',
    type: 'email',
    placeholder: 'Isi Email',
  },
  {
    label: 'Phone',
    value: 'phone',
    type: 'number',
    placeholder: '+62',
  },
  {
    label: 'NIK',
    value: 'nik',
    type: 'number',
    placeholder: 'Isi No KTP',
  },
];

export const contactSubDetailField = [
  {
    label: 'Phone',
    value: 'phone',
    type: 'Contact',
  },
  {
    label: 'Email',
    value: 'email',
    type: 'Contact',
  },
  {
    label: 'Type Contact',
    value: 'contact_type',
    type: 'Personal Information',
  },
  {
    label: 'KTP',
    value: 'nik',
    type: 'Personal Information',
  },
  {
    label: 'Birthday',
    value: 'birth_date',
    type: 'Personal Information',
  },
  {
    label: 'Gender',
    value: 'gender',
    type: 'Personal Information',
  },
  {
    label: 'Advisor',
    value: 'adviser',
    type: 'Personal Information',
  },
];

export const loanField = [
  {
    label: 'Jenis Kebutuhan',
    value: 'need_type',
    type: 'select',
    placeholder: 'Pilih Kebutuhan',
  },
  {
    label: 'Jenis Pinjaman Kredit',
    value: 'loan_type',
    type: 'select',
    placeholder: 'Pilih Produk',
  },
  {
    label: 'Nominal Penempatan',
    value: 'placement_amount',
    type: 'number',
    placeholder: 'Masukan Nominal Penempatan',
  },
  {
    label: 'Jangka Waktu Penempatan',
    value: 'placement_duration',
    type: 'select',
    placeholder: 'Pilih Jangka Waktu Penempatan',
  },
  {
    label: 'Nama Bilyet Deposito',
    value: 'deposit_certificate_name',
    type: 'select',
    placeholder: 'Pilih Nama Bilyet Deposito',
  },
  {
    label: 'Perpanjangan deposito',
    value: 'deposit_renewal',
    type: 'select',
    placeholder: 'Pilih Perpanjangan deposito',
  },
];

export const employmentInfoField = [
  {
    label: 'Pekerjaan Anda Sekarang',
    value: 'current_job',
    type: 'select',
    placeholder: 'Pilih Pekerjaan',
  },
  {
    label: 'Bentuk Perusahaan',
    value: 'company_type',
    type: 'select',
    placeholder: 'Pilih Bentuk Perusahaan',
  },
  {
    label: 'Nama Kantor/Nama Perusahaan',
    value: 'company_name',
    type: 'text',
    placeholder: 'Isi Nama Kantor',
  },
  {
    label: 'Bidang Usaha Perusahaan',
    value: 'business_field',
    type: 'select',
    placeholder: 'Pilih Bidang Usaha Perusahaan',
  },
  {
    label: 'Nomor Phone Kantor',
    value: 'company_phone_number',
    type: 'number',
    placeholder: 'Isi Nomor Phone Kantor',
  },
  {
    label: 'Email Kantor',
    value: 'company_email',
    type: 'email',
    placeholder: 'Isi Email Kantor',
  },
  {
    label: 'Alamat Kantor',
    value: 'company_address',
    type: 'textarea',
    placeholder: 'Isi Alamat Kantor',
  },
  {
    label: 'Jabatan Anda Sekarang',
    value: 'current_position',
    type: 'text',
    placeholder: 'Isi Jabatan',
  },
  {
    label: 'Lama Bekerja',
    value: 'years_of_experience',
    type: 'select',
    placeholder: 'Pilih Lama Bekerja',
  },
  {
    label: 'Penghasilan Perbulan',
    value: 'monthly_income',
    type: 'select',
    placeholder: 'Pilih Penghasilan',
  },
];

export const addressField = [
  {
    label: 'Alamat Lengkap (Jalan, Komplek, RT/RW)',
    value: 'street',
    type: 'text',
    placeholder: 'Isi Alamat Lengkap',
  },
  {
    label: 'Kode Pos',
    value: 'postal_code',
    type: 'number',
    placeholder: 'Isi Kode Pos',
  },
  {
    label: 'Provinsi',
    value: 'province',
    type: 'select',
    placeholder: 'Pilih Provinsi',
  },
  {
    label: 'Kab./Kota',
    value: 'regencies',
    type: 'select',
    placeholder: 'Pilih Kab./Kota',
  },
  {
    label: 'Kecamatan',
    value: 'district',
    type: 'select',
    placeholder: 'Pilih Kecamatan',
  },
  {
    label: 'Kelurahan',
    value: 'villages',
    type: 'select',
    placeholder: 'Pilih Desa/Kel.',
  },
];

export const assetsInfoField = [
  {
    label: 'Alamat Lengkap (Jalan, Komplek, RT/RW)',
    value: 'street',
    type: 'text',
    placeholder: 'Isi Alamat Lengkap',
  },
  {
    label: 'Kode Pos',
    value: 'postal_code',
    type: 'number',
    placeholder: 'Isi Kode Pos',
  },
  {
    label: 'Provinsi',
    value: 'province',
    type: 'select',
    placeholder: 'Pilih Provinsi',
  },
  {
    label: 'Kab./Kota',
    value: 'regencies',
    type: 'select',
    placeholder: 'Pilih Kab./Kota',
  },
  {
    label: 'Kecamatan',
    value: 'district',
    type: 'select',
    placeholder: 'Pilih Kecamatan',
  },
  {
    label: 'Kelurahan',
    value: 'villages',
    type: 'select',
    placeholder: 'Pilih Desa/Kel.',
  },
  {
    label: 'Harga/Nilai Jaminan',
    value: 'price',
    type: 'number',
    placeholder: 'Isi Harga',
  },
];

export const additionalInfoField = [
  {
    label: 'Jenis Kelamin',
    value: 'gender',
    type: 'select',
    placeholder: 'Pilih Jenis Kelamin',
  },
  {
    label: 'Tanggal Lahir',
    value: 'birth_date',
    type: 'date',
    placeholder: 'Pilih Tanggal Lahir',
  },
  {
    label: 'Status Pernikahan',
    value: 'marital_status',
    type: 'select',
    placeholder: 'Pilih Status Pernikahan',
  },
  {
    label: 'Jenis Perkawinan',
    value: 'marriage_type',
    type: 'select',
    placeholder: 'Pilih Jenis Perkawinan',
  },
  {
    label: 'Jumlah Tanggungan',
    value: 'number_of_dependents',
    type: 'select',
    placeholder: 'Pilih Jumlah Tanggungan',
  },
  {
    label: 'Pendidikan Terakhir',
    value: 'last_education',
    type: 'select',
    placeholder: 'Pilih Pendidikan',
  },
  {
    label: 'Status Kepemilikan Rumah',
    value: 'home_ownership_status',
    type: 'select',
    placeholder: 'Pilih Kepemilikan Rumah',
  },
  {
    label: 'No. Telepon Rumah',
    value: 'home_phone_number',
    type: 'number',
    placeholder: 'No. Telepon Rumah',
  },
  {
    label: 'Nama Gadis Ibu Kandung',
    value: 'mother_maiden_name',
    type: 'text',
    placeholder: 'Nama Gadis Ibu Kandung',
  },
  {
    label: 'Lama Menempati',
    value: 'length_of_residence',
    type: 'select',
    placeholder: 'Pilih Lama Menempati',
  },
  {
    label: 'Berapa nilai angsuran yang ingin bapak/ibu dibayar perbulannya?',
    value: 'desired_monthly_installment',
    type: 'number',
    placeholder: 'Isi nilai angsuran yang diinginkan',
  },
  {
    label: 'Apakah ada pilihan bank lain yang ingin digunakan oleh bapak/ibu?',
    value: 'preferred_bank',
    type: 'text',
    placeholder: 'Isi Nama Pilihan Bank',
  },
  {
    label:
      'Apakah ada pengalaman yang tidak menyenangkan dengan Bank yang pernah dialami oleh bapak/ibu?',
    value: 'unpleasant_bank_experience',
    type: 'text',
    placeholder: 'Isi Pengalaman yang tidak menyenangkan dengan Bank',
  },
  {
    label: 'Berapa total penjualan (omset) bapak/ibu perbulannya?',
    value: 'monthly_sales_revenue',
    type: 'number',
    placeholder: 'Isi total penjualan perbulan',
  },
  {
    label: 'Ekspansi bisnis apa yang sedang direncanakan bapak/ibu?',
    value: 'business_expansion_plan',
    type: 'text',
    placeholder: 'Isi Ekspansi Bisnis',
  },
  {
    label:
      'Berapa lama Terms of Payment dari Customer dan Terms of Payment ke Supplier?',
    value: 'payment_terms',
    type: 'text',
    placeholder: 'Isi jangka waktu Terms Of Payment',
  },
  {
    label: 'Apakah ada pendapatan lain seperti pendapatan sewa ataupun bisnis?',
    value: 'additional_income',
    type: 'text',
    placeholder: 'Isi Pendapatan Lain',
  },
  {
    label: 'Berapa total pendapatan gaji dan tunjangan bapak/ibu perbulannya?',
    value: 'monthly_salary_and_allowance',
    type: 'number',
    placeholder: 'Isi Total Pendapatan Gaji dan Tunjangan',
  },
];

export const reviewField = [
  {
    label: 'Review oleh Loan Advisior',
    value: 'review',
    type: 'textarea',
    placeholder: 'Tulis Review',
  },
];

export const bankOfficerField = [
  {
    label: 'Bank',
    value: 'bank',
    type: 'select',
    placeholder: 'Pilih Bank',
  },
  {
    label: 'Product',
    value: 'product',
    type: 'select',
    placeholder: 'Pilih Produk',
  },
  {
    label: 'Wilayah Bank',
    value: 'region',
    type: 'select',
    placeholder: 'Pilih Wilayah Bank',
  },
  {
    label: 'Bank Officer',
    value: 'bank_officer',
    type: 'select',
    placeholder: 'Pilih Bank Officer',
  },
];

export const productAddField = [
  {
    label: 'Nama Product',
    value: 'product_name',
    type: 'text',
    placeholder: 'Isi Nama Product',
  },
  {
    label: 'Pilih Kategori',
    value: 'product_category',
    type: 'select',
    placeholder: 'Pilih Kategori',
  },
];

export const productAddCategoryField = [
  {
    label: 'Nama Kategori',
    value: 'product_category_name',
    type: 'text',
    placeholder: 'Isi Nama Kategori',
  },
  {
    label: 'Gambar/Icon Kategori',
    value: 'product_category_icon',
    type: 'file',
    placeholder: 'Upload Gambar/Icon Kategori',
  },
];
