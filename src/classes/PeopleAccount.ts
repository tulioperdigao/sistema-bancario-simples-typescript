import { Account } from "./Account";

export class PeopleAccount extends Account{
    // Atributos
    private readonly documentId: number;

    // Construtor
    constructor (documentId: number, accountNumber: number, name: string) {
        super(name, accountNumber);
        this.documentId = documentId;
    }
}