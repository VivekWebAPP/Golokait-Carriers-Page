import { UserRegistration } from '../../API/regesterUser.js';
import {sendEmail} from '../../API/SendEmail.js';

export const UserRegest = (name, email, resume) => {
    return async (dispatch) => {
        try {
            console.log('Action Creater',name, email, resume)
            const res = await UserRegistration(name, email, resume);
            dispatch({
                type: "REGESTRATION_SUCCESS",
                payload: res,
            });
        } catch (error) {
            dispatch({
                type: "REGESTRATION_FAILURE",
                payload: error.message,
            });
        }
    };
};

export const sendEmailToUser = (to, subject,text) => {
    return async (dispatch) => {
        try {
            const response = await sendEmail(to, subject,text);
            dispatch({
                type: "Send_Successfull",
                payload: response,
            })
        } catch (error) {
            dispatch({
                type: "Send_Unsuccessfull",
                payload: error.message,
            })
        }
    }
}