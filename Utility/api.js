import ApiConf from '../config/apis'

const authToken = ''

export function setToken(token) {
    authToken = token
}

export default async function api(url, params) {
    return await (await fetch(`${ApiConf.baseUrl}/${url}`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: authToken,
            },
            body: JSON.stringify(params),
            method: 'POST'
        })).json()
}