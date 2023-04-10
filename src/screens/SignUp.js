import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/Constants';
import Input from '../components/Input';
import Button from '../components/Button';
import {Checkbox} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
const Signup = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [location, setLocation] = useState('');
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      {/* Input Container */}
      <View>
        {/* Simple Input */}
        <Input
          title="Name"
          placeholder={'Your name'}
          variant="simple"
          value={name}
          setValue={setName}
        />
        {/* Simple Input */}
        <Input
          title="Email"
          placeholder={'Your email address'}
          variant="simple"
          value={email}
          setValue={setEmail}
        />
        {/* Simple Input */}
        <Input
          title="Phone Number"
          placeholder={'Phone Number'}
          variant="simple"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        {/* Icon Input */}
        <Input
          title="Password"
          placeholder={'Password'}
          variant="passwordIcon"
          icon="remove-red-eye"
          value={password}
          setValue={setPassword}
        />
        {/* Icon Input */}
        <Input
          title="Repeat Password"
          placeholder={'Repeat Password'}
          variant="passwordIcon"
          icon="remove-red-eye"
          value={repeatPassword}
          setValue={setRepeatPassword}
        />
        {/* Icon Input */}
        <Input
          title="Location"
          placeholder={'Location'}
          variant="icon"
          icon="location-pin"
          value={location}
          setValue={setLocation}
        />
      </View>
      {/* Terms & Conditions */}
      <View style={styles.termsContainer}>
        {/* Checkbox */}
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={colors.primary}
        />
        {/* Text */}
        <Text style={styles.termsText}>
          I agree to the{' '}
          <Text style={styles.primaryText}>Terms of Services</Text> and
          <Text style={styles.primaryText}> Privacy Policy.</Text>
        </Text>
      </View>
      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title={'Continue'} />
      </View>
      {/* Bottom Strip */}
      <View style={styles.bottomStripContainer}>
        <Text style={styles.lightText}>
          Have an account?{' '}
          <Text
            style={styles.primaryText}
            onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 30,
  },
  termsText: {
    color: colors.dark,
    fontSize: 14,
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 20,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomStripContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  lightText: {
    color: colors.dark,
  },
});
