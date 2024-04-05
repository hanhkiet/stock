let root_url = 'https://finance.google.com/finance'

export default function (code) {
    let url = `${root_url}${code}`
    return fetch(url).then(res => res.text()).then(text => {
        let rawJSON = text.replace('//', '')
        let json = JSON.parse(rawJSON)
        let data = json[0]

        return {
            stockIndex: data.l,
            stockChangeRaw: data.c,
            stockChangePercent: data.cp
        }
    })
}
