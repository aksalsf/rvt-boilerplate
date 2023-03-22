import * as yup from "yup"

const searchPokemonFormSchema = yup.object().shape({
  pokemon: yup
    .string()
    .required()
    .matches(/^[aA-zZ\s]+$/, "Don't put number there!"),
})

export { searchPokemonFormSchema }
