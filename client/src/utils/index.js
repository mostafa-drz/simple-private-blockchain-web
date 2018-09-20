import axios from 'axios';
export const fetchBlockCounts = () => {
    return axios.get('/api/block-height');
}

export const getBlockInfo = ({
    height
}) => {
    return axios.get(`/api/block/${height}`)
}

export const getResponseErrorMessage = (error) => {
    return error.response ? error.response.data.error.message || 'Soemthing went wrong' : 'Something wnet wrong'
}