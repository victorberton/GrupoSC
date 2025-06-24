Feature: Minha conta

 Background:
    Given que o usuário acessou a página de login
    When a página é carregada
    And o usuário digita seu Nome "victor.berton" com sucesso
    And digita sua Senha "NTTdata2025*@" com sucesso
    And clica no botão Entrar
    Then o usuário será direcionado para a homepage e a modal com os termos de aceite deverá ser exibida
    And a modal de farmácia deverá ser exibida caso seja o primeiro acesso
@focus 
  Scenario: Alterar senha
    When abro o menu no cabeçalho e clico na opção Alterar senha
    Then o portal deverá apresentar uma modal com o título "Alterar minha senha"
    And deverá apresentar os campos "Senha atual", "Nova senha" e "Confirmar senha"
    And apresentar as regras de senha "Máximo de 20 caracteres", 
    "Mínimo de 6 caracteres", "Alfanumérico", "Pelo menos 1 caractere especial (Ex.: @, #, !, $)", 
    "Sem caracteres sequênciais (Ex.:123456ABC)" e "Ambas as senhas devem ser iguais"