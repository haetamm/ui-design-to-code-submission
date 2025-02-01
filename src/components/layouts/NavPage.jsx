import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';

const NavPage = ({ links, basePath, entityName }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const isBasePage = links.some((link) => location.pathname === link.to);
  const isUpdatePage = location.pathname === `${basePath}/${id}/update`;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className={`flex fixed z-50 bg-white w-full border-b-[1px] lg:w-[calc(100%-160px)] xl:w-[calc(1348px-210px)] h-50 space-x-1${
          isBasePage ? ' justify-center ' : 'justify-normal px-3 xl:px-6'
        }`}
      >
        {isBasePage &&
          links.map(({ to, label }, index) => (
            <div
              key={index}
              className={`font-bold text-md w-[140px] flex justify-center lg:text-lg pt-3 pb-1 mt-1 mb-0.5 ${
                isActive(to) ? ' border-b-2 border-[#1cabe6] ' : ''
              }`}
            >
              <Link
                to={to}
                className={`${isActive(to) ? 'text-[#1cabe6]' : ''}`}
              >
                {label}
              </Link>
            </div>
          ))}
        {!isBasePage && (
          <div className='flex justify-between w-full'>
            <div className='text-md flex justify-center lg:text-xl py-3 mt-1 mb-0.5 space-x-3 items-center'>
              <FaArrowAltCircleLeft
                onClick={handleBack}
                className='h-8 w-8 text-[#1cabe6] cursor-pointer'
              />
              <div>
                {!isUpdatePage ? `${entityName} Detail` : `Edit ${entityName}`}
              </div>
            </div>
            {!isUpdatePage && (
              <div className='hidden md:flex justify-between py-3 mt-1 mb-0.5 space-x-3 items-center'>
                <Link to={`${basePath}/${id}/update`}>
                  <Button
                    label={`${entityName} Produk`}
                    icon='pi pi-pen-to-square'
                    size='small'
                    className=' py-1.5 bg-[#0c2f3e] text-white px-3 text-md'
                  />
                </Link>
                {entityName === 'Bank' && (
                  <Button
                    label={`Delete ${entityName}`}
                    icon='pi pi-trash'
                    size='small'
                    className=' py-1.5 bg-red-500 text-white px-3 text-md'
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

NavPage.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  basePath: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
};

export default NavPage;
