import React, { ChangeEvent, Fragment, SyntheticEvent, useState } from 'react'
import { Modal } from '../components/core';
import { Form } from '../components/Form';
import { Navbar } from '../components/Navbar';
import axios from "axios";
import { IResult } from '../interfaces';

const CheckAddress = () => {
    const [address, setAddress] = useState<string>("");
    const [result, setResult] = useState<IResult>();
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            const { data } = await axios.get(`https://addr-checkr.onrender.com/check?address=${address}`)
            // setAddress("");
            setShowModal(true);
            setResult(data);
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Fragment>
            <div className="font-mono bg-blue_dark relative">
                <Navbar />

                <div className="text-grey flex flex-col justify-center items-center min-h-[calc(100vh-61px)] md:min-h-[calc(100vh-69px)] w-100 mx-7 md:mx-auto">
                    <div className="border border-blue_deep p-5 md:p-12 rounded-[12px]">
                        <h3 className="text-3xl md:text-4xl font-medium text-center">
                            ADDR CHECKR
                        </h3>
                        <p className="text-lg leading-tight font-normal my-2 text-center">
                            Check Ethereum address type with ease.
                        </p>

                        <Form
                            loading={loading}
                            address={address}
                            handleSubmit={handleSubmit}
                            handleChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <Modal
                address={address}
                result={result}
                showModal={showModal}
                setShowModal={() => setShowModal(false)}
            />
        </Fragment>
    )
}

export default CheckAddress