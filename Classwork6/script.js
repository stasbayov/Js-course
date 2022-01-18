window.addEventListener('load', loadHandler);

function loadHandler() {
    var category = document.querySelector('#category')
    var subCategory = document.querySelector('#sub-category')
    var dataCategory = document.querySelector('#data')
    var previousCategoryData = new Object;

    var subCategoryValues = {
        books: {
            0: 'Horror',
            1: 'Fantasy',
            2: 'Love Story',
            3: 'Historical'
        },

        sport: {
            0: 'Basketball',
            1: 'Football',
            2: 'Hockey',
            3: 'Box'
        },

        movies: {
            0: 'Horror',
            1: 'Fantasy',
            2: 'Drama',
            3: 'Documentary',
            4: 'Comedy'
        },

        food: {
            0: 'Fastfood',
            1: 'Asian',
            2: 'Ukrainian',
            3: 'Italian',
            4: 'Georgian'
        },

        sleep: {
            0: 'On your back',
            1: 'On your side',
            2: 'At home',
            3: 'At guest'
        }
    }

    category.addEventListener('change', getCategory)
    subCategory.addEventListener('change', getCategory)

    function getCategory(e) {
        switch (e.target.name) {
            case 'category': setCascadeData(
                subCategoryValues, 
                subCategory, 
                e.target); 
                break;
            case 'subCategory': {
                var lastdata = createData();
                setCascadeData(
                    lastdata, 
                    dataCategory, 
                    e.target); 
            } break;
               
        }
    }

    function setCascadeData(parentCategoryList, childCategory, elem) {
        var selectedCategory = parentCategoryList[elem.value.toLowerCase()];
        previousCategoryData = Object.assign({}, selectedCategory)

        childCategory.options.length = 1;
        
        Object.values(selectedCategory).forEach(element => {
            childCategory.insertAdjacentHTML(
                'beforeend', 
                `<option value="${element}">${element}</option>`)
        });
    }

    function createData() {
        var dataobj = new Object();

        for (var pd in previousCategoryData) {
            var myData = '';
            for (var i = 0; i < 4; i++) {
                myData += getRandInt(65, 90)
            }
            dataobj[pd] = myData;
        }

        return dataobj;
    }

    function getRandInt(min, max) {
        return String.fromCharCode(Math.floor(Math.random() * (max - min) + min))
    }
}