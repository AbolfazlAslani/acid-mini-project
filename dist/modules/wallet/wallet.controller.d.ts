import { WalletService } from './wallet.service';
import { DepositDto } from './dto/wallets.dto';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    deposit(depositdto: DepositDto): Promise<{
        message: string;
    }>;
}
