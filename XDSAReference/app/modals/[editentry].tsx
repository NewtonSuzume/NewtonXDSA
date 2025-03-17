import { SKBlockIconButton, SKNeutralBlockIconButton } from '@/library/buttons/ThemedButton';
import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKModalHeaderBar } from '@/library/headers/HeaderBar';
import { FormEnumObject, SKFGViewForm, SKFormEnum, SKFormNumField, SKFormSwitch, SKFormTextField, SKFormSlider, SKFormCounter } from '@/library/form/FormItems';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { ActivityIndicator, Alert, View } from 'react-native';
import { useEffect, useState } from 'react';
import { XDSACurrentClient } from '@/data/clientdata';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { generateZodTypeFromConfig, XDSACategory, XDSADatapoint, XDSAEnumConfiguration, XDSAPresentationRequest, XDSAType } from '@8592/config_utils';
import GeneratedForm from '@/components/formgenerator/AutoForm';
import { addToEntryList, useEntryListProvider } from '@/data/MatchEntry/MatchEntryContext';
// @ts-ignore
import { router, useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SKBlock from '@/library/pieces/sk-block';

export default function CreateEntryForm() {


  const context = useEntryListProvider()
  const param = useLocalSearchParams()

  
  const [form, setForm] = useState(context?.entries[parseInt(param.editentry as string)].content)

  useEffect(() => {
    console.log(form)
  })
  

  

  return (

    <SKModalHeaderBar title="Edit" 
    interactionsL={<SKBlockIconButton style={{color: new Color(255, 59, 48, 255)}} icon="trash" text="Delete" 
      onPress={
        () => {
          const vals = [...context!.entries]
          vals.splice(parseInt(param.editentry as string), 1)
          context!.setEntries(vals)
          AsyncStorage.setItem("entries", JSON.stringify(vals));
          router.back()
        }
      }
      
      onLongPress={
        () => {
          Alert.alert("Delete All Entries?", "This will erase all scouting entries from your phone",

            [
              {
                text: "Cancel",
                style: "cancel"
              },
              {
                text: "Delete All",
                style: "destructive",
                onPress: () => {
                  const vals: Object[] = []
                  context?.setEntries(vals)
                  AsyncStorage.setItem("entries", JSON.stringify(vals));
                  router.back()
                }
              }
            ]

          )

        }
      }
    />}
    interactionsR={<SKBlockIconButton enabled={form["name"] && form["match_number"] != 0 && form["team_number"]  != 0 && generateZodTypeFromConfig(XDSACurrentClient.server_config).safeParse(form).success} icon="arrow-up-from-bracket" text='Resend' onPress={
      () => {
        
        const vals = [...context!.entries]

        

        XDSACurrentClient.addEntry(form).then(() => {
          vals[parseInt(param.editentry as string)] = {content: form!, send_success: true}
          context!.setEntries(vals)
          AsyncStorage.setItem("entries", JSON.stringify(vals));
        }).catch(() => {
          vals[parseInt(param.editentry as string)] = {content: form!, send_success: false}
          context!.setEntries(vals)
          AsyncStorage.setItem("entries", JSON.stringify(vals));
        }).finally(() => {
          router.back()
        })



        

      }
    }
    
    onLongPress={() => {

      Alert.alert("Resend All Entries", "Resend all entries on this device!", [
        {
          text: "Cancel",
          style: 'cancel'
        },
        {
          text: "Resend",
          onPress: () => {

            if (context) {
              for (let item of context?.entries) {

                XDSACurrentClient.addEntry(item.content)

              }
            }


          }
        }
      ])

    }}
    

    />}>

        
      <GeneratedForm form={form!} setForm={setForm}/>


    </SKModalHeaderBar>

  );
}

