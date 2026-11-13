@login
Feature: Inicio de sesión en Sauce Demo
  Como cliente de Sauce Demo
  Quiero poder iniciar sesión
  Para acceder al catálogo de productos

  Background:
    Given que el usuario está en la página de login

  Scenario: Inicio de sesión exitoso con un usuario estándar
    When inicia sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Then es redirigido a la página de productos

  Scenario: Inicio de sesión fallido con un usuario bloqueado
    When inicia sesión con el usuario "locked_out_user" y la contraseña "secret_sauce"
    Then ve el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  Scenario Outline: Inicio de sesión fallido con credenciales inválidas
    When inicia sesión con el usuario "<usuario>" y la contraseña "<password>"
    Then ve el mensaje de error "<mensaje>"

    Examples:
      | usuario          | password         | mensaje                                                                   |
      | usuario_invalido | secret_sauce     | Epic sadface: Username and password do not match any user in this service |
      | standard_user    | clave_incorrecta | Epic sadface: Username and password do not match any user in this service |
      |                  | secret_sauce     | Epic sadface: Username is required                                        |
      | standard_user    |                  | Epic sadface: Password is required                                        |
