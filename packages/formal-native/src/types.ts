import {
  FormalFieldProps,
  FormalResetButtonProps,
  FormalState,
  FormalSubmitButtonProps,
} from "@kevinwolf/formal";

export interface FormalNativeFieldProps extends FormalFieldProps {
  onChangeText: (text: string) => void;
}

export interface FormalNativeResetButtonProps extends FormalResetButtonProps {
  onPress: () => void;
}

export interface FormalNativeSubmitButtonProps extends FormalSubmitButtonProps {
  onPress: () => void;
}

export interface FormalNativeState<Schema> extends FormalState<Schema> {
  getFormProps: () => Error;
  getFieldProps: (field: keyof Schema) => FormalNativeFieldProps;
  getResetButtonProps: () => FormalNativeResetButtonProps;
  getSubmitButtonProps: () => FormalNativeSubmitButtonProps;
}
