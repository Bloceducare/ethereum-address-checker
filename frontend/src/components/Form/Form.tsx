import { IForm } from '../../interfaces'
import { Button } from '../core'

const Form = ({ loading, handleSubmit, handleChange, address }: IForm) => {
    return (
        <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mt-2 md:relative">
                <label className="md:hidden">Address</label>
                <input
                    onChange={handleChange}
                    placeholder=" "
                    value={address}
                    autoFocus
                    className="w-full border p-3 text-grey_dark border-blue_deep focus:outline-none rounded"
                    disabled={loading}
                />
                <label className="hidden md:block p-[13px] md:absolute left-0 top-0 ease-[cubic-bezier(0.25,0.1,0.25,1)] duration-200 opacity-50 bg-transparent pointer-events-none text-blue_deep">
                    Address
                </label>
            </div>

            <div className="mt-4 flex justify-end">
                <Button
                    loading={loading}
                    loadingCopy={"Checking..."}
                    copy={"Check"}
                />
            </div>
        </form>
    )
}

export { Form as default }