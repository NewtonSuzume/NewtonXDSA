import { useTheme } from "@/library/context";
import { ViewProps, View as BASISView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type GradientViewProps = ViewProps & {colors: readonly [string, string, ...string[]], locations?: readonly [number, number, ...number[]]}

export function SKGradientBG(props: GradientViewProps) {
    let {style, ...other} = props
    let theme = useTheme() 
    
    return (
        <LinearGradient colors={props.colors} locations={props.locations} style={[{flex: 1, paddingHorizontal: 20}, style]}>
            {props.children}
        </LinearGradient>
    )
}

export function SKBGView(props: ViewProps) {


    let {style, ...other} = props
    let theme = useTheme()


    return (

        <BASISView style={[{backgroundColor: theme.bg.rgba(), flex: 1, paddingHorizontal: 20}, style]} {...other}>
            {props.children}
        </BASISView>
    
    )

}

export function SKFGView(props: ViewProps) {


    let {style, ...other} = props
    let theme = useTheme()


    return (

        <BASISView style={[{backgroundColor: theme.fg.rgba()}, style]} {...other}>
            {props.children}
        </BASISView>
    
    )

}

export function SKBlockView(props: ViewProps) {


    let {style, ...other} = props
    let theme = useTheme()


    return (

        <BASISView style={[{backgroundColor: theme.fg.rgba(), borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, overflow: 'hidden'}, style]} {...other}>
            {props.children}
        </BASISView>
    
    )

}

export function SKRowView(props: ViewProps) {
    
    let {style, ...other} = props

    return (

        <BASISView style={[{flexDirection: 'row', alignItems: 'center'}, style]} {...other}>
            {props.children}
        </BASISView>
    
    )
}

export function SKMGView(props: ViewProps) {


    let {style, ...other} = props
    let theme = useTheme()


    return (

        <BASISView style={[{backgroundColor: theme.mg.rgba()}, style]} {...other}>
            {props.children}
        </BASISView>
    
    )

}