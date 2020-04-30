import useFormal from "@kevinwolf/formal-native";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as yup from "yup";
import Button from "./components/button";
import Field from "./components/field";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io",
};

export default function App(): JSX.Element {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: (values) => Alert.alert(JSON.stringify(values)),
  });

  return (
    <View style={styles.container}>
      <Field {...formal.getFieldProps("firstName")} label="First name" />
      <Field {...formal.getFieldProps("lastName")} label="Last name" />
      <Field {...formal.getFieldProps("email")} label="Email" autoCapitalize="none" />

      <Button {...formal.getSubmitButtonProps()}>Submit</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
