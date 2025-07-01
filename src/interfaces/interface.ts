import type { FormEvent } from "react";

export type InputProps = {
    alt: string;
    placeHolder?: string;
    aria: string;
    name?: string;
    label?: string;
    callback: (event: FormEvent<HTMLInputElement>) => void,
    children?:React.ReactNode
}