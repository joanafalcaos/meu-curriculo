import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ExperienciaAcademica from './experiencia-academica';
import ExperienciaProfissional from './experiencia-profissional';
import Home from './index';
import Jogo from './jogo';
import Projetos from './projetos';
import Sobre from './sobre';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#b39ddb',
        tabBarInactiveTintColor: '#d1c4e9',
        tabBarStyle: {
          backgroundColor: '#9575cd',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: 'white',
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Sobre') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'ExperienciaAcad') iconName = focused ? 'school' : 'school-outline';
          else if (route.name === 'ExperienciaProf') iconName = focused ? 'briefcase' : 'briefcase-outline';
          else if (route.name === 'Jogo') iconName = focused ? 'game-controller' : 'game-controller-outline';
          else if (route.name === 'Projetos') iconName = focused ? 'folder' : 'folder-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Sobre" component={Sobre} options={{ tabBarLabel: 'Sobre' }} />
      <Tab.Screen name="ExperienciaAcad" component={ExperienciaAcademica} options={{ tabBarLabel: 'Acadêmica' }} />
      <Tab.Screen name="ExperienciaProf" component={ExperienciaProfissional} options={{ tabBarLabel: 'Profissional' }} />
      <Tab.Screen name="Jogo" component={Jogo} options={{ tabBarLabel: 'Jogo' }} />
      <Tab.Screen name="Projetos" component={Projetos} options={{ tabBarLabel: 'Projetos' }} />
    </Tab.Navigator>
  );
}