Feature: Login de usuário

 Background:
    Given que o usuário acessou a página de login
    When a página é carregada

  Scenario: Usuário acessa página de login
    Then devo ver a mensagem "Faça login com a sua conta para acessar nosso Portal de Vendas!"


  Scenario: Validar composição da página de login
    Then devo ver a mensagem "Faça login com a sua conta para acessar nosso Portal de Vendas!"
    And o sistema deverá exibir os campos nome e senha
    And deverá existir um link "Esqueceu sua senha?"

  Scenario: Realizar login com sucesso primeiro acesso
    And o usuário digita seu Nome "victor.berton" com sucesso
    And digita sua Senha "NTTdata2025*@" com sucesso
    And clica no botão Entrar
    Then o usuário será direcionado para a homepage e a modal com os termos de aceite deverá ser exibida
    And a modal de farmácia deverá ser exibida caso seja o primeiro acesso

  Scenario: Erro ao realizar login, nome incorreto
    And o usuário digita seu Nome "victor.berton2" de forma incorreta
    And digita sua Senha "NTTdata2025*@" com sucesso
    And clica no botão Entrar
    Then o portal exibirá a seguinte mensagem de erro "Não foi possível fazer login. Para mais informações, ligue no 0000-0000 e informe o CÓDIGO 02."

  Scenario: Erro ao realizar login, senha incorreto
    And o usuário digita seu Nome "victor.berton" com sucesso
    And digita sua Senha "NTTdata2025*@1" incorretamente
    And clica no botão Entrar
    Then o portal exibirá a seguinte mensagem de erro "Usuário e/ou senha incorreto. Revise os dados informados"

  Scenario: Esqueci minha senha
    And clica em Esqueceu sua senha?
    And a modal foi aberta e apresentou o texto "Por favor, informe seu usuário para receber o código de validação."
    And o usuário digita seu Nome de usuário "victor.berton"
    And clica em Receber Código
    Then o portal deverá exibir a mensagem de confirmação "Um código de validação foi enviado para seu email:"