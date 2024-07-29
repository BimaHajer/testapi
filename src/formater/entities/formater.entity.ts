
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Formation } from 'src/formation/entities/formation.entity';
@Entity("Formater")
export class Formater {
    @ApiProperty()

    @PrimaryGeneratedColumn({ name: "id" })
    id: number;
    @ApiProperty()
    @Column("text", { name: "email", nullable: true, unique: true })
    email:string | undefined
    @ApiProperty()
    @Column("text", { name: "fullname", nullable: true, unique: true })
    fullname : string
    @ApiProperty()
    @Column("text", { name: "name", nullable: true, unique: true })
    name : string
    @Column("text", { name: "password", nullable: true, unique: true })
    Password : string
    @ApiProperty()
    @Column("text", { name: " role", nullable: true, unique: true })
    role: string
    @ApiProperty()
    @Column("text", { name: " resToken", nullable: true, unique: true })
    resToken: string
    @ApiProperty()
    @Column("integer", { name: "tel", nullable: true, unique: true })
    tel: number
    @ApiProperty()
    @Column("text", { name: "address", nullable: true, unique: true })
    address: string
    @ApiProperty()
    @Column("text", { name: "city", nullable: true, unique: true })
    city: string
    @ApiProperty()
    @Column("text", { name: "specialization", nullable: true, unique: true })
    specialization: string
    @ApiProperty()
    @Column("integer", { name: "numberYears", nullable: true, unique: true })
    numberYears: number

  
    @OneToMany(type => Formation, formation => formation.formater)
    formations: Formation[];
    
    @ApiProperty()
    @Column("text", { name: "active", nullable: true, unique: true })
    active: boolean
    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null
    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;
    @ApiProperty()
    @Column("timestamp with time zone", { name: "createAt", nullable: true })
    createdAt: Date | null;
    @BeforeInsert()
    eventCreatedAt() {
      this.createdAt = new Date();
    }
  
    @BeforeUpdate()
    eventUpdatedAt() {
      this.updatedAt = new Date();
    }

}
