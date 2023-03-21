import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { searchPokemonFormSchema, SearchPokemonForm } from "@/features/pokemon"

function useSearchPokemon () {
  const { control, handleSubmit, formState:{ errors } } = useForm<SearchPokemonForm>({
    defaultValues: {
      pokemon: "",
    },
    resolver: yupResolver(searchPokemonFormSchema)
  })
  const onSubmit: SubmitHandler<SearchPokemonForm> = data => console.log(data)

  return {
    methods: {
      onSubmit
    },
    form: {
      control,
      errors,
      handleSubmit,
    }
  }
}

export default useSearchPokemon
