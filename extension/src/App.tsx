import React, { ChangeEvent, Fragment, SyntheticEvent, useState } from 'react';
import { BounceLoader } from "react-spinners";
import axios from "axios";
import { ethers } from "ethers";

interface IResult {
  address: string;
  type: string
}

function App() {
  const [address, setAddress] = useState<string>("");
  const [result, setResult] = useState<IResult>();
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  // checksum of an address
  const [isValidAddress, setIsValidAddress] = useState<boolean>(false);

  const isTokenAddressValid = (addr: any) => {
    addr && !ethers.isAddress(addr)
      ? setIsValidAddress(false)
      : setIsValidAddress(true);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (isValidAddress) {
        const { data } = await axios.get(
          `https://addr-checkr.onrender.com/check?address=${address}`
        );
        setAddress("");
        setShow(true);
        setResult(data);
        console.log("data: ", data);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="relative">
        <div className="header__main">
          <div className="header__main__child">
            Ethereum Address Checker
          </div>
        </div>

        <div className="main__content">
          <p className="main__content__paragraph">
            Check Ethereum address type with ease.
          </p>

          <form className="main__content__form" onSubmit={handleSubmit}>
            <div className="main__content__form__control">
              <label className="">Address</label>
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  isTokenAddressValid(e.target.value);
                  setAddress(e.target.value);
                }}
                placeholder=" "
                value={address}
                className="main__content__form__input"
                disabled={loading}
              />
            </div>

            {!isValidAddress && address !== "" && (
              <p className="main__content__invalid__address">Invalid Address</p>
            )}

            <div className="main__content__form__button">
              <button
                disabled={loading}
                type={'submit'}
                className={`${(!address || !isValidAddress || loading) ?? 'main__content__form__button__disabled'} w-full`}
              >
                <BounceLoader color={'#eaf7ff'} loading={loading} size={20} />
                {loading && <div className="main__content__form__button__loader" />}
                <span>{loading ? "Checking..." : "Check"}</span>
              </button>
            </div>
          </form>

          {show && (
            <div className="main__content__alert">
              This address{" "}
              <span className="">{address ?? "0x0"}</span> is a
              type of{" "}
              {result?.type === "EOA" ? (
                <strong>Externally Owned Account</strong>
              ) : result?.type === "contract" ? (
                <strong>Contract Account</strong>
              ) : (
                <strong>invalid address!</strong>
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
