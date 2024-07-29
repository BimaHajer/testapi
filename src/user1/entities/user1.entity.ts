
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BeforeInsert, BeforeUpdate, Column ,Entity,PrimaryGeneratedColumn} from "typeorm";
@Entity('User2')// name of class on dataBAse
export class User1 {
@ApiProperty()// sawggar
@PrimaryGeneratedColumn({name:'id'})// declaration f base de donnée 
public id:number;// decalartion pour nest js for controller and view 
@ApiProperty()
@Column("text",{name:"username",nullable:false,default:"name"})
public userName:string;
@ApiProperty()
@Column('text',{name:"email",nullable:true})
public email:string;
@ApiProperty()
@Column('text',{name:"password"})
public password:string;
@Column('text',{name:"resToken"})
public resToken:string;
@ApiProperty()
@Column('integer',{name:"tel",unique:true,nullable:true})
public tel:number
@ApiProperty()
@Column("date",{name:'dateBirth',nullable:true})
public dateBirth;
@Column("boolean",{name:'isActive',nullable:true})
public isActive: boolean;

@Column("timestamp with time zone", { name: "createdat", nullable: true })
  createdAt: Date | null;
public createAt;
@Column("date",{name:'updateAT',nullable:true})
public updateAt;
@BeforeInsert()
eventCre7atedAt() {
  this.createdAt = new Date();
}
@BeforeUpdate()
beforeUpdate(){
    return this.updateAt=new Date()
}
}
