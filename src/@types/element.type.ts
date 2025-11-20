import { ClassValue } from "clsx";
import { HTMLAttributes } from "react";

type Tx = HTMLDivElement | HTMLInputElement | HTMLImageElement | HTMLButtonElement
export interface TElement<T extends Tx = HTMLDivElement> extends Omit<HTMLAttributes<T>, 'className'> { className?: ClassValue }