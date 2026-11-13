@cart
Feature: Carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para revisarlos antes de comprar

  Background:
    Given que el usuario está en la página de login
    And inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"

  Scenario: Agregar un producto al carrito desde la página de productos
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el contador del carrito muestra 1 producto
    And el producto "Sauce Labs Backpack" muestra el botón "Remove"

  Scenario: Ver los productos agregados en el carrito de compras
    When agrega el producto "Sauce Labs Backpack" al carrito
    And agrega el producto "Sauce Labs Bike Light" al carrito
    And accede al carrito de compras
    Then ve 2 productos en el carrito
    And el carrito contiene el producto "Sauce Labs Backpack"
    And el carrito contiene el producto "Sauce Labs Bike Light"
