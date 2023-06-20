import axios from "axios";

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization:'Bearer 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'
    }
})