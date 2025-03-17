import { ReactNode } from "react";
import { Text, SubText, BoldText } from "@/library/bases/ThemedText";
import { FGView } from "@/library/bases/ThemedViews";
import { View } from "react-native";

export interface SKBlockProps {
    title: string,
    subtitle?: string,
    children?: ReactNode
}

export default function SKBlock({title, subtitle, children}: SKBlockProps) {

    return (
        <FGView style={{padding: 15, borderRadius: 15, marginBottom: 10}}>
            <BoldText style={{fontSize: 18}}>{title}</BoldText>
            {subtitle ? <SubText style={{marginTop: 2}}>{subtitle}</SubText> : null}
            <View style={{marginTop: 2}}>{children}</View>
        </FGView>
    )

}
