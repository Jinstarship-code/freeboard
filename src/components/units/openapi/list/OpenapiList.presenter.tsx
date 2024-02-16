import { IOpenapiListProps } from "./OpenapiList.types";
import { Wrapper, DogImg } from "./OpenapiList.styles";

export default function OpenapiListUi(props: IOpenapiListProps) {
  return (
    <>
      {/* <button onClick={props.onClickCount}>Next Image</button> */}
      <Wrapper>
        <div>
          {props.dogs.map((el, index) => (
            <>
              <DogImg key={el} src={el} />
              {(index + 1) % 3 === 0 && <br />}
            </>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
