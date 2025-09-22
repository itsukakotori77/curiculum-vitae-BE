import { Expose, Transform } from "class-transformer";
import { IsOptional } from "class-validator";

export class FileCurrDto {
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  id?: bigint | number
  
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  cvtae_id: BigInt | number
  
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  file_id: BigInt | number 


  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  created_at?: Date

  @Expose()
  @Transform(({ value }) => (value ? value.toISOString() : null), {
    toPlainOnly: true,
  })
  @IsOptional()
  updated_at?: Date
}
