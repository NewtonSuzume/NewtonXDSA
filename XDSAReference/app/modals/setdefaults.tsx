import { SKBlockIconButton } from '@/library/buttons/ThemedButton';
import { SKModalHeaderBar } from '@/library/headers/HeaderBar';
import { useState } from 'react';
import { storeXDSAClientToJSONStore, XDSACurrentClient } from '@/data/clientdata';
import GeneratedForm from '@/components/formgenerator/AutoForm';
import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SKBGView } from '@/library/bases/ThemedViews';


export default function CreateEntryForm() {

  const [form, setForm] = useState(XDSACurrentClient.generateTemplate())



  return (

    <SKBGView style={{paddingHorizontal: 0}}>
      <KeyboardAvoidingView style={{flex: 1, marginTop: 0}} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <SKModalHeaderBar title='Custom Defaults' interactionsR={
        <SKBlockIconButton icon="pencil" text='Set' onPress={() => {

          for (let item of Object.entries(form)) {
            if (item[0] != "id") {
              let ind = XDSACurrentClient.server_config.findIndex(x => x.name == item[0])
              console.log(ind)
              XDSACurrentClient.server_config[ind].default = item[1]
            }
          }

          storeXDSAClientToJSONStore(XDSACurrentClient)
          router.back()

        }}/>
        }>

            
            <GeneratedForm form={form} setForm={setForm}/>


        </SKModalHeaderBar>

      </KeyboardAvoidingView>
    </SKBGView>

  );
}

