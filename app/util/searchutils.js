export function getSearchHost (type) {
    let host = ''
    switch (type) {
        case 'news':
            host = 'http://localhost:9001/elk/model';
            // host = 'https://apis.comentarismo.com/elk/_all/commentaries'
            break
        case 'product':
            //searchOnTypeUrl = 'http://localhost:9000/elk/_all/commentaries_product';
            host = 'https://apis.comentarismo.com/elk/_all/commentaries_product'
            break
        default:
            host = 'http://localhost:9001/elk/model';
            // searchOnTypeUrl = 'http://localhost:9000/elk/_all/';
            // host = 'https://apis.comentarismo.com/elk/_all/'
            break
    }
    
    return host
}


export function gup (name, url) {
    // console.log('GUP typeof window ', typeof window);
    if (typeof window === 'undefined') {
        return null
    }
    
    if (!url) url = location.href
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
    var regexS = '[\\?&]' + name + '=([^&#]*)'
    var regex = new RegExp(regexS)
    var results = regex.exec(url)
    return results == null ? null : results[1]
}