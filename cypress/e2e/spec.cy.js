describe('template spec', () => {
  it('form authentication', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()

    //poner usuario
    cy.get('[name="username"]').click().type("tomsmith")

    //poner contraseña
    cy.get('[name="password"]').click().type("SuperSecretPassword!")

    //entrar-login
    cy.get('.fa').click()

    //muestra mensaje bienvenida
    cy.get('#flash')

  })

  it('shifting content', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39) > a').click()

    //ir a ejemplo 1
    cy.get('[href="/shifting_content/menu"]').click()

    //contar los 5 elementos
    cy.get('ul li').should('have.length', 5)


  })
})

