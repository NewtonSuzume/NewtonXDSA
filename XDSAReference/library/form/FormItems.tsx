import { useTheme } from "@/library/context";
import { Color, ThemeColors } from "@/library/theme/basethemes";
import { Pressable, Switch, SwitchChangeEvent, TextInput, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import { SKBoldText, SKSubText, SKText } from "../bases/ThemedText";
import { ReactNode, useEffect, useState } from "react";
import Animated, { FadeIn, FadeInLeft, FadeOut, FadeOutRight } from "react-native-reanimated";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { navigate } from "expo-router/build/global-state/routing";
import { Href, Link, RelativePathString } from "expo-router";
import Slider from '@react-native-community/slider'
import { LinearGradient } from "expo-linear-gradient";

export type FormEnumObject = {
    value: any,
    title: string,
    component?: ({color}: {color: string}) => ReactNode
}

export function SKFGViewForm(props: ViewProps & {subtitle?: string} ) {


    let {style, ...other} = props
    let theme = useTheme()


    return (

        <>

            {

                props.subtitle ?

                <SKText style={{fontSize: 13, marginBottom: 5, marginLeft: 15, color: theme.rule.rgba()}}>
                    {props.subtitle.toUpperCase()}
                </SKText>

                :

                <></>
                
            }

            <View style={[{backgroundColor: theme.fg.rgba(), borderRadius: 10, overflow: 'hidden', marginBottom: 20}, style]} {...other}>
                {props.children}
            </View>

        </>

    
    )

}

export function SKFormBasis({children, style}: {children: ReactNode, style?: ViewStyle}) {
    
    const theme = useTheme();

    return (
        <View style={{
            paddingLeft: 15
        }}>

            <View style={{

                borderBottomColor: theme.rule.rgba(),
                borderBottomWidth: 1,
                paddingRight: 15,
                flexDirection: 'row',
                alignItems: 'center',
                ...style

            }}>

                {children}

            </View>

        </View>

    )

}

export function SKFormTextField({placeholder, onChange, text, autoCorrect = true}: {autoCorrect?: boolean, placeholder: string, onChange?: (text: string) => void, text?: string}) {

    const theme = useTheme();

    return (
        <SKFormBasis>
            <TextInput spellCheck={autoCorrect} autoCorrect={autoCorrect} keyboardType={autoCorrect ? "default" : "visible-password"} autoCapitalize={autoCorrect ? "sentences" : "none"} onChangeText={onChange} value={text} placeholder={placeholder} style={{flex: 1, paddingVertical: 10, fontSize: 16, color: theme.main.rgba()}}>

            </TextInput>
        </SKFormBasis>
    )

}

export function SKFormNumField({title, onChange, value, min, max, units}: {min?: number, max?: number, title: string, onChange?: (value: number) => void, value: number, units?: string}) {

    const [sv, setSv] = useState<string>(value === 0 ? "" : (value).toString());
    const theme = useTheme();
    
    const errorcolor = new Color(255, 50, 50, 1);
    let [currentColor, setCurrentColor] = useState<Color>(theme.main);


    return (
        <SKFormBasis>

            <SKText style={{fontSize: 16}}>
                {title}
            </SKText>

            <View style={{flex: 1, paddingLeft: 15}}>
            <TextInput 



                onChangeText={
                    (x) => {
                    
                        const cleanedOutput: string = x.replace(/[^-\d.\s]|(?<=\.\d*)\./g, '')
                        const conversion = parseFloat(x);

                        if (isNaN(conversion)) {

                            onChange?.(0);
                            setSv(cleanedOutput);

                        }

                        else {


                            if (min !== undefined ? conversion < min : false) {
                                setCurrentColor(errorcolor);
                            }
                            else if (max !== undefined ? conversion > max : false) {
                                setCurrentColor(errorcolor);
                            }
                            else {
                                setCurrentColor(theme.main);
                                onChange?.(conversion);
                            }

                            setSv(cleanedOutput);

                        }

                    }
                } 

                value={sv} 

                placeholder="0"

                style={{

                    marginVertical: 7, 
                    textAlign: "right",
                    paddingVertical: 3,
                    paddingHorizontal: 5,
                    width: "100%",
                    fontSize: 16, 
                    color: currentColor.rgba(),
                    marginLeft: "auto",
                    
                }}

                keyboardType="numeric"

            />

            </View>
            <SKSubText style={{fontSize: 17}}>{units}</SKSubText>
        </SKFormBasis>

    )

}

export function SKFormSwitch({title, onChange, value}: {title: string, onChange?: (x: boolean) => void, value?: boolean}) {

    const theme = useTheme();

    return (
        <SKFormBasis>
            <SKText style={{paddingVertical: 10, fontSize: 16}}>{title}</SKText>

            <Switch onChange={(x) => onChange?.(x.nativeEvent.value)} value={value} trackColor={{
                true: theme.acc.rgba(),
                false: theme.mg.rgba(),
            }} 
            style={{marginLeft: 'auto'}}>

            </Switch>
        </SKFormBasis>
    )

}

export function SKFormEnum({title, items, onChange, defaultValue = 0}: {items: FormEnumObject[], title: string, onChange?: (v: any) => void, defaultValue?: any}) {

    const theme = useTheme();
    const [val, setVal] = useState<number>(defaultValue);
    
    useEffect(() => {

        onChange?.(defaultValue);

    }, [])

    const tp = new Color(theme.acc.r, theme.acc.g, theme.acc.b, 0.2)

    const disabledfg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.5);
    const disabledbg = new Color(theme.main.r, theme.main.g, theme.main.b, 0.05);

    return (

        <SKFormBasis style={{flexDirection: "column", alignItems: 'flex-start'}}>

            <SKText style={{paddingTop: 10, fontSize: 16}}>{title}</SKText>
            <View style={{flexDirection: "row", gap: 10, width: "100%", overflow: 'hidden', marginBottom: 5}}>

                {

                    items.map((x: FormEnumObject) => {

                        return (
                            <Pressable 

                                key={x.value}

                                onPress={() => {
                                    
                                    setVal(x.value);
                                    onChange?.(x.value);
                                  
                                }} 
                                
                                style={{ 

                                    backgroundColor: (val === x.value ? tp.rgba() : disabledbg.rgba()),
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginVertical: 10,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    borderRadius: 10
                                
                                }}
                            >

                                {x.component?.({color: (val === x.value ? theme.acc.rgba() : disabledfg.rgba())})}
                                <SKText style={{textAlign: 'center', color: (val === x.value ? theme.acc.rgba() : disabledfg.rgba())}}>{x.title}</SKText>
        
                            </Pressable>
                        )

                    })
                }
                
            </View>

        </SKFormBasis>

    )

}

export function SKFormSlider({title, onChange, value, items}: {title: string, onChange?: (x: number) => void, value?: number, items: FormEnumObject[]}) {

    const theme = useTheme();

    return (
        <SKFormBasis style={{flexDirection: 'column'}}>
            
            <SKText style={{paddingTop: 10, fontSize: 16, alignSelf: "flex-start"}}>{title}</SKText>
            <View style={{flexDirection: 'row', width: "100%", alignItems: 'center', paddingTop: 15}}>
                <SKText>{items[0].title}</SKText>
                <SKText style={{marginLeft: 'auto'}}>{items.splice(-1)[0].title}</SKText>
            </View>
            <Slider onValueChange={x => onChange?.(x)} value={value} style={{width:"100%"}} minimumTrackTintColor={theme.acc.rgba()} step={1} minimumValue={items[0].value as number} maximumValue={items.slice(-1)[0].value+1 as number}></Slider>

        </SKFormBasis>
    )

}

export function SKFormGradientScaleSlider({title, onChange, value, items}: {title: string, onChange?: (x: number) => void, value?: number, items: FormEnumObject[]}) {


    return (
        <SKFormBasis style={{flexDirection: 'column'}}>
            
            <SKText style={{paddingTop: 10, fontSize: 16, alignSelf: "flex-start"}}>{title}</SKText>
            <View style={{flexDirection: 'row', width: "100%", alignItems: 'center', paddingTop: 15}}>
                <SKText>{items[0].title}</SKText>
                <SKText style={{marginLeft: 'auto'}}>{items.splice(-1)[0].title}</SKText>
            </View>
            <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  colors={["#FF3B30", "yellow", "#30D158"]} style={{width: "100%", marginBottom: 10, borderRadius: 50, paddingTop: 2,paddingHorizontal: 5, marginTop: 10}}>
                <Slider thumbTintColor="white" onValueChange={x => onChange?.(x)} value={value} style={{width:"100%"}} minimumTrackTintColor="transparent" maximumTrackTintColor="transparent" step={1} minimumValue={items[0].value as number} maximumValue={items.slice(-1)[0].value+1 as number}></Slider>
            </LinearGradient>
        </SKFormBasis>
    )

}

export function SKFormCounter({title, onChange, value}: {title: string, onChange?: (x: number) => void, value?: number}) {

    const [counterval, setCVal] = useState(value ? value : 0)

    useEffect(() => {onChange?.(counterval)}, [counterval]) 

    return (
        <SKFormBasis style={{flexDirection: 'column'}}>
            
            <SKText style={{paddingTop: 10, fontSize: 16, alignSelf: "flex-start"}}>{title}</SKText>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 7}}>
                <TouchableOpacity onPress={() => {setCVal(counterval-1 < 0 ? 0 : counterval-1 )}} hitSlop={40}><TabBarIcon style={{color: "#ff3b30"}} name={"circle-minus"}/></TouchableOpacity> 
                <SKBoldText style={{fontSize: 20, width: 50, marginHorizontal: 20, textAlign: 'center'}}>{counterval}</SKBoldText>
                <TouchableOpacity onPress={() => {setCVal(counterval+1)}} hitSlop={40}><TabBarIcon name={"circle-plus"} style={{color: "#34c759"}}/></TouchableOpacity> 
            </View>
        </SKFormBasis>
    )

}

export function SKFormNavigation({title, path}: {title: string, path: Href}) {

    const theme = useTheme();

    return (
        <Link href={path} asChild>
            <TouchableOpacity>
                <SKFormBasis>
                    <SKText style={{paddingVertical: 10, fontSize: 16}}>{title}</SKText>
                    <TabBarIcon name="chevron-right" style={{color: theme.rule.rgba(), marginLeft: "auto", fontSize: 15}}/>
                </SKFormBasis>
            </TouchableOpacity>
        </Link>
    )
    
}