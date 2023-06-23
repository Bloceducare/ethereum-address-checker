import { ChangeEvent, SyntheticEvent } from "react";

export interface IForm {
    loading: boolean;
    handleSubmit: ((e: SyntheticEvent) => Promise<void>);
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    address: string;
}

export interface IResult {
    address: string;
    type: string
}

export interface IModal {
    address: string;
    result: IResult | undefined;
    showModal: boolean;
    setShowModal: () => void;
}