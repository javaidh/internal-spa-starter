import { Demo } from "./demo";

describe("<Demo>", () => {
  it("mounts", () => {
    cy.mount(<Demo />);
  });
});
