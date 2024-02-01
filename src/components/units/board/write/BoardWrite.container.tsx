import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState, ChangeEvent } from "react";
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
  const [youtube, SetYoutube] = useState<string>("");

  // error state
  const [errorWriter, setErrorWriter] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [errorContent, setErrorContent] = useState<string>("");

  // is-- state
  const [isActive, setIsActive] = useState<boolean>(false);

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
    SetYoutube(event.target.value);
    console.log(youtube);
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

  const onClickEdit = async () => {
    if (!title && !contents && !youtube) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtube) updateBoardInput.youtubeUrl = youtube;
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

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeYoutubeURI={onChangeYoutubeURI}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContent={errorContent}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}

/**
 * <YouTube
  videoId={string}                  // defaults -> ''
  id={string}                       // defaults -> ''
  className={string}                // defaults -> ''
  iframeClassName={string}          // defaults -> ''
  style={object}                    // defaults -> {}
  title={string}                    // defaults -> ''
  loading={string}                  // defaults -> undefined
  opts={obj}                        // defaults -> {}
  onReady={func}                    // defaults -> noop
  onPlay={func}                     // defaults -> noop
  onPause={func}                    // defaults -> noop
  onEnd={func}                      // defaults -> noop
  onError={func}                    // defaults -> noop
  onStateChange={func}              // defaults -> noop
  onPlaybackRateChange={func}       // defaults -> noop
  onPlaybackQualityChange={func}    // defaults -> noop
/>
 * 
 */
