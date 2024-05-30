import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    findById(id: number): Promise<User>;
    createUser(userDto: CreateUserDto): Promise<User>;
}
