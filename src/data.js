import data from './data.json';

const allCategories = data.map((data) => data.category);

const uniqueCategories = Array.from(new Set(allCategories))

const categoriesWithCounts = data.reduce((obj, item) => {
    if (obj[item.category] in Object.keys(obj))
        obj[item.category] += 1
    else
        obj[item.category] = 1 
    return obj
  }, {})

const productCount = uniqueCategories.reduce((acc, item) => {
        acc.push({ name: item, count: categoriesWithCounts[item] })
    
        return acc
    }, [])

uniqueCategories.push("All")
categoriesWithCounts["All"] = 83;

export default data
export {allCategories, uniqueCategories, categoriesWithCounts, productCount}