import { IsString } from 'class-validator';

export class BoardCreateDto {
  @IsString()
  title: string;
  @IsString()
  contents: string;
  @IsString()
  matching: string;
  @IsString()
  time: string;
  @IsString()
  date: string;
}
