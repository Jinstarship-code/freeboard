import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  height: 120px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileWrapper = styled.div`
  width: 6%;

  & img {
    object-fit: none;
  }
`;
export const ContentsWrapper = styled.div`
  width: 84%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Comment = styled.div`
  margin-top: -45px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;

export const CommentCreatedAtDiv = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const EDButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
  width: 10%;

  & img {
    object-fit: none;
    cursor: pointer;
  }
`;
