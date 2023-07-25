describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");

    cy.intercept("http://localhost:3000/api/random-config", {
      samples: 17,
      multiplicationFactor: 51,
    });

    cy.contains("Multiplication");
    cy.contains("samples", { matchCase: false });
    cy.contains("label", "Multiplication Factor");
    cy.contains("button", "Get Config").click();
    cy.contains("label span.value", "17");

    cy.get(".samples input[type=range]").invoke("val", 45).trigger("input");
    cy.contains("label span.value", "45");
  });
});
