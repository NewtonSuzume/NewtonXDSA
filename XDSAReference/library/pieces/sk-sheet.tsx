import { ReactNode } from "react";
import { FGView } from "@/library/bases/ThemedViews";

export interface SKSheetProps {

    children: ReactNode,

}

export default function SKSheet({children}: SKSheetProps) {

    return (
        
        <FGView style={{borderRadius: 15, padding: 15}}>

            {children}

        </FGView>

    )

}