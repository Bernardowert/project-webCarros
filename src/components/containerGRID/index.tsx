import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge";


interface ContainerProps{
    children: ReactNode;
    className?: string;
}

export function ContainerGRID({children, className}: ContainerProps){
    const defaultClass = "w-full max-w-ContainerGRID mx-auto px-4";
    const combinedClass = twMerge(defaultClass, className);
    return(
        <div className={combinedClass}>
             {children}
        </div>
    )
}