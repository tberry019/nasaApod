import axios from "axios"
import { AppState } from "../AppState"
import { Nasa } from "../Models/Nasa"

const apiKey = '?api_key=UAWxxU3c6F1WMikTdKcQGt9Th5IdFyHm4hhwJRX7'
const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})

class NasaService {
  async searchNasa(searchTerm, page) {
    const res = await nasaApi(`?query=${searchTerm}&page=${page}&${apiKey}`)
    console.log('search Nasa res', res)
    AppState.searchResults = res.data.results.map(n => new Nasa(n))
    AppState.totalPages = res.data.total_pages
    AppState.currentPage = res.data.page
  }

}

export const naseService = new NasaService()
