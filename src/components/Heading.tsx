import type {ReactNode} from "react";

const getConditionalHeaderStyle = (size: HeaderLevel) => {
    switch (size) {
        case 'sm': return 'text-sm'
        case 'md': return 'text-md'
        case 'lg': return 'text-lg'
        case 'xl': return 'text-xl'
        case 'xl2': return 'text-xl2'
        case 'xl3': return 'text-xl3'
        case 'xl4': return 'text-xl4'
    }
}

export const Heading = ({children, level, size}: HeaderType) => {
    const Element = level;
    return(
        <Element className={getConditionalHeaderStyle(size)}>
            {children}
        </Element>
    )
}

export default Heading

type HeaderType = {
    readonly children: ReactNode;
    readonly level: "h1" | "h2" | "h3" | "h4";
    readonly size: HeaderLevel
}

type HeaderLevel = "xs" | "sm" | "md" | "lg" | "xl" | 'xl2' | 'xl3' | 'xl4'