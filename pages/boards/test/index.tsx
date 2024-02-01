import { ShakeOutlined, FastBackwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(FastBackwardOutlined)`
  color: red;
  font-size: 30px;
`;

export default function test(): JSX.Element {
  return (
    <>
      <div>
        <ShakeOutlined />
        <MyIcon />
      </div>
    </>
  );
}
