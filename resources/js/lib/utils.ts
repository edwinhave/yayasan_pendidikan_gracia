import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTruncatedChar = (text: string) => {
    const formatedChar = text;
    return formatedChar.length >= 30 ? `${formatedChar.substring(0, 30)}...` : formatedChar;
};

export const checkTruncatedChar = (text: string) => {
    const formatedChar = text;
    return formatedChar.length <= 30;
};
