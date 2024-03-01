import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState, ChangeEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { IBoardWriteProps } from "./BoardWrite.types";
import {
  ICreateBoardInput,
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  // router
  const router = useRouter();

  // useStates
  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContent] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
  const [zoneCode, setZoneCode] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  // error state
  const [errorWriter, setErrorWriter] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");

  // is-- state
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  // mutation
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const boardId =
    typeof router.query.boardId === "string" ? router.query.boardId : "";

  //  #region onChange Functions
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);

    if (event.target.value) {
      setErrorWriter("");
    }

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
    if (event.target.value) {
      setErrorPassword("");
    }

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    if (event.target.value) {
      setErrorTitle("");
    }

    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(event.target.value);
    if (event.target.value) {
      setErrorContent("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeURI = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutube(event.target.value);
    console.log(youtube);
  };

  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(String(event.target.value));
  };

  const onChangeFiles = (file: File, index: number, url: string): void => {
    const newFiles = [...files];
    const newFileUrls = [...fileUrls];

    if (files[index]) {
      newFileUrls[index] = url;
      newFiles[index] = file;
    } else {
      newFiles.push(file);
      newFileUrls.push(url);
    }

    setFiles([...newFiles]);

    setFileUrls([...newFileUrls]);
    console.log(files);
  };

  //  #endregion onChange Functions

  const onClickSubmit = async () => {
    const CreateBoardInput: ICreateBoardInput = {
      writer,
      password,
      title,
      contents,
    };

    if (!writer) {
      setErrorWriter("* 작성자를 입력해 주세요");
    }

    if (!password) {
      setErrorPassword("* 비밀번호를 입력해 주세요.");
    }

    if (!title) {
      setErrorTitle("* 제목을 입력해 주세요.");
    }

    if (!contents) {
      setErrorContent("* 내용을 입력해 주세요.");
    }

    CreateBoardInput.writer = writer;
    CreateBoardInput.password = password;
    CreateBoardInput.title = title;
    CreateBoardInput.contents = contents;

    if (youtube && youtube.includes("https://www.youtube.com/watch")) {
      CreateBoardInput.youtubeUrl = youtube;
    }

    if (fileUrls) {
      CreateBoardInput.images = fileUrls;
    }

    if (zoneCode && address && detailAddress) {
      const boardAddress = { zipcode: "", address: "", addressDetail: "" };
      boardAddress.zipcode = zoneCode;
      boardAddress.address = address;
      boardAddress.addressDetail = detailAddress;

      CreateBoardInput.boardAddress = boardAddress;
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: CreateBoardInput,
          },
        });

        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
    if (!boardId) return <></>;
  };

  // Modal Handle Functions
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddressModal = () => {
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  const onClickEdit = async () => {
    if (
      !title &&
      !contents &&
      !youtube &&
      !zoneCode &&
      !address &&
      !detailAddress
    ) {
      setIsModalOpen(!isModalOpen);
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtube && youtube.includes("https://www.youtube.com/watch")) {
      updateBoardInput.youtubeUrl = youtube;
    }

    if (zoneCode !== "" || address !== "" || detailAddress !== "") {
      updateBoardInput.boardAddress = {};
      if (zoneCode !== "") updateBoardInput.boardAddress.zipcode = zoneCode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (detailAddress !== "")
        updateBoardInput.boardAddress.addressDetail = detailAddress;
    }

    const result = await updateBoard({
      variables: {
        boardId,
        password,
        updateBoardInput,
      },
    });

    if (!boardId) return <></>;
    router.push(`/boards/${result.data?.updateBoard._id}`);
  };

  useEffect(() => {
    const imgs = props.data?.fetchBoard.images;
    if (imgs !== undefined && imgs !== null) setFileUrls([...imgs]);
  }, [props.data]);

  const onCompleteAddress = (data: any) => {
    setAddress(String(data.address));
    setZoneCode(String(data.zonecode));

    setIsAddressModalOpen(!isAddressModalOpen);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeYoutubeURI={onChangeYoutubeURI}
      onChangeFiles={onChangeFiles}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeDetailAddress={onChangeDetailAddress}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContent={errorContent}
      toggleModal={toggleModal}
      toggleAddressModal={toggleAddressModal}
      isModalOpen={isModalOpen}
      isAddressModalOpen={isAddressModalOpen}
      isActive={isActive}
      isEdit={props.isEdit}
      onCompleteAddress={onCompleteAddress}
      address={address}
      zoneCode={zoneCode}
      fileUrls={fileUrls}
      data={props.data}
    />
  );
}
