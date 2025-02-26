import AdditionalInfoSection from '../components/pages/loan/AdditionalInfoSection';
import AddressSection from '../components/pages/loan/AddressSection';
import ApplicationLetter from '../components/pages/loan/ApplicationLetter';
import AssetInfoSection from '../components/pages/loan/AssetInfoSection';
import BankOfficerSection from '../components/pages/loan/BankOfficerSection';
import CommingSoon from '../components/pages/loan/CommingSoon';
import DocUploadForm from '../components/pages/loan/DocUploadForm';
import EmploymentInfoSection from '../components/pages/loan/EmploymentInfoSection';
import LoanSection from '../components/pages/loan/LoanSection';
import ProductBankList from '../components/pages/loan/ProductBankList';
import ReviewSection from '../components/pages/loan/ReviewSection';

export const loanLink = [
  {
    header: 'Pinjaman',
    title: 'Pinjaman',
    subtitle: '',
    content: <LoanSection />,
  },
  {
    header: 'Pekerjaan',
    title: 'Pekerjaan',
    subtitle: '',
    content: <EmploymentInfoSection />,
  },
  {
    header: 'Alamat',
    title: 'Alamat',
    subtitle: '',
    content: <AddressSection />,
  },
  {
    header: 'Informasi Aset',
    title: 'Informasi Aset',
    subtitle: '',
    content: <AssetInfoSection />,
  },
  {
    header: 'Informasi Tambahan',
    title: 'Informasi Tambahan',
    subtitle: '',
    content: <AdditionalInfoSection />,
  },
  {
    header: 'Upload Dokumen',
    title: 'Upload Dokumen',
    subtitle: 'Silahkan upload dokumen yang dibutuhkan',
    content: <DocUploadForm />,
  },
  {
    header: 'Review',
    title: 'Review',
    subtitle: '',
    content: <ReviewSection />,
  },
  {
    header: 'Pilihan Produk & Bank',
    title: 'Pilihan Produk & Bank',
    subtitle: 'Silahkan pilih produk bank yang sesuai',
    content: <ProductBankList />,
  },
  {
    header: 'Bank Officer',
    title: 'Bank Officer',
    subtitle: '',
    content: <BankOfficerSection />,
  },
  {
    header: 'Surat Keterangan',
    title: 'Surat Keterangan',
    subtitle: '',
    content: <ApplicationLetter />,
  },
  {
    header: 'PDF CPA',
    title: 'PDF CPA',
    subtitle: '',
    content: <CommingSoon />,
  },
  {
    header: 'Summary',
    title: 'Summary',
    subtitle: '',
    content: <CommingSoon />,
  },
];
