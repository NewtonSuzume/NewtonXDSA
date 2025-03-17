import { useTheme } from "@/library/context";
import { TextProps, Text as BASISText } from "react-native";

interface CustomTextProps extends TextProps {
    color: string
}

type ThemedTextProps = TextProps & {override: boolean}

export function SKText(props: TextProps, numberOfLines?: number) {

    let {style, ...other} = props
    let theme = useTheme()

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: theme.main.rgba()}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}

export function SKBoldText(props: TextProps, numberOfLines?: number) {

    let {style, ...other} = props
    let theme = useTheme()

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: theme.main.rgba(), fontWeight: "bold"}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}

export function SKSubText(props: TextProps, numberOfLines?: number) {

    let {style, ...other} = props
    let theme = useTheme()

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: theme.sub.rgba()}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}

export function SKBoldSubText(props: TextProps, numberOfLines?: number) {

    let {style, ...other} = props
    let theme = useTheme()

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: theme.sub.rgba(), fontWeight: "bold"}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}



export function SKCustomColorText(props: CustomTextProps, numberOfLines?: number) {

    let {style, color, ...other} = props

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: color}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}

export function SKBoldCustomColorText(props: CustomTextProps, numberOfLines?: number) {

    let {style, color, ...other} = props 

    return (

        <BASISText numberOfLines={numberOfLines} style={[{color: color, fontWeight: "bold"}, style]} {...other}>
            {props.children}
        </BASISText>

    )

}

