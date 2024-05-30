import { Wallet } from "src/modules/wallet/entity/wallet.entity";
export declare class User {
    id: number;
    fullname: string;
    mobile: string;
    balance: number;
    created_at: Date;
    transactions: Wallet[];
}
