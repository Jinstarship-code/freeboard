import { YouTubeProps } from "react-youtube";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveList: () => void;
  onClickMoveEdit: () => void;
  onClickDeleteBoard: () => void;
  onClickLikeBoard: () => void;
  onClickDisLikeBoard: () => void;
  youtubeProps: IYoutubeProps;
}

export interface IYoutubeProps {
  videoId: YouTubeProps["videoId"];
  style?: YouTubeProps["style"];
}
