import { TabBarIcon } from "../../components/navigation/TabBarIcon";
import { ComponentProps } from "react";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SKCustomColorText } from "../bases/ThemedText";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@/library/context";
import { Color } from "@/library/theme/basethemes";

export type IconButtonStyles = {

    textSize?: number,
    iconSize?: number,
    paddingHorizontal?: number,
    
    marginHorizontal?: number,
    marginVertical?: number,

    flex?: number
    color?: Color


}

export type BlockButtonStyles = 
IconButtonStyles &
{

    paddingVertical?: number

}

const IconButtonDefaults: BlockButtonStyles = {

    textSize: 16,
    iconSize: 16,
    paddingHorizontal: 5,

    marginHorizontal: 0,
    marginVertical: 0,

}

const BlockButtonDefaults: BlockButtonStyles = {
    ...IconButtonDefaults,
    paddingHorizontal: 20,
    paddingVertical: 8
}


export function SKIconButton({style, icon, text, enabled = true, onPress}: {enabled?: boolean, style?: IconButtonStyles, icon?: ComponentProps<typeof FontAwesome6>['name'], text?: string, onPress?: () => void}) {

    style = {...IconButtonDefaults, ...style}

    const theme = useTheme()
    const color = style.color ? style.color : theme.acc
    const disabledfg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.5);

    return (
        <TouchableOpacity disabled={!enabled} style={{flex: style.flex, flexDirection: 'row', alignItems: 'center', paddingVertical: 8, marginVertical: style.marginVertical, marginHorizontal: style.marginHorizontal}} onPress={onPress}>

            <TabBarIcon color={enabled ? color.rgba() : disabledfg.rgba()} name={icon} size={style.iconSize}/>
            <SKCustomColorText color={enabled ? color.rgba() : disabledfg.rgba()} style={{fontSize: 16, marginHorizontal: style.paddingHorizontal}}>{text}</SKCustomColorText>

        </TouchableOpacity>
    )

}

export function SKBlockIconButton({enabled = true, style, icon, text, onPress, onLongPress}: {enabled?: boolean, style?: BlockButtonStyles, icon: ComponentProps<typeof FontAwesome6>['name'], text: string, onPress?: () => void, onLongPress?: () => void}) {

    style = {...BlockButtonDefaults, ...style}

    const theme = useTheme()

    const color = style.color ? style.color : theme.acc
    const tp = new Color(color.r, color.g, color.b, 0.2)

    const disabledfg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.5);
    const disabledbg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.05);

    return (
        <TouchableOpacity onLongPress={onLongPress} onPress={onPress} disabled={!enabled} style={{marginVertical: style.marginVertical, marginHorizontal: style.marginHorizontal, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: (enabled ? tp.rgba() : disabledbg.rgba()), borderRadius: 10, paddingVertical: style.paddingVertical, paddingHorizontal: style.paddingHorizontal, flex: style.flex}}>

            <TabBarIcon color={enabled ? color.rgba() : disabledfg.rgba()} name={icon} size={style.iconSize}/>
            <SKCustomColorText color={enabled ? color.rgba() : disabledfg.rgba()} style={{fontSize: style.textSize, marginLeft: 10}}>{text}</SKCustomColorText>

        </TouchableOpacity>
    )

}

export function SKNeutralBlockIconButton({enabled = true, style, icon, text, onPress}: {enabled?: boolean, style?: BlockButtonStyles, icon: ComponentProps<typeof FontAwesome6>['name'], text: string, onPress?: () => void}) {

    style = {...BlockButtonDefaults, ...style}

    const theme = useTheme()

    const disabledfg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.5);
    const buttonbg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.1);

    return (

        <TouchableOpacity onPress={onPress} disabled={!enabled} style={{marginVertical: style.marginVertical, marginHorizontal: style.marginHorizontal, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: (buttonbg.rgba()), borderRadius: 10, paddingVertical: style.paddingVertical, paddingHorizontal: style.paddingHorizontal, flex: style.flex}}>

            <TabBarIcon color={ enabled ? theme.main.rgba() : disabledfg.rgba() } name={icon} size={style.iconSize}/>
            <SKCustomColorText color={ enabled ? theme.main.rgba() : disabledfg.rgba() } style={{fontSize: style.textSize, marginLeft: 10}}>{text}</SKCustomColorText>

        </TouchableOpacity>

    )

}