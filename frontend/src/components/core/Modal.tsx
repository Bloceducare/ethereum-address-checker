import { Fragment } from 'react'
import { IModal } from '../../interfaces'
import Button from './Button'

const Modal = ({ address, result, showModal, setShowModal }: IModal) => {
    console.log("resultresult: ", result);
    
    return (
        <Fragment>
            {showModal && (
                <div className="p-5 justify-center items-center flex overflow-x-hidden overflow-y-auto bg-[#5a99afa2] fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative mx-auto md:max-w-[500px]">
                        <div className="rounded-[30px] px-6 py-10 w-full font-mono shadow-lg relative bg-[#FFFFFF] outline-none focus:outline-none">
                            This address <span className="md:break-words">{address ?? "0x0"}</span> is a type of {result?.type === "EOA" ? (<b>Externally Owned Account</b>) : result?.type === "contract" ? (<b>Contract Account</b>) : (<b>No type for this address!</b>)}

                            <div className="flex justify-end mt-16">
                                <Button
                                    loading={false}
                                    copy={"Close"}
                                    onClick={setShowModal}
                                />
                            </div>
                        </div>
                    </div>
                </div>)}
        </Fragment>
    )
}

export { Modal as default }