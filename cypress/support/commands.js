Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("#username").type(usuario);
  cy.get("#password").type(senha, { log: false });
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add("Checkout", (email, senha, nome, sobrenome) => {
  cy.get("#reg_email").type(email);
  cy.get("#reg_password").type(senha);
  cy.get(":nth-child(4) > .button").click();

  cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
  cy.get("#billing_first_name").type(nome);
  cy.get("#account_last_name").type(sobrenome);
  cy.get(".woocommerce-Button").click();
});

Cypress.Commands.add("addProdutos", (produto, tamanho, cor, quantidade) => {
  cy.get('[class="product-block grid"]').contains(produto).click();
  cy.get(".button-variable-item-" + tamanho).click();
  cy.get(".button-variable-item-" + cor).click();
  cy.get(".input-text").clear().type(quantidade);
  cy.get(".single_add_to_cart_button").click();
});

Cypress.Commands.add("detalheFaturamento", () => {
  cy.fixture("detalheFaturamento").then((dados) => {
    cy.get("#billing_first_name").clear().type(dados.nome);
    cy.get("#billing_last_name").clear().type(dados.sobrenome);
    cy.get("#billing_company").clear().type(dados.empresa);
    cy.get("#billing_address_1").clear().type(dados.endereco);
    cy.get("#billing_city").clear().type(dados.cidade);
    cy.get("#select2-billing_state-container")
      .click()
      .type(`${dados.estado}{enter}`);
    cy.get("#billing_postcode").clear().type(dados.cep);
    cy.get("#billing_phone").clear().type(dados.telefone);
    cy.get("#billing_email").clear().type(dados.email);
  });
});
