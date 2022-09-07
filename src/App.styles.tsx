import { css } from "@emotion/css";

const logo = css`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;
export const card = css`
  padding: 2em;
`;

const readDocs = css`
  color: #888;
`;

const app = css`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Styles = {
  logo,
  card,
  readDocs,
  app,
};
