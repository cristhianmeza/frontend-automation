@checkout
Feature: Proceso de compra
  Como cliente de Sauce Demo
  Quiero completar una compra
  Para adquirir los productos que necesito

  Background:
    Given que el usuario está en la página de login
    And inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"

  Scenario: Completar la compra de un producto hasta la confirmación
    When agrega el producto "Sauce Labs Backpack" al carrito
    And accede al carrito de compras
    And inicia el proceso de compra
    And completa sus datos de envío: nombre "Juan", apellido "Perez" y código postal "15001"
    And continúa al resumen de la orden
    Then ve en el resumen el producto "Sauce Labs Backpack"
    When finaliza la compra
    Then ve el mensaje de confirmación "Thank you for your order!"
