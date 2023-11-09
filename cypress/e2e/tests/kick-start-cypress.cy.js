describe("Our first Cypress test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:19006");
  });

  it("Verify text", () => {
    cy.get("div[id='root']").should(
      "have.text",
      "Hello from web react native expo"
    );
  });
});
