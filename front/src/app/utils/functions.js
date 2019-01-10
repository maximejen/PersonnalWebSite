export function getCorrectTranslatedString(locale, translatedString) {

    let references = {
        "fr": translatedString.fr,
        "en": translatedString.en
    };
    let string = translatedString.en;

    for (let index in references) {
        if (index === locale) {
            string = references[index];
        }
    }

    return string;
}

export function truncateOnWord(str, limit) {
    const trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
    const reg = new RegExp('(?=[' + trimmable + '])');
    const words = str.split(reg);
    let count = 0;
    return (words.filter(function (word) {
        count += word.length;
        return count <= limit;
    }).join('') + '...');
}

export async function isLogged() {
    if (sessionStorage.getItem("userId") === null || sessionStorage.getItem("userId") === "null" || sessionStorage.getItem("userToken") === null || sessionStorage.getItem("userToken") === "null")
        return false;
    const url = "http://localhost:4000/logged";
    const data = JSON.stringify({
        id: sessionStorage.getItem("userId"),
        token: sessionStorage.getItem("userToken")
    });
    let logged = undefined;
    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: data
    })
        .catch(err => {

        })
        .then(response => {
            response.json()
                .then(data => {
                    if (response.status === 401) {
                        logged = false
                    } else if (data !== undefined) {
                        logged = true;
                    }
                    console.log(logged);
                });
        });
    return logged;
}
