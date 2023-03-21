import * as yup from "yup"

const searchPokemonFormSchema = yup.object().shape({
  pokemon: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Don't put number there!"),
})

declare interface SearchPokemonForm extends yup.InferType<typeof searchPokemonFormSchema> {
  pokemon: string
}

export type { SearchPokemonForm }

export { searchPokemonFormSchema }
