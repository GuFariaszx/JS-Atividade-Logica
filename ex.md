# Exercícios de Condicionais

### **Nível Básico**

1. **Verificar maioridade:**
    1. Peça ao usuário uma idade.
    2. Use um `if-else` para verificar se ele é maior ou menor de idade.
    - Fluxograma.
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite sua idade (input)"]
            B --> C{"Idade >= 18?"}
            C -- Sim --> D["Exibir: Você é maior de idade (alert)"]
            C -- Não --> E["Exibir: Você é menor de idade (alert)"]
            D --> F["Fim"]
            E --> F
        
            B@{ shape: manual-input}
            D@{ shape: display}
            E@{ shape: display}
             A:::Sky
             B:::Sky
             C:::Sky
             D:::Sky
             E:::Sky
             F:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
        
        ```
        
2. **Verificar se um número é positivo ou negativo:**
    - Peça ao usuário para inserir um número.
    - Use um `if-else` para verificar se o número é positivo, negativo.
    - OBS: *Por hora* considere o 0 como sendo um número negativo.
    - Fluxograma
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite um número (input)"]
            B --> C{"Número > 0?"}
            C -- Sim --> D["Exibir: O número é positivo (console.log)"]
            C -- Não --> E["Exibir: O número é negativo (console.log)"]
            D --> F["Fim"]
            E --> F
        
            B@{ shape: manual-input}
            D@{ shape: display}
            E@{ shape: display}
            A:::Sky
            B:::Sky
            C:::Sky
            D:::Sky
            E:::Sky
            F:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
        
        ```
        
3. **Aprovação em uma prova:**
    - O usuário insere a nota de um aluno (0 a 100).
    - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".
    - Fluxograma
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite a nota do aluno (input)"]
            B --> C{"Nota >= 60?"}
            C -- Sim --> D["Exibir: Aprovado (alert)"]
            C -- Não --> E["Exibir: Reprovado (alert)"]
            D --> F["Fim"]
            E --> F
        
            B@{ shape: manual-input}
            D@{ shape: display}
            E@{ shape: display}
            A:::Sky
            B:::Sky
            C:::Sky
            D:::Sky
            E:::Sky
            F:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
        
        ```
        
4. **Verificar se um número é positivo, negativo ou zero:**
    - Peça ao usuário para inserir um número.
    - Use um `if-else` para verificar se o número é positivo, negativo ou zero.
    - Fluxograma
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite um número (input)"]
            B --> C{"Número > 0?"}
            C -- Sim --> D["Exibir: O número é positivo (alert)"]
            C -- Não --> E{"Número < 0?"}
            E -- Sim --> F["Exibir: O número é negativo (alert)"]
            E -- Não --> G["Exibir: O número é zero (alert)"]
            D --> H["Fim"]
            F --> H
            G --> H
        
            B@{ shape: manual-input}
            D@{ shape: display}
            F@{ shape: display}
            G@{ shape: display}
            A:::Sky
            B:::Sky
            C:::Sky
            D:::Sky
            E:::Sky
            F:::Sky
            G:::Sky
            H:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
            style E stroke:none
        
        ```
        
5. **Classificação de idade:**
    - Peça ao usuário para inserir sua idade.
    - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
    - Fluxograma
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite sua idade (input)"]
            B --> C{"Idade entre 0 e 12?"}
            C -- Sim --> D["Exibir: Você é uma Criança (alert)"]
            C -- Não --> E{"Idade entre 13 e 17?"}
            E -- Sim --> F["Exibir: Você é um Adolescente (alert)"]
            E -- Não --> G{"Idade maior ou igual a 18?"}
            G -- Sim --> H["Exibir: Você é um Adulto (alert)"]
            G -- Não --> I["Exibir: Idade inválida, insira um numero positivo. (alert)"]
            
            D --> J["Fim"]
            F --> J
            H --> J
            I --> J
        
            B@{ shape: manual-input}
            D@{ shape: display}
            F@{ shape: display}
            H@{ shape: display}
            I@{ shape: display}
            A:::Sky
            B:::Sky
            C:::Sky
            D:::Sky
            E:::Sky
            F:::Sky
            G:::Sky
            H:::Sky
            I:::Sky
            J:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
            style E stroke:none
            style G stroke:none
        
        ```
        
6. **Verificar se um número é par ou ímpar:**
    - Peça ao usuário para inserir um número.
    - Use o operador `%` para verificar se o número é divisível por 2.
    - Fluxograma
        
        ```mermaid
        flowchart TD
            A["Início"] --> B["Digite um número (input)"]
            B --> C{"Número % 2 == 0?"}
            C -- Sim --> D["Exibir: O número é par (alert)"]
            C -- Não --> E["Exibir: O número é ímpar (alert)"]
            D --> F["Fim"]
            E --> F
        
            B@{ shape: manual-input}
            D@{ shape: display}
            E@{ shape: display}
            A:::Sky
            B:::Sky
            C:::Sky
            D:::Sky
            E:::Sky
            F:::Sky
            classDef Sky stroke-width:1px, stroke-dasharray:none, stroke:#374D7C, fill:#E2EBFF, color:#374D7C
            style C stroke:none
        
        ```
        

---

### **Nível Intermediário**

1. **Calculadora simples:**
    - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
    - Use um `if-else` para calcular o resultado e exibi-lo.
2. **Maior entre três números:**
    - O usuário insere três números.
    - Use `if-else` para determinar e exibir o maior.
3. **Desconto em compras:**
    - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
    - Caso contrário, exiba o valor normal.
4. **Sistema de login simples:**
    - O usuário insere um nome de usuário e senha.
    - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

---

### **Nível Avançado**

1. **Classificação de triângulos:**
    - O usuário insere três lados.
    - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.
2. **Conversão de notas para conceitos:**
    - O usuário insere uma nota (0-100).
    - Converta para conceitos:
    - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).
3. **Cálculo de IMC:**
    - Peça peso e altura.
    - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.
4. **Validação de ano bissexto:**
    - Peça um ano e verifique se é bissexto.
    - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.