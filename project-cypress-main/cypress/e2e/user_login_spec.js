// cypress/integration/user_login_spec.js

describe('Login de Usuario', () => {
    beforeEach(() => {
        cy.visit('https://test-qa.inlaze.com/login');
    });

    it('Login exitoso', () => {
        cy.get('input[name="email"]').type('juan.perez@example.com');
        cy.get('input[name="password"]').type('Contraseña1!');
        cy.get('button[type="submit"]').click();
        cy.contains('Juan Pérez').should('be.visible');
    });

    it('Verificar campos obligatorios en login', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('Todos los campos son obligatorios').should('be.visible');
    });

    it('Verificar cierre de sesión', () => {
        // Asumimos que el usuario ya está logueado
        cy.login('juan.perez@example.com', 'Contraseña1!'); // Función custom para logueo
        cy.get('button[name="logout"]').click();
        cy.url().should('include', '/login');
    });
});