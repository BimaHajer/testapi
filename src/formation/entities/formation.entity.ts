import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User1 } from 'src/user1/entities/user1.entity';
import { Formater } from 'src/formater/entities/formater.entity';
import { Customer } from 'src/customer/entities/customer.entity';

@Entity("Formation")
export class Formation {
    @ApiProperty()
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @ApiProperty()
    @Column("text", { name: "titre", nullable: true, unique: true })
    titre:string | undefined
    @ApiProperty()
    @Column("text", { name: "description", nullable: true, unique: true })
    description : string
    @ApiProperty()
    @Column("text", { name: "specialization", nullable: true, unique: true })
    specialization : string
    @Column("integer", { name: "Number_hours", nullable: true, unique: true })
   NumberHours : number
   @ManyToOne(type => Formater, formater => formater.formations)
    formaterID: number | null;
    @ApiProperty()
    @Column("boolean", { name: "active", nullable: true, unique: true })
    active: boolean
    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null
    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;
    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
    @ManyToMany(type => Customer, client => client.formations)
    clients: Customer[];
    @BeforeInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updatedAt = new Date();
}
}


