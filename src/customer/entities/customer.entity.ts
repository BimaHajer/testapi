

import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Formation } from 'src/formation/entities/formation.entity';
@Entity("Customer")
export class Customer {
    @ApiProperty()
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @ApiProperty()
    @Column("text", { name: "email", nullable: true, unique: true })
    email:string | undefined
    @ApiProperty()
    @Column("text", { name: "firstName", nullable: true, unique: true })
    firstName:string | undefined
    @ApiProperty()
    @Column("text", { name: "lastName", nullable: true, unique: true })
    lastName:string | undefined
    @ApiProperty()
    @Column("text", { name: "contact", nullable: true, unique: true })
    contact:string | undefined
    @ApiProperty()
    @Column("text", { name: "oldpassword", nullable: true, unique: true })
    oldPassword : string
    @Column("text", { name: "password", nullable: true, unique: true })
    Password : string
    @ApiProperty()
    @Column("text", { name: "active", nullable: true, unique: true })
    active: boolean
    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null
    @ApiProperty()
    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
    
    @ManyToMany(type => Formation, formation => formation.clients)
    @JoinTable()
    formations: Formation[];
    @BeforeInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updatedAt = new Date();
}
}