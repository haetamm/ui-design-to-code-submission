import React, { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { loanLink } from '../utils/loanNavLink';
import '../styles/pages/loan.scss';
import { Helmet } from 'react-helmet-async';

const LoanPage = () => {
  const stepperRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>Edit Application | Loan Market</title>
        <meta name="description" content="Edit Application page" />
      </Helmet>
      <div className="w-full flex justify-center">
        <Stepper
          ref={stepperRef}
          style={{ flexBasis: '100vw' }}
          headerPosition="bottom"
          linear={true}
        >
          {loanLink.map((data, index) => (
            <StepperPanel key={index} header={data.header}>
              <div className="flex pt-4 px-1 xs:px-3 justify-between items-center bg-transparent">
                <Button
                  icon="pi pi-arrow-left"
                  className="h-10 w-10 bg-[#1cabe6] text-white rounded-full"
                  iconPos="left"
                  onClick={() => {
                    if (index > 0) stepperRef.current.prevCallback();
                  }}
                  disabled={index === 0}
                />
                <div className="text-center text-black">
                  <div className="text-md lg:text-2xl font-bold">
                    {data.title}
                  </div>
                  <p className="text-sm lg:text-md">{data.subtitle}</p>
                </div>
                <Button
                  icon="pi pi-arrow-right"
                  className="h-10 w-10 bg-[#1cabe6] text-white rounded-full"
                  iconPos="right"
                  onClick={() => {
                    if (index < loanLink.length - 1)
                      stepperRef.current.nextCallback();
                  }}
                  disabled={index === loanLink.length - 1}
                />
              </div>
              <div className=" mt-5 px-3">{data.content}</div>
            </StepperPanel>
          ))}
        </Stepper>
      </div>
    </>
  );
};

export default LoanPage;
