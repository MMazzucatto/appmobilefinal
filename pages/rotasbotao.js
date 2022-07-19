import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const navBotao = createStackNavigator();

import InfoJogo1 from '../pages/jogos/jogo1';
import InfoJogo2 from '../pages/jogos/jogo2';
import InfoJogo3 from '../pages/jogos/jogo3';

export default function RotasBotao(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="jogo1" component={InfoJogo1} options={{headerShown:false}} />
            <navBotao.Screen name="jogo2" component={InfoJogo2} options={{headerShown:false}} />
            <navBotao.Screen name="jogo3" component={InfoJogo3} options={{headerShown:false}} />
        </navBotao.Navigator>
    );
}