import { User } from "src/modules/user/entity/user.entity";
export declare class Wallet {
    id: number;
    type: string;
    invoice_number: string;
    amount: number;
    created_at: Date;
    userId: number;
    user: User;
}
