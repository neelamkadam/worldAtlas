import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
    username:Yup.string().min(3).required("name is required"),
    email:Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message cannot be empty").min(10, "At least 10 characters"),

});