import { Account } from "./Account";

export class CompanyAccount extends Account {

    // Construtor
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    // Métodos
    getLoan = (value: number) => {
        const accountStatus = this.getStatus();
        if (accountStatus === true) {
            this.setBalance(value);
            console.log(`💸 Empréstimo realizado com sucesso: R$${value},00.`)
        } else {
            console.log('🚨 Empréstimo negado! Conta inválida.')
        }
    }

}