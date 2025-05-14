import { CuriculumEducationDto } from "src/modules/curiculum-education/curiculum-education-dto";
import { CuriculumExperienceDto } from "src/modules/curiculum-experience/curiculum-experience-dto";

export interface IBaseResponse {
   totalData: number 
   totalPage: number 
   currentPage: number
}

export interface ICurriculumEducation extends IBaseResponse {
   data: CuriculumEducationDto[] | CuriculumEducationDto
}

export interface ICurriculumExperience extends IBaseResponse {
   data: CuriculumExperienceDto[] | CuriculumExperienceDto
}

