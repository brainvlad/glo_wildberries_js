const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    // получаем данный с сервера (в данном случае локального)
    const getData = () => {
        fetch('db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data))
            })
    }

    // события при клике по ссылке
    // links.forEach((link) => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault()
    //         getData()
    //     })
    // })

    const goods = JSON.parse(localStorage.getItem('goods'))
    console.log(localStorage)
}

getGoods()