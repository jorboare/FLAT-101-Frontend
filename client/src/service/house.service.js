import axios from 'axios'

export default class HouseService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000'
        })
    }

    getHouses = () => this.apiHandler.get('/houses')
    newHouse = house => this.apiHandler.post('/new', house)
    getHouseDetails = id => this.apiHandler.get(`/houses/${id}`)
    editHouse = (id, house) => this.apiHandler.put(`/edit/${id}`, house)
    delete = id => this.apiHandler.delete(`/delete/${id}`)
}