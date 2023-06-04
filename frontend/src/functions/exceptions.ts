import {BadRequestErrorsModel} from "../models/BadRequestErrorsModel";

export function badRequestErrorsTratative(data: BadRequestErrorsModel): Array<string>{
    let rawErrors = data.errors;
    let errorsMessages: Array<string> = [];

    Object.keys(rawErrors).map((key: string) => {
        rawErrors[key].forEach((errorMessage: string) => {
            errorsMessages.push(errorMessage);
        });
    })

    return errorsMessages;
}