import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from '@nestjs/class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Expose, Transform } from 'class-transformer'
import { CuriculumEducationDto } from '../curiculum-education/curiculum-education-dto'
import { CuriculumExperienceDto } from '../curiculum-experience/curiculum-experience-dto'
import { CuriculumSkillDto } from '../curiculum-skill/curiculum-skill-dto'
import { CuriculumTemplateDto } from '../curiculum-template/curiculum-template-dto'

export class CuriculumVitaeDto {
  @Expose()
  @Transform(({ value }) =>
    typeof value === 'bigint' ? value.toString() : value,
  )
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
  @IsOptional()
  @ApiProperty({
    type: [CuriculumEducationDto],
    default: [
      {
        school: 'SMKN 1 Cimahi',
        degree: 'SMK',
        start_date: '2025-03-03 16:30:00',
        end_date: '2025-03-03 16:30:00',
        cvitae_id: 1,
      },
    ],
  })
  
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 pendidikan' })
  curEducation?: CuriculumEducationDto[]

  @Expose()
  @IsOptional()
  @ApiProperty({
    type: [CuriculumExperienceDto],
    default: [
      {
        company: 'PT. Contoh',
        position: 'Software Engineer',
        start_date: '2025-03-03 16:30:00',
        end_date: '2025-03-03 16:30:00',
        cvitae_id: 1,
      },
    ],
  })
  
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 pengalaman' })
  curExperience?: CuriculumExperienceDto[]

  @Expose()
  @IsOptional()
  @ApiProperty({
    type: [CuriculumSkillDto],
    default: [
      {
        skill: 'PHP',
        level: 'Expert',
        cvitae_id: 1,
      },
    ],
  })
  
  @IsArray()
  @ArrayMinSize(1, { message: 'minimal harus memiliki 1 skill' })
  curSkill?: CuriculumSkillDto[]

  @Expose()
  @IsOptional()
  @ApiProperty({
    type: [CuriculumTemplateDto],
    default: [
      {
        template: 'Template 1',
        cvitae_id: 1,
      },
    ],
  })
  @IsArray()
  curTemplate?: CuriculumTemplateDto[]

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
