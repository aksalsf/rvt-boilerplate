import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"

import { searchPokemonFormSchema, SearchPokemonForm } from "@/features/pokemon"

function useSearchPokemon () {
  const {
    control,
    handleSubmit,
    formState:{ errors }
  } = useForm<SearchPokemonForm>({
    defaultValues: {
      pokemon: "",
    },
    resolver: yupResolver(searchPokemonFormSchema)
  })

  const navigate = useNavigate()

  function onSubmit (querySearch: SearchPokemonForm) {
    navigate(`/pokemon/${querySearch.pokemon}`)
  }

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
