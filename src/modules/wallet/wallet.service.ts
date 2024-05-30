import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entity/wallet.entity';
import { DataSource, Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { User } from '../user/entity/user.entity';
import { WalletType } from './wallet.enum';
import { DepositDto } from './dto/wallets.dto';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(Wallet) private walletRepo : Repository<Wallet>,
        private userService : UserService,
        private dataSource : DataSource
    
    ){}
    
    async deposit(depositDto: DepositDto){

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction()
        try {
            const {amount , fullname, mobile} = depositDto;
            const user = await this.userService.createUser({amount,fullname,mobile})
        
            const userData = await queryRunner.manager.findOneBy(User,{id: user.id})
            const newBalance = userData.balance + amount;
            await queryRunner.manager.update(User,{id: user.id},{balance: newBalance});
            await queryRunner.manager.insert(Wallet, {
                amount,
                type: WalletType.Deposit,
                invoice_number : Date.now().toString(),
                userId : user.id
                
            })
            await queryRunner.commitTransaction()
            await queryRunner.release();
        } catch (error) {
            console.log(error);
        
            await queryRunner.rollbackTransaction()
            await queryRunner.release()
        }
        
        return { 
            message : "payment Done!"
        }
        
    } 

}
