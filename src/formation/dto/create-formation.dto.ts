export class CreateFormationDto {
    id: number
    titre: string
    description: string
    NumberHours: number
    formaterID: number
    active: boolean
    specialization : string
    createdBy: number
     
    updatedBy: number | null;
   
    updatedAt: Date | null;

  
    createdAt: Date | null;


}
