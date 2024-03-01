import type { ChangeEvent } from "react";

export interface ILoginUIProps {
  onChangeEamil: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignUp: () => void;
  onClickLogin: () => void;
}
