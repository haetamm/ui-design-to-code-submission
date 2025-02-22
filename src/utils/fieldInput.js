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
    value: 'type',
    type: 'text',
  },
  {
    label: 'Harga Unit',
    value: 'price',
    type: 'text',
  },
  {
    label: 'Type Property',
    value: 'type_product',
    type: 'text',
  },
  {
    label: 'Unit Property',
    value: 'unit',
    type: 'text',
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

export const uploadDocField = [
  {
    label: 'Fotokopi KTP Pemohon',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi KTP Pemohon',
  },
  {
    label: 'Fotokopi KTP Suami / Istri',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi KTP Suami / Istri',
  },
  {
    label: 'Fotokopi Kartu Keluarga',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi Kartu Keluarga',
  },
  {
    label: 'Fotokopi Akta Nikah/Cerai',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi Akta Nikah/Cerai',
  },
  {
    label: 'Fotokopi NPWP Pemohon',
    category: 'personal_data',
    placeholder: 'Upload Fotokopi NPWP Pemohon',
  },
  {
    label:
      'Akta Pisah Harta Notaril dan didaftarkan ke KUA atau catatan sipil (jika ada)',
    category: 'personal_data',
    placeholder:
      'Upload Akta Pisah Harta Notaril dan didaftarkan ke KUA atau catatan sipil (jika ada)',
  },
  {
    label: 'Fotokopii Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir',
    category: 'warranty_data',
    placeholder:
      'Upload Fotokopii Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir',
  },
  {
    label:
      'Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan',
    category: 'warranty_data',
    placeholder:
      'Upload Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan',
  },
  {
    label: 'Fotokopi Perjanjian Kredit (Jika Over Kredit)',
    category: 'warranty_data',
    placeholder: 'Upload Fotokopi Perjanjian Kredit (Jika Over Kredit)',
  },
  {
    label: 'Dokumen PPJB (Jika Developer)',
    category: 'warranty_data',
    placeholder: 'Dokumen PPJB (Jika Developer)',
  },
  {
    label: 'Fotokopi SPT/PPh21',
    category: 'financial_data',
    placeholder: 'Upload Fotokopi SPT/PPh21',
  },
  {
    label: 'Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan',
    category: 'financial_data',
    placeholder: 'Upload Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan',
  },
  {
    label: 'Fotokopi R/K atau tabungan 1 Bulan Terakhir',
    category: 'financial_data',
    placeholder: 'Upload Fotokopi R/K atau tabungan 1 Bulan Terakhir',
  },
  {
    label: 'Surat Keterangan/Rekomendasi Perusahaan',
    category: 'financial_data',
    placeholder: 'Upload Surat Keterangan/Rekomendasi Perusahaan',
  },
  {
    label: 'File Kekurangan 1',
    category: 'additional_data',
    placeholder: 'File Kekurangan 1',
  },
  {
    label: 'File Kekurangan 2',
    category: 'additional_data',
    placeholder: 'File Kekurangan 2',
  },
];

export const contactField = [
  {
    label: 'Type Contact',
    value: 'contact_type',
    type: 'select',
  },
  {
    label: 'Nama Lengkap',
    value: 'name',
    type: 'text',
  },
  {
    label: 'Jenis Kelamin',
    value: 'gender',
    type: 'select',
  },
  {
    label: 'Lahir',
    value: 'birth_date',
    type: 'date',
  },
  {
    label: 'Jabatan',
    value: 'position',
    type: 'text',
  },
  {
    label: 'Type Pekerjaan',
    value: 'employment_type',
    type: 'select',
  },
  {
    label: 'Perusahaan',
    value: 'company',
    type: 'text',
  },
  {
    label: 'Kategory',
    value: 'category',
    type: 'select',
  },
  {
    label: 'Email',
    value: 'email',
    type: 'email',
  },
  {
    label: 'Phone',
    value: 'phone',
    type: 'number',
  },
  {
    label: 'NIK',
    value: 'nik',
    type: 'text',
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
    placeholder: '',
  },
  {
    label: 'Jenis Pinjaman Kredit',
    value: 'loan_type',
    type: 'select',
    placeholder: 'Select Product',
  },
  {
    label: 'Nominal Penempatan',
    value: 'placement_amount',
    type: 'number',
    placeholder: 'Masukan Placement Amount',
  },
  {
    label: 'Jangka Waktu Penempatan',
    value: 'placement_duration',
    type: 'select',
    placeholder: 'Select Duration',
  },
  {
    label: 'Nama Bilyet Deposito',
    value: 'deposit_certificate_name',
    type: 'select',
    placeholder: 'Masukan Deposit Certificate Name',
  },
  {
    label: 'Perpanjangan deposito',
    value: 'deposit_renewal',
    type: 'select',
    placeholder: 'Select Renewal Option',
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
    type: 'text',
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
  },
  {
    label: 'Kode Pos',
    value: 'postal_code',
    type: 'text',
  },
  {
    label: 'Provinsi',
    value: 'province',
    type: 'select',
  },
  {
    label: 'Kab./Kota',
    value: 'regencies',
    type: 'select',
  },
  {
    label: 'Kecamatan',
    value: 'district',
    type: 'select',
  },
  {
    label: 'Kelurahan',
    value: 'villages',
    type: 'select',
  },
];

export const assetsInfoField = [
  {
    label: 'Alamat Lengkap (Jalan, Komplek, RT/RW)',
    value: 'street',
    type: 'text',
  },
  {
    label: 'Kode Pos',
    value: 'postal_code',
    type: 'text',
  },
  {
    label: 'Provinsi',
    value: 'province',
    type: 'select',
  },
  {
    label: 'Kab./Kota',
    value: 'regencies',
    type: 'select',
  },
  {
    label: 'Kecamatan',
    value: 'district',
    type: 'select',
  },
  {
    label: 'Kelurahan',
    value: 'villages',
    type: 'select',
  },
  {
    label: 'Harga/Nilai Jaminan',
    value: 'price',
    type: 'number',
  },
];
