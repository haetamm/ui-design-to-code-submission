import AddressSection from '../components/pages/loan/AddressSection';
import AssetInfoSection from '../components/pages/loan/AssetInfoSection';
import CommingSoon from '../components/pages/loan/CommingSoon';
import DocUploadForm from '../components/pages/loan/DocUploadForm';
import EmploymentInfoSection from '../components/pages/loan/EmploymentInfoSection';
import LoanSection from '../components/pages/loan/LoanSection';
import ProductBankList from '../components/pages/loan/ProductBankList';

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
    content: <CommingSoon />,
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
    content: <CommingSoon />,
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
    content: <CommingSoon />,
  },
  {
    header: 'Surat Keterangan',
    title: 'Surat Keterangan',
    subtitle: '',
    content: <CommingSoon />,
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
