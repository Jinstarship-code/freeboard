import {
  IQuery,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  boardId: string;
  password: string;
  updateBoardInput: IUpdateBoardInput;
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeURI: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeDetailAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContent: string;
  toggleModal: () => void;
  toggleAddressModal: () => void;
  isModalOpen: boolean;
  isAddressModalOpen: boolean;
  isActive: boolean;
  isEdit: boolean;
  address?: string;
  zoneCode?: string;
  onCompleteAddress: (data: any) => void;
  data?: any;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface ICreateBoardInput {
  _id: string;
  writer: string;
  title: string;
  contents: string;
  youtubeUrl?: string;
  boardAddress?: string;
}
