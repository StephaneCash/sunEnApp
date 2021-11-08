import axios from 'axios';

const url = "http://localhost:8000/api";

export default {
    getAll: () =>
        axios.get(`${url}/energies`),
    getOn: (id) =>
        axios.get(`${url}/energies/${id}/edit`),
    add: (energie) =>
        axios.post(`${url}/energies`, energie),
    update: (energie, id) =>
        axios.put(`${url}/energies`, energie),
    delete: (id) =>
        axios.delete(`${url}/energies/${id}`),
}