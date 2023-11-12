import type {ReactNode} from "react";


export const Columns = (children: ReactNode, count = 1) => {
    return(
        <div className={`grid grid-cols-[${count}]`}>
            {children}
    </div>
    )
}