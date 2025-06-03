# 💳 Dio Bank - Desafio de Orientação a Objetos com TypeScript

Este projeto simula o funcionamento de um sistema bancário utilizando os conceitos de **Programação Orientada a Objetos (POO)** com **TypeScript**. Foi desenvolvido como parte de um desafio prático da DIO (Digital Innovation One), reforçando conceitos como herança, encapsulamento, polimorfismo e abstração.

## 📌 Desafios Propostos

[ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[ ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[ ] Todos os atributos de qualquer conta devem ser privados

[ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

## 🧠 Conceitos Aplicados

- **Abstração**: Uma classe abstrata `Account` foi criada como base para os demais tipos de conta
- **Encapsulamento**: Todos os atributos são `private`, protegendo os dados
- **Herança**: `PeopleAccount`, `CompanyAccount` e `BonusDepositAccount` herdam comportamentos da classe `Account`


## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dio-bank-oo-ts.git
   cd dio-bank-oo-ts
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Compile o projeto:
   ```bash
   tsc
   ```

4. Execute o projeto:
   ```bash
   node dist/app.js
   ```

> Certifique-se de que o TypeScript esteja instalado globalmente (`npm install -g typescript`) ou utilize `npx tsc`.

## 📌 Autor

Desenvolvido por **Tulio Castro**  
🔗 [LinkedIn](https://www.linkedin.com/in/tulio-perdigao/) • [GitHub](https://github.com/tulioperdigao)