import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepo : Repository<User>
    ){}
    
    async findById(id : number){
        const user = await this.userRepo.findOneBy({id});
        if (!user) throw new NotFoundException("User Not Found !")
        return user;
    } 
    
    async createUser(userDto : CreateUserDto){
        const {mobile} = userDto;
        let user = await this.userRepo.findOneBy({mobile})
        if(!user) {
            user = this.userRepo.create(userDto)
            return await this.userRepo.save(user)
        }
        return user; 
    
        
    }
    

}
