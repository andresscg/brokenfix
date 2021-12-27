const joi = require('joi')

const validator = (req, res, next) => {  // se valida el register

    const schema = joi.object({
        name: joi.string().max(18).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'Name must contain more than 3 characters',
            'string.empty': 'Name is not allowed to be empty',
            'string.pattern.base': 'Name should contain just letters from a-z or A-Z',
            'string.max': 'Name length must be less than or equal to 12 characters long'
        }),
        password: joi.string().min(6).trim().messages({
            'string.min': 'Password must contain more than 3 characters',
            'string.empty': 'Password is not allowed to be empty',
            'string.pattern.base': 'Password should contain just letters from a-z or A-Z',
        }),
        address: {
            number: joi.number().min(3).messages({
                'string.min': 'Number must contain more than 3 characters',
                'string.empty': 'Number is not allowed to be empty',
            }),
            street: joi.string().min(3).trim().messages({
                'string.min': 'Street must contain more than 3 characters',
                'string.empty': 'Street is not allowed to be empty',
            }),
            commune: joi.string().min(3).trim().messages({
                'string.min': 'Commune must contain more than 3 characters',
                'string.empty': 'Commune is not allowed to be empty',
            })
        },
        lastName: joi.string().max(12).min(3).required().pattern(new RegExp('[a-zA-Z]')).trim().messages({
            'string.empty': 'LastName is not allowed to be empty',
            'string.pattern.base': 'LastName should contain just letters from a-z or A-Z',
            'string.max': 'LastName length must be less than or equal to 12 characters long',
            'string.min': 'LastName must contain more than 3 characters',
        }),
        email: joi.string().required().email().trim().messages({
            'string.empty': 'email is not allowed to be empty',
            'string.email': 'email must be a valid email'
        }),
        img: joi.string().uri().required().trim().messages({
            'string.empty': 'img is not allowed to be empty',
            'string.uri': 'img must be a valid uri'
        }),
        phoneNumber: joi.number().required().messages({
            'string.empty': 'phoneNumber is not allowed to be empty',
            'string.uri': 'phoneNumber must be a valid uri'
        })
        ,
        workers: joi.array().required().messages({}),
        admin: joi.boolean(),
        google: joi.boolean(),
    })

    const validation = schema.validate(req.body, { abortEarly: false })

    if (validation.error) {
        return res.json({ success: false, validate: validation.error.details })
    }

    next()


}

module.exports = validator