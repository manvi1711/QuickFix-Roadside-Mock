import React from 'react';
import { Button, Alert } from 'react-native';
import { fetchUserProfile } from '../services/mockApi';

export const SOSButton = () => {
  const handlePress = async () => {
    const user = await fetchUserProfile("user1");
    Alert.alert("SOS Activated!", `Alert sent to: ${user?.emergencyContacts.join(', ')}`);
  };

  return <Button title="SOS EMERGENCY" onPress={handlePress} color="red" />;
};
