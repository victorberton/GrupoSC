Feature: Minha conta
   
  Scenario: Alterar senha
    Given que o usuário realizou login
    When abro o menu no cabeçalho e clico na opção Alterar senha
    Then o portal deverá apresentar uma modal com o título "Alterar minha senha"
    And deverá apresentar os campos "Senha atual", "Nova senha" e "Confirmar senha"
    And apresentar as regras de senha:
    | Máximo de 20 caracteres                        |
    | Mínimo de 6 caracteres                         |
    | Alfanumérico                                   |
    | Pelo menos 1 caractere especial (Ex.: @, #, !, $) |
    | Sem caracteres sequênciais (Ex.:123456ABC)     |
    | Ambas as senhas devem ser iguais               |