/* global cy */

describe("Drawing App", function () {
	it("Visits the app and loads the canvas", function () {
		cy.visit("");
		cy.title().should("contain", "ST Apprentice Challenge");
		cy.get("h1").should("contain", "Pen");
		cy.get("canvas").should("exist");
	});
	it("Loads new tool panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(1).click();
		cy.get("h1").should("contain", "Eraser");
	});
	it("Loads stamp tool panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(2).click();
		cy.get("h1").should("contain", "Stamp");
	});
	it("Loads download tool panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(3).click();
		cy.get("h1").should("contain", "Download");
	});
	it("Finds and assures the pen input width", function () {
		cy.visit("");
		cy.get('input[name="stroke-width"]')
		.invoke('val', 10)
		.should("have.value", "10");
	});
});