import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';

const NavPage = ({ links, entityName, subName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const isActive = (path) => location.pathname === path;
  const isBasePage = links.some((link) => location.pathname === link.to);
  const isUpdatePage = location.pathname.endsWith('/update');
  const isAddPage = location.pathname.endsWith('/add');
  const isAddCategoryPage = location.pathname.endsWith('/add-category');
  const isDetailPage = location.pathname.endsWith('/detail');

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className={`${isSidebarOpen ? 'w-[calc(100%-55px)]' : 'w-full '} flex fixed z-50 bg-white border-b-[1px] lg:w-[calc(100%-160px)] xl:w-[calc(1348px-210px)]  space-x-1  ${
          isBasePage
            ? '  justify-center'
            : 'justify-normal px-3 xl:px-6 h-[63px]'
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
            <div className='text-md flex justify-center lg:text-xl py-2 mt-1 mb-0.5 space-x-3 items-center'>
              <FaArrowAltCircleLeft
                onClick={handleBack}
                className='h-8 w-8 text-[#1cabe6] cursor-pointer'
              />
              <div>
                {isAddPage
                  ? `Add ${subName}`
                  : isUpdatePage
                    ? `Edit ${entityName}`
                    : isAddCategoryPage
                      ? 'Add Category'
                      : `${subName} Detail`}
              </div>
            </div>
            {!isUpdatePage &&
              !isAddPage &&
              !isDetailPage &&
              !isAddCategoryPage && (
                <div className='hidden md:flex justify-between py-2 mt-1 mb-0.5 space-x-3 items-center'>
                  <Link to={`${location.pathname}/update`}>
                    <Button
                      label={`Edit ${entityName}`}
                      icon='pi pi-pen-to-square'
                      size='small'
                      className=' py-1.5 bg-[#0c2f3e] text-white px-3 text-md'
                    />
                  </Link>
                  {entityName === 'Product' && (
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
  entityName: PropTypes.string.isRequired,
  subName: PropTypes.string.isRequired,
};

export default NavPage;
