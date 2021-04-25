import axios from 'axios'

const getPinnedProjects = async () => {
    const response = await axios.get('http://localhost:8080/api/projects?isPinned=true')
    return response.data.projects
}

const getUnPinnedProjects = async () => {
    const response = await axios.get('http://localhost:8080/api/projects?isPinned=false')
    return response.data.projects
}

export default { getPinnedProjects, getUnPinnedProjects }