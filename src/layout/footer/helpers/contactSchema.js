import Joi from "joi";

const contactSchema = {
    name: Joi.string().min(2).max(256).required(),
    email: Joi.string()
        .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: "Please enter a valid mail" })
        .required(),
    phone: Joi.string()
        .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({ message: 'user "phone" must be a valid phone number' })
        .required(),
    content: Joi.string().min(2).max(1024).required(),
};


export default contactSchema;