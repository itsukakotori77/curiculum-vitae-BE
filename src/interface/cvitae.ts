import { CuriculumEducationDto } from "src/modules/curiculum-education/curiculum-education-dto";
import { CuriculumExperienceDto } from "src/modules/curiculum-experience/curiculum-experience-dto";
import { CuriculumSkillDto } from "src/modules/curiculum-skill/curiculum-skill-dto";
import { CuriculumTemplateDto } from "src/modules/curiculum-template/curiculum-template-dto";
import { CuriculumVitaeDto } from "src/modules/curiculum-vitae/curiculum-vitae-dto";

export interface IBaseResponse {
   totalData: number 
   totalPage: number 
   currentPage: number
}

export interface ICurriculumVitae extends IBaseResponse {
   data: CuriculumVitaeDto[] | CuriculumVitaeDto
}

export interface ICurriculumEducation extends IBaseResponse {
   data: CuriculumEducationDto[] | CuriculumEducationDto
}

export interface ICurriculumExperience extends IBaseResponse {
   data: CuriculumExperienceDto[] | CuriculumExperienceDto
}

export interface ICurriculumSkill extends IBaseResponse {
   data: CuriculumSkillDto[] | CuriculumSkillDto
}

export interface ICurriculumTemplate extends IBaseResponse {
   data: CuriculumTemplateDto[] | CuriculumTemplateDto
}

