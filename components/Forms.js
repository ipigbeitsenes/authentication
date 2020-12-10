import React, { useRef, useEffect } from 'react'
import Input from './Input'
import { View } from 'react'
import Spacer from './Spacer'

export default function Forms() {

return (
    <View>
        
    </View>
)
   /* return (
        <>
            {

                inputs.map(({ label, name, ref }, index) => {
                    return (
                        <View key={index}>
                            <Input
                                ref={ref}
                                label={label}
                                blurOnSubmit={!(index < inputs.length - 1)}
                                onTextChange={(text) => onTextChange(name, text)}
                                onSubmitEditing={() => {
                                    const nextInput = inputs[index + 1]

                                    if (nextInput) {
                                        nextInput.ref.current.focus()
                                    }

                                }}
                                secureTextEntry={inputs[index].type == 'password' ? true : false}
                            />
                            <Spacer size={index < inputs.length - 1 ? 10 : 5} />
                        </View>

                    )

                })


            }
        </>
    )
    */

}

