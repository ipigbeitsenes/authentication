import {useEffect, useState,useContext} from "react";
import {AuthContext} from "../contexts/AuthContext.js";
import AsyncStorage from "@react-native-community/async-storage";
import api, {setToken} from "../Utility/api.js";
export default function useLoader(){
    const [loading, setLoading] = useState(true);
    const {manageUserData} =useContext(AuthContext);
    useEffect(()=>{
        const load = async ()=>{
            const token = await AsyncStorage.getItem('AuthToken');
            if (token) {
                setToken(JSON.parse(token));
                try{
                const {result,payload}=await api("authentication/refresh_token")
                if(result){
                    manageUserData(payload);
                }
                }
                catch (err){
                    console.log(err);
                }
                
            }
            setLoading(false);
        }
    load();
    },[])
    return loading
}