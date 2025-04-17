import { XDSACurrentClient } from "@/data/clientdata";
import { FormEnumObject, SKFGViewForm, SKFormCounter, SKFormEnum, SKFormGradientScaleSlider, SKFormNumField, SKFormSwitch, SKFormTextField } from "@/library/form/FormItems";
import { XDSADatapoint, XDSAEnumConfiguration, XDSAPresentationRequest, XDSAType } from "../../8592sdk/types";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, View } from "react-native";
import { ScrollView } from "react-native";

export default function GeneratedForm({form, setForm}: {form: {[key: string]: any}, setForm: (x: {[key: string]: any}) => void}) {

    const groups = XDSACurrentClient.server_config.reduce((a, c) => {
    let x = a;
    // @ts-ignore
    x[c.category].push(c)

    return x
    }, [[], [], [], [], [], []])

    // const [form, setForm] = useState(XDSACurrentClient.generateTemplate())

    const grouptitles = ["general", "autonomous", "teleop", "endgame", "driver", "other"]
    

    function XDSAEnumtoSakakiEnumAdapter(xdsaEnumObject: {[val: number]: XDSAEnumConfiguration}) {

        let sakakioutput: FormEnumObject[] = []
        
        for (let item of Object.entries(xdsaEnumObject)) {
        sakakioutput.push({
            value: parseInt(item[0]),
            title: item[1].text
        })

        }

        return sakakioutput

    }

    return (
        <>
        {
            groups.map(
            (x: any, i: number) => {
                return (
                <SKFGViewForm key={i} subtitle={grouptitles[i]}>

                {
                    x.map((b: XDSADatapoint) => {
                    switch (b.type) {
                        case XDSAType.STRING:
                        return <SKFormTextField key={b.name} text={form[b.name]} onChange={(x) => {setForm({...form, [b.name]: x})}} placeholder={b.presentableName}/>
                        break;

                        case XDSAType.INTEGER:

                        switch (b.requested_presentation) {
                            case XDSAPresentationRequest.ENUMERATION:
                            return <SKFormEnum key={b.name} title={b.presentableName} defaultValue={form[b.name]} onChange={(x) => setForm({...form, [b.name]: x})} items={
                                XDSAEnumtoSakakiEnumAdapter(b.enumValues!)
                            }/>

                            case XDSAPresentationRequest.SLIDER:
                            return <SKFormGradientScaleSlider key={b.name} value={form[b.name]} onChange={(x) => setForm({...form, [b.name]: x})} items={XDSAEnumtoSakakiEnumAdapter(b.enumValues!)} title={b.presentableName}/>

                            case XDSAPresentationRequest.COUNTER:
                            return <SKFormCounter key={b.name} title={b.presentableName} value={form[b.name]} onChange={(x) => setForm({...form, [b.name]: x})}/>

                            default: 
                            return <SKFormNumField key={b.name} value={form[b.name]} onChange={(x) => {setForm({...form, [b.name]: x})}} title={b.presentableName}/>
                        }
                        break;

                        case XDSAType.FLOAT:
                        return <SKFormNumField key={b.name} value={form[b.name]} onChange={(x) => {setForm({...form, [b.name]: x})}} title={b.presentableName}/>
                        break;

                        case XDSAType.BOOLEAN:
                        return <SKFormSwitch key={b.name} value={form[b.name]} onChange={(x) => {setForm({...form, [b.name]: x})}} title={b.presentableName}/>
                        break;
                    }
                    })
                }

                </SKFGViewForm>)
            })
        }
        </>
    )

}