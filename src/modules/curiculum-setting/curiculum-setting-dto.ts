import { Expose, Transform } from "class-transformer";

export class CuriculumSettingDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? value.toString() : value,
  )
  id?: bigint | number
}
