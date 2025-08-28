import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform, Type } from 'class-transformer'
import { CuriculumEducationDto } from '../curiculum-education/curiculum-education-dto'
import { CuriculumExperienceDto } from '../curiculum-experience/curiculum-experience-dto'
import { CuriculumSkillDto } from '../curiculum-skill/curiculum-skill-dto'
import { CuriculumTemplateDto } from '../curiculum-template/curiculum-template-dto'

export class CuriculumVitaeDto {
  @Expose()
  @Transform(({ value }) => {
    if (value === undefined || value === null) return undefined;
    return typeof value === 'bigint' ? +value.toString() : +value;
  })
  @IsOptional()
  id?: bigint | number

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 'John Doe' })
  name: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @Matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, {
    message: 'email tidak valid',
  })
  @ApiProperty({ default: 'john.doe@example.com' })
  email: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: '081234567890' })
  phone: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 'Jl. Contoh No. 123, Jakarta' })
  address: string

  @Expose()
  @IsString({ message: 'harus berupa string' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 'Summary' })
  summary: string

  @Expose()
  @IsNumber({ allowNaN: false }, { message: 'harus berupa numeric' })
  @IsNotEmpty({ message: 'harus diisi' })
  @ApiProperty({ default: 1 })
  user_id: number

  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? +value.toString() : +value,
  )
  @IsOptional()
  @IsNumber({ allowNaN: false }, { message: 'harus berupa numeric' })
  @ApiProperty({ default: 1, required: false })
  cvitae_setting_id?: bigint | number

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CuriculumEducationDto)
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 pendidikan' })
  @ApiProperty({
    type: [CuriculumEducationDto],
    default: [
      {
        school: 'SMKN 1 Cimahi',
        degree: 'SMK',
        start_date: '2025-03-03T16:30:00.000Z',
        end_date: '2025-03-03T16:30:00.000Z',
      },
    ],
  })
  curEducation?: Omit<CuriculumEducationDto, 'cvitae_id' | 'id' | 'created_at' | 'updated_at'>[]

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CuriculumExperienceDto)
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 pengalaman' })
  @ApiProperty({
    type: [CuriculumExperienceDto],
    default: [
      {
        company: 'PT. Contoh',
        position: 'Software Engineer',
        start_date: '2025-03-03T16:30:00.000Z',
        end_date: '2025-03-03T16:30:00.000Z',
      },
    ],
  })
  curExperience?: Omit<CuriculumExperienceDto, 'cvitae_id' | 'id' | 'created_at' | 'updated_at'>[]

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CuriculumSkillDto)
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 skill' })
  @ApiProperty({
    type: [CuriculumSkillDto],
    default: [
      {
        skill: 'PHP',
        level: 5,
      },
    ],
  })
  curSkill?: Omit<CuriculumSkillDto, 'cvitae_id' | 'id' | 'created_at' | 'updated_at'>[]

  @Expose()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CuriculumTemplateDto)
  @ApiProperty({
    type: [CuriculumTemplateDto],
    default: [
      {
        name: 'Template 1',
      },
    ],
  })
  curTemplate?: Omit<CuriculumTemplateDto, 'cvitae_id' | 'id' | 'created_at' | 'updated_at'>[]


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
