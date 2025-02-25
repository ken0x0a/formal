import {
  FormalFieldProps,
  FormalResetButtonProps,
  FormalState,
  FormalSubmitButtonProps,
} from "@kevinwolf/formal";

export interface FormalWebFormProps {
  onSubmit: (e: any) => void;
}

export interface FormalWebTextFieldEvent {
  target: {
    value: string;
  };
}

export interface FormalWebFieldProps {
  name: string;
  id: string;
  onChange: (e: FormalWebTextFieldEvent) => void;
}

export interface FormalWebResetButtonProps {
  type: string;
  onClick: () => void;
}

export interface FormalWebSubmitButtonProps {
  type: string;
}

export interface FormalWebState<Schema> extends FormalState<Schema> {
  getFormProps: () => FormalWebFormProps;
  getFieldProps: (field: keyof Schema) => FormalFieldProps & FormalWebFieldProps;
  getResetButtonProps: () => FormalResetButtonProps & FormalWebResetButtonProps;
  getSubmitButtonProps: () => FormalSubmitButtonProps & FormalWebSubmitButtonProps;
}
