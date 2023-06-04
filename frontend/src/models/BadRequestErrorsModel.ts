export interface BadRequestErrorsModel {
  success: boolean;
  message: string;
  errors: Errors;
}

interface Errors {
  [key: string]: string[];
}