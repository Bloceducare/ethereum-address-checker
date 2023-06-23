// import classnames from 'classnames';
import React, { Fragment } from 'react';
// import { BounceLoader } from 'react-spinners';

interface IProps {
  loading?: boolean;
  loadingCopy?: string;
  copy: string;
  onClick?: any
}
const Button = ({ loading, loadingCopy, copy, onClick }: IProps) => {
  const btnClasses = [
    'px-8',
    'rounded',
    'py-3',
    'bg-blue_deep',
    'text-white',
    'font-bold',
    'flex',
    'items-center',
    'justify-center',
  ];
  const btnClassnames = {
    'no-events': loading,
    'pointer-events': !loading,
  };

  return (
    <Fragment>
      <button
        onClick={onClick}
        disabled={loading}
        type={'submit'}
        className={'bg-blue_deep text-white py-1 px-4 rounded'}
      >
        {/* <BounceLoader color={'#eaf7ff'} loading={loading} size={20} /> */}
        {loading && <div className="mr-2 md:mr-3" />}
        <span>{loading ? loadingCopy : copy}</span>
      </button>
    </Fragment>
  );
};

export { Button as default };
