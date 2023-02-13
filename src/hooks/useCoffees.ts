import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

import { CoffeeDTO } from '../dtos/CoffeeDTO'
import { CategoryDTO } from '../dtos/CategoryDTO'

export interface CoffeeData extends CoffeeDTO {
  categories: CategoryDTO[]
}

export function useCoffees() {
  const [coffees, setCoffees] = useState<CoffeeData[]>([])
  const [categories, setCategories] = useState<CategoryDTO[]>([])

  async function fetchCoffees() {
    try {
      const [coffeesResponse, categoriesResponse] = await Promise.all([
        api.get<CoffeeDTO[]>('/coffees'),
        api.get<CategoryDTO[]>('/categories'),
      ])

      const coffeesTransformed = coffeesResponse.data.map((coffee) => {
        const coffeeCategories = categoriesResponse.data.filter((category) =>
          coffee.categories_ids.includes(category.id),
        )

        return { ...coffee, categories: coffeeCategories }
      })

      setCategories(categoriesResponse.data)
      setCoffees(coffeesTransformed)
    } catch (error) {
      toast.error('Erro! Não foi possível carregar a lista de cafés.')
    }
  }

  useEffect(() => {
    fetchCoffees()
  }, [])

  return { coffees, categories }
}
