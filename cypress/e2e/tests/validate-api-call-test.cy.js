describe("Validate Api Call ", () => {
  before(() => {
    cy.intercept("GET", "https://reqres.in/api/users?page=1");
    cy.viewport("iphone-x");
    cy.visit("http://localhost:19006");
  });

  it("Verify Api Call Success", () => {
    // cy.intercept("*/users?*").as("patient");
    cy.get("[data-testid=loader]").should("be.visible");
    // cy.wait("@patient").then(({ response }) => {
    //   expect(response.statusCode).to.eq(200);
    //   expect(response.body.data.length).to.eq(6);
    // });
    cy.get("[data-testid=user-1]").should("contain.text", "George");
    cy.get("[data-testid=loader]").should("not.exist");
    cy.get("[data-testid=user-5]").should("contain.text", "Charles");
  });

  describe("Click on List", () => {
    before(() => {
      cy.intercept("GET", "https://reqres.in/api/users?page=1");
      cy.viewport("iphone-x");
      cy.visit("http://localhost:19006");
      cy.get("[data-testid=user-1]").click();
    });

    it("should display name of the screen", () => {
      cy.get("[data-testid=user-1]").should("contain.text", "George");
    });
  });
  //   it("When data is rendered, check particular user", () => {
  //     cy.intercept("*/users?*").as("patient");
  //     cy.wait("@patient");
  //     cy.get("[data-testid=user-5]").should("contain.text", "Charles");
  //   });
});
