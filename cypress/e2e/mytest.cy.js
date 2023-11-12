describe('Authentication with proper credentials', () => {
  it('should bypass login and enter address', () => {
    cy.visit('https://www.staging.pamyra.de/', {
      auth: {
        username: 'pamyra',
        password: 'never2open',
      }
    });
    cy.get("#c-p-bn").click();

    cy.wait(500); // Wait for 500 milliseconds.
    cy.get('#navigation-container').invoke('css', 'display', 'none');
    cy.wait(500); // Wait for 500 milliseconds.

    cy.get('#elem-3').scrollIntoView();


    cy.get("#elem-3").type("07749 jena");
    cy.wait(500);
    cy.contains('07749 Jena').click();
    cy.wait(300);
    cy.get("#elem-5").type("81669 munchen");
    cy.wait(900);
    cy.contains("81669 München").click();
    cy.wait(900);
    cy.contains('Auswahl').click();  //
    cy.wait(300);
    cy.get('.cdk-overlay-backdrop').invoke('css', 'display', 'none');
    cy.wait(300);
    cy.get('#mat-option-0').click();

    cy.wait(300);

    cy.contains('Gewerbe').click();
    cy.scrollTo(0, -300) 
    cy.wait(900);
   
    cy.wait(900);
    cy.get("#elem-0").click();
    cy.wait(900);               
    //   PAGE 4 LADUNG
    cy.wait(300);
    cy.get("#mat-input-4").clear().type('10');
    cy.get("#mat-input-5").clear().type('90');
    cy.get("#mat-input-6").clear().type('90');
    cy.get("#mat-input-7").clear().type('90');
    cy.get("#mat-input-8").clear().type('90');  
    cy.wait(300);
    cy.contains("Zeig mir Preise").click();     // PAGE 5 price list
    cy.wait(1200);
   
    cy.contains("Christopher's günstigster").click();
    //PAGE 6   Mein Transport

    cy.contains("zur Buchung ").click();   
    cy.wait(900);       
    cy.get('#navigation-container').invoke('css', 'display', 'none');

    cy.contains('Gast / Registrieren').scrollIntoView();
    cy.contains('Gast / Registrieren').click();



    cy.scrollTo(0, -200); //mat-radio-16-input
    cy.get("#mat-radio-16-input").click();
    cy.get('#navigation-container').invoke('css', 'visibility', 'visible');
    cy.contains("Anrede").click();
    cy.wait(300);
    cy.contains("Herr").click();

    cy.contains("Vorname").type("mohamed");
    //  Telefonnummer 


    cy.contains('Nachname').type("hassan");
    cy.contains("E-Mail-Adresse").type('mohamedhassan86110@gmail.com');
    cy.contains("Straße u. Hausnummer").type('josephinenstrasse 10');
    cy.contains("Telefonnummer").type("015257567441");

    cy.contains("PLZ").type('04317');
    cy.contains("Ort").type('Leipzig');   //     
    cy.contains("Land").click();
    cy.contains("Deutschland").click();
    cy.wait(900);

    cy.wait(5000); // Wait for 5 seconds (adjust the time as needed)
    cy.contains("Weiter zu Start und Ziel").should('exist').should('be.visible').click();
    cy.contains("Weiter zu Start und Ziel").click();
    cy.wait(5000);
    cy.contains("Weiter zu Start und Ziel").debug().click();
    cy.wait(5000);
    cy.get('button.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-primary.mat-mdc-button-base')
      .invoke('css', 'visibility', 'visible');


    cy.get('button.button.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-primary.mat-mdc-button-base', { multiple: true })
      .first()
      .click({ force: true });
    cy.wait(5000);

    cy.get('button.button.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-primary.mat-mdc-button-base', { multiple: true })
      .first()
      .click({ force: true });
  
  });
});