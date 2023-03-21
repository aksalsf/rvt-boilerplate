import { SubmitHandler, useForm } from "react-hook-form"

interface ISearchFormInput {
  pokemon: string
}

function useSearchPokemon () {
  const { control, handleSubmit } = useForm<ISearchFormInput>({
    defaultValues: {
      pokemon: "",
    }
  })
  const onSubmit: SubmitHandler<ISearchFormInput> = data => console.log(data)

  return {
    methods: {
      onSubmit
    },
    form: {
      control,
      handleSubmit,
    }
  }
}

export default useSearchPokemon
