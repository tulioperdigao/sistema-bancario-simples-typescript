import { BonusDepositAccount } from "./classes/BonusDepositAccount";
import { CompanyAccount } from "./classes/CompanyAccount";
import { PeopleAccount } from "./classes/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(101, 1, 'Tulio');
console.log(peopleAccount);
peopleAccount.deposit(500);
peopleAccount.withdraw(250);
peopleAccount.getBalance();

console.log('-----------------------------')

const companyAccount: CompanyAccount = new CompanyAccount("Tulio's Company", 2);
console.log(companyAccount);
companyAccount.getLoan(1000);
companyAccount.getBalance();

console.log('-----------------------------')

const bonusDepositAccount :BonusDepositAccount = new BonusDepositAccount('Carlos', 3);
console.log(bonusDepositAccount);
bonusDepositAccount.bonusDeposit(100);
bonusDepositAccount.getBalance();