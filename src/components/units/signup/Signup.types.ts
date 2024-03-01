import type { ChangeEvent } from "react";

export interface ISignUpInput {
  email: string;
  name: string;
  password: string;
}

export interface ISignUpUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCmpPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}
