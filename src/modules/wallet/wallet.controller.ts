import { Body, Controller, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { DepositDto } from './dto/wallets.dto';


@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}
  
  @Post("deposit")
  deposit(@Body() depositdto : DepositDto){
    return this.walletService.deposit(depositdto)
  }
  
}
