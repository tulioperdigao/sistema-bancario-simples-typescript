import { Account } from "./Account";

export class BonusDepositAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    bonusDeposit = (value: number) => {
        this.deposit(value + 10);
    }
}