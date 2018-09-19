import axios from 'axios';
export const fetchBlockCounts = () => {
    return axios.get('/api/block-height');
}