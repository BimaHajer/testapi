
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateUser1Dto {
    @ApiProperty()
   public email?: string;
    @ApiProperty()
    public userName: string;
    @ApiProperty()
    public password?: string;
    public resToken:string;

}
// export class PostUserDto extends PartialType(UserIocDto) {

//     readonly contactId?: ContactsDto;
//   }

// export class UpdateUserDto extends PartialType(UserIocDto) {

//     readonly contactId?: ContactsDto;
//   }