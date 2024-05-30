import { Wallet } from './entity/wallet.entity';
import { DataSource, Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { DepositDto } from './dto/wallets.dto';
export declare class WalletService {
    private walletRepo;
    private userService;
    private dataSource;
    constructor(walletRepo: Repository<Wallet>, userService: UserService, dataSource: DataSource);
    deposit(depositDto: DepositDto): Promise<{
        message: string;
    }>;
}
