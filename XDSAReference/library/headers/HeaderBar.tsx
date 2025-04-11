import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { ListRenderItem, Modal, Platform, Pressable, ScrollView, StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';



import { SKBGView, SKGradientBG } from '../bases/ThemedViews';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/library/context';
import { SKBoldText, SKText } from '../bases/ThemedText';
import { Color } from '@/library/theme/basethemes';
import { FlatList } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import { SKBlockIconButton, SKIconButton } from '../buttons/ThemedButton';

export type HeaderProps = {
    children?: ReactNode,
    interactions?: ReactNode,
    title: string,
}

export type HeadPropsGradient = HeaderProps & {gradientColors: [string, string, ...string[]], gradientLocations?: [number, number, ...number[]]}

export type ModalHeaderProps = {
  children?: ReactNode,

  interactionsL?: ReactNode,
  interactionsR?: ReactNode,
  needsSafeArea?: boolean,
  noScroll?: boolean,

  title: string
}

export type HeaderFlatListProps = ModalHeaderProps & {
  
  data: any[],
  renderItem: ({item}: any) => ReactElement,

}

export type SKListHeaderBarProps<T> = {
  
  title: string,
  headerButtons?: ReactNode
  handler: (data: T) => ReactNode,
  data: T[],

}

export type SKGradientListHeaderBarProps<T> = SKListHeaderBarProps<T> & {
  gradientColors: [string, string, ...string[]],
  gradientLocations?: [number, number, ...number[]]
}


export function SKRootFlatList<Type>({title, headerButtons, handler, data}: SKListHeaderBarProps<Type>) {

  return (
    <SKRootHeaderBar title={title} interactions={headerButtons}>
      
      {
        data.map((i: Type) => handler(i))
      }

    </SKRootHeaderBar>
  )

}

export function SKRootFlatListGradient<Type>({title, headerButtons, handler, data, gradientColors, gradientLocations}: SKGradientListHeaderBarProps<Type>) {

  return (
    <SKRootHeaderBarGradient gradientColors={gradientColors} gradientLocations={gradientLocations} title={title} interactions={headerButtons}>
      
      {
        data.map((i: Type) => handler(i))
      }

    </SKRootHeaderBarGradient>
  )

}



export function SKRootHeaderBar({ children, title, interactions }: HeaderProps) {

  const ABlurView = Animated.createAnimatedComponent(BlurView);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const textStyle = useAnimatedStyle(() => {

    return {
      opacity: interpolate(scrollOffset.value, [0, 0, 40], [1, 1, 0])
    }

  })

  const headerTextStyles = useAnimatedStyle(() => {

    return {
      opacity: interpolate(scrollOffset.value, [-40, 0, 40], [0, 0, 1], Extrapolation.CLAMP)
    }

  })



  return (
  <SKBGView style={{paddingHorizontal:0}}>

      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} style={{paddingHorizontal: 15, flexGrow: 1}} contentContainerStyle={{paddingTop: insets.top+50, paddingBottom: 15}}>


          <Animated.Text style={[{fontWeight: "600", fontSize: 50, color: theme.main.rgba()}, textStyle]}>{title}</Animated.Text>

          <Pressable><View style={{flex: 1, paddingTop: 5, gap: 10}}>{children}</View></Pressable>


      </Animated.ScrollView>

      <View style={[{paddingTop: insets.top, height: insets.top+50, position: 'absolute', width: "100%"}]}>

        <Animated.View style={[{zIndex: 50, height: 50, alignItems: 'center', paddingHorizontal: 15, flexDirection: 'row'}]}>
          <Animated.Text style={[{color: theme.main.rgba(), fontWeight: "bold", fontSize: 25}, headerTextStyles]}>{title}</Animated.Text>
          <View style={{marginLeft: 'auto', flexDirection: 'row', gap: 10}}>{interactions}</View>
        </Animated.View>

        {

          Platform.OS === "ios" ?
          <ABlurView intensity={50} style={[{width: "100%", height: insets.top+50, position: 'absolute', borderBottomColor: theme.fg.rgba(), borderBottomWidth: 1}, headerTextStyles]}/>
          :
          <Animated.View style={[{backgroundColor: theme.fg.rgba(), width: "100%", height: insets.top+50, position: 'absolute', borderBottomColor: theme.mg.rgba(), borderBottomWidth: 1}, headerTextStyles]}/>

        }

      </View>

  </SKBGView>
  );
}

export function SKRootHeaderBarGradient({ children, title, interactions, gradientColors, gradientLocations }: HeadPropsGradient) {

  const ABlurView = Animated.createAnimatedComponent(BlurView);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const textStyle = useAnimatedStyle(() => {

    return {
      opacity: interpolate(scrollOffset.value, [0, 0, 40], [1, 1, 0])
    }

  })

  const headerTextStyles = useAnimatedStyle(() => {

    return {
      opacity: interpolate(scrollOffset.value, [-40, 0, 40], [0, 0, 1], Extrapolation.CLAMP)
    }

  })



  return (
    <SKGradientBG style={{paddingHorizontal:0}} colors={gradientColors} locations={gradientLocations}>

        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} style={{paddingHorizontal: 15, flexGrow: 1}} contentContainerStyle={{paddingTop: insets.top+50, paddingBottom: 15}}>
          <Pressable>

            <Animated.Text style={[{fontWeight: "600", fontSize: 50, color: theme.main.rgba()}, textStyle]}>{title}</Animated.Text>

            <View style={{flex: 1, paddingTop: 5, gap: 10}}>{children}</View>

          </Pressable>
        </Animated.ScrollView>

        <View style={[{paddingTop: insets.top, height: insets.top+50, position: 'absolute', width: "100%"}]}>

          <Animated.View style={[{zIndex: 50, height: 50, alignItems: 'center', paddingHorizontal: 15, flexDirection: 'row'}]}>
            <Animated.Text style={[{color: theme.main.rgba(), fontWeight: "bold", fontSize: 25}, headerTextStyles]}>{title}</Animated.Text>
            <View style={{marginLeft: 'auto', flexDirection: 'row', gap: 10}}>{interactions}</View>
          </Animated.View>


          {

          Platform.OS === "ios" ?
          <ABlurView intensity={50} style={[{width: "100%", height: insets.top+50, position: 'absolute', borderBottomColor: theme.fg.rgba(), borderBottomWidth: 1}, headerTextStyles]}/>
          :
          <Animated.View style={[{backgroundColor: theme.fg.rgba(), width: "100%", height: insets.top+50, position: 'absolute', borderBottomColor: theme.mg.rgba(), borderBottomWidth: 1}, headerTextStyles]}/>

          }

        </View>

    </SKGradientBG>
  );
}



export function SKModalHeaderBar({children, title, interactionsL, interactionsR, needsSafeArea, noScroll = false}: ModalHeaderProps ) {

  const sa = useSafeAreaInsets()
  const theme = useTheme()

  return (


    <SKBGView style={{paddingHorizontal: 0}}>
      {

        !noScroll ? 
        
        <ScrollView style={{ paddingHorizontal: 15, flexGrow: 1}} contentContainerStyle={{paddingTop: 50+15+(needsSafeArea ? sa.top : 0), paddingBottom: sa.bottom+15}}>
          <Pressable>
          {children}
          </Pressable>

        </ScrollView>

        :

          <View style={{height: "100%", paddingHorizontal: 15, flexGrow: 1, paddingTop: 50+15+(needsSafeArea ? sa.top : 0)}}>
            {children}
          </View>

      }


      {
        Platform.OS === 'ios' ? 
        <BlurView intensity={100} style={{position: 'absolute', width: '100%', borderBottomWidth: 0.5, borderColor: theme.rule.rgba()}}>
          <View style={{height: (needsSafeArea ? sa.top : 0)}}></View>
          <View style={{paddingHorizontal: 7, height: 50, justifyContent: 'center', alignItems: 'center', width: "100%"}}>
            <View pointerEvents='box-none' style={{position: 'absolute', width: "100%", alignItems: 'flex-start'}}>
              
              <View style={{flexDirection: 'row'}}>
                {interactionsL}
              </View>
            
            </View>

            <View pointerEvents='box-none' style={{width: "100%", position: "absolute", alignItems: 'center'}}>
              <SKBoldText style={{fontSize: 16}}>{title}</SKBoldText>
            </View>

            <View pointerEvents='box-none' style={{width: "100%", position: "absolute", alignItems: 'flex-end'}}>

              <View style={{flexDirection: 'row'}}>
                {interactionsR}
              </View>

            </View>
          </View>
        </BlurView>
        :
        <View style={{backgroundColor: theme.fg.rgba(), position: 'absolute', width: '100%', borderBottomWidth: 0.5, borderColor: theme.rule.rgba()}}>
          <View style={{height: (needsSafeArea ? sa.top : 0)}}></View>
          <View style={{paddingHorizontal: 7, height: 50, justifyContent: 'center', alignItems: 'center', width: "100%"}}>
            <View pointerEvents='box-none' style={{position: 'absolute', width: "100%", alignItems: 'flex-start'}}>
              
              <View style={{flexDirection: 'row'}}>
                {interactionsL}
              </View>
            
            </View>

            <View pointerEvents='box-none' style={{width: "100%", position: "absolute", alignItems: 'center'}}>
              <SKBoldText style={{fontSize: 16}}>{title}</SKBoldText>
            </View>

            <View pointerEvents='box-none' style={{width: "100%", position: "absolute", alignItems: 'flex-end'}}>

              <View style={{flexDirection: 'row'}}>
                {interactionsR}
              </View>

            </View>
          </View>
        </View>
      }



    </SKBGView>



  )

}


