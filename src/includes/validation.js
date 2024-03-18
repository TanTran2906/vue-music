import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from "vee-validate";
import { required, min, max, alpha_spaces, email, min_value, max_value, confirmed, not_one_of } from "@vee-validate/rules";
export default {
    install(app) {
        app.component("VeeForm", VeeForm)
        app.component("VeeField", VeeField)
        app.component("ErrorMessage", ErrorMessage)

        defineRule("required", required)
        defineRule("tos", required) //Custom error
        defineRule("min", min)
        defineRule("max", max)
        defineRule('alpha_spaces', alpha_spaces)
        defineRule('email', email)
        defineRule('min_value', min_value)
        defineRule('max_value', max_value)
        defineRule('confirmed', confirmed)
        defineRule('passwords_mismatch', confirmed) //Custom error
        defineRule('not_one_of', not_one_of)
        defineRule('country_excluded', not_one_of)  //Custom error
        defineRule('excluded', not_one_of) //Custom error

        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `The field ${ctx.field} is required.`,
                    min: `The field ${ctx.field} is too short.`,
                    max: `The field ${ctx.field} is too long.`,
                    alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
                    email: `The field ${ctx.field} must be a valid email.`,
                    min_value: `The field ${ctx.field} is too low.`,
                    max_value: `The field ${ctx.field} is too high.`,
                    excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
                    country_excluded: `Due to restrctions, we do not accept users from this location.`,
                    passwords_mismatch: "The passwords don't match",
                    tos: "You must acept the Terms of Service."

                }

                const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is in valid.`;
                return message

            },
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: true,
            validateOnModelUpdate: true,
        })
    }
}