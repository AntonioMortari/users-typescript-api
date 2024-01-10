import { RequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import * as yup from 'yup'


type options = 'body' | 'query' | 'params' | 'headers'
type TValidate = (schemas: Partial<Record<options, yup.Schema<unknown>>>) => RequestHandler
type allErrors = Record<string, Record<string, string>>

const validate: TValidate = (schemas) => {

    return async (req, res, next) => {
        const allErrors: allErrors = {}

        Object.entries(schemas).map(([option, schema]) => {

            try {
                schema.validateSync(req[option as options], { abortEarly: false })
            } catch (error) {
                const yupError = error as yup.ValidationError

                const errors: Record<string, string> = {}

                yupError.inner.map(error => {
                    if (!error.path) return

                    errors[error.path] = error.message
                })

                allErrors[option] = errors
            }

        })

        if (Object.entries(allErrors).length > 0) {
            res.status(StatusCodes.BAD_REQUEST).json(allErrors)
        } else {
            next()
        }

    }

}

export { validate }