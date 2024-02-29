import { IsDateString, IsDefined, IsString, IsUUID, Length} from "class-validator";

export class card {
  
  @IsDefined()
  @Length(5, 30)
  titule: string;


  @Length(45, 200)
  @IsDefined()
  @IsString()
  descripcion: string;

  @IsDefined()
  @IsDateString()
  fecha_Date : Date

  
  @IsDefined()
  @IsUUID()

  listId : string;

  @IsDefined()
  @IsUUID()

  isOwnerId : string;

}
