import { SKBlockIconButton } from '@/library/buttons/ThemedButton';
import { useTheme } from '@/library/context';
import { SKModalHeaderBar } from '@/library/headers/HeaderBar';
import { SKBoldSubText } from '@/library/bases/ThemedText';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { useEffect, useState } from 'react';
import { XDSACurrentClient } from '@/data/clientdata';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { generateZodTypeFromConfig } from '../../8592sdk/helpers';
import GeneratedForm from '@/components/formgenerator/AutoForm';
import { addToEntryList, useEntryListProvider } from '@/data/MatchEntry/MatchEntryContext';
import { router } from 'expo-router';
import { SKBGView } from '@/library/bases/ThemedViews';


export default function CreateEntryForm() {


  const [form, setForm] = useState(XDSACurrentClient.generateTemplate())
  const context = useEntryListProvider()
  const theme = useTheme()

  useEffect(() => {
    console.log(form)
    console.log("egg")
    console.log(XDSACurrentClient.server_info.team)
  })



  return (

    <SKBGView style={{paddingHorizontal: 0}}>
    <KeyboardAvoidingView style={{flex: 1, marginTop: 0}} behavior={Platform.OS === "ios" ? "padding" : "height"}>

      <SKModalHeaderBar noScroll={XDSACurrentClient.server_info.team === 0} title='New Entry' interactionsR={ XDSACurrentClient.server_info.team === 0 ? <></> : <SKBlockIconButton enabled={form["name"] && form["match_number"] != 0 && form["team_number"]  != 0 && generateZodTypeFromConfig(XDSACurrentClient.server_config).safeParse(form).success} icon="cubes-stacked" text='Create' onPress={
        () => {
          
          XDSACurrentClient.addEntry(form).then(() => {
            if (context)
              {addToEntryList(context, {content: form, send_success: true})}
              
              setForm(XDSACurrentClient.generateTemplate())
          }).catch(() => {
            if (context)
              {addToEntryList(context, {content: form, send_success: false})}
              
              setForm(XDSACurrentClient.generateTemplate())
          }).finally(() => {
            router.back()
          })


        }
      }/>}>

        {
          XDSACurrentClient.server_info.team === 0 ? <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>

            <TabBarIcon style={{fontSize: 55, color: theme.sub.rgba()}} name={"plug-circle-xmark"} />
            <SKBoldSubText style={{fontSize: 20}}>You aren't connected to a server!</SKBoldSubText>

          </View> : <GeneratedForm form={form} setForm={setForm}/> 
        }


      </SKModalHeaderBar>
    </KeyboardAvoidingView>
    </SKBGView>
  );
}

