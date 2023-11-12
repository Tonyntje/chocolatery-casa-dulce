import type {ReactNode} from "react";

const Column = ({children, count = 1}: ColumnType) => {
    return(
        <div className={`grid grid-cols-${count} gap-8 w-full`}>
            {children}
        </div>
    )
}

export default Column

type ColumnType = {
    readonly children: ReactNode;
    readonly count: number;
}