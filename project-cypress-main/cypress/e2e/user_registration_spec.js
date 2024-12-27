// cypress/integration/user_registration_spec.js

describe('Registro de Usuario', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com/register');
    });

    it('Registro de usuario exitoso', () => {
        cy.get('input[name="name"]').type('Juan Pérez');
        cy.get('input[name="email"]').type('juan.perez@example.com');
        cy.get('input[name="password"]').type('Contraseña1!');
        cy.get('input[name="confirmPassword"]').type('Contraseña1!');
        cy.get('button[type="submit"]').click();
        cy.contains('Registro exitoso').should('be.visible');
    });

    it('Validar nombre mínimo', () => {
        cy.get('input[name="name"]').type('Juan');
        cy.get('button[type="submit"]').click();
        cy.contains('Se requieren al menos 2 palabras').should('be.visible');
    });

    it('Validar formato de email', () => {
        cy.get('input[name="email"]').type('juan.perez@com');
        cy.get('button[type="submit"]').click();
        cy.contains('Email no válido').should('be.visible');
    });

    it('Validar requisitos de contraseña', () => {
        cy.get('input[name="password"]').type('contraseña');
        cy.get('button[type="submit"]').click();
        cy.contains('La contraseña debe tener al menos 8 caracteres').should('be.visible');
    });

    it('Verificar campos obligatorios', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('Todos los campos son obligatorios').should('be.visible');
    });

    it('Verificar coincidencia de contraseñas', () => {
        cy.get('input[name="password"]').type('Contraseña1!');
        cy.get('input[name="confirmPassword"]').type('Contraseña2!');
        cy.get('button[type="submit"]').click();
        cy.contains('Las contraseñas no coinciden').should('be.visible');
    });
});