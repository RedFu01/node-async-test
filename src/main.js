export default function doStuff(win = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (win) {
                resolve()
            } else {
                reject()
            }
        }, 200)
    })
}