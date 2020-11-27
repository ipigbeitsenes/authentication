import React from 'react'

const ScreenContainer = ({ 
    children, 
    style, 
    ...props 
}) => {
    return (
        <View
            style={[styles.container, style]}
            {...props}
            >{children}</View>
    )
}

const styles = StyleSheet.create({
    container:{

    }
})


export default ScreenContainer
