import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../stores/recoil";
import { useEffect } from "react";

interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAcceeToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const result = localStorage.getItem("accessToken");
    setAcceeToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
