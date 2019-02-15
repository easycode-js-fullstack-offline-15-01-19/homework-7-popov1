// -------------------------- Home work - 7--------------------------
// -------------------------- попов Евгений --------------------------


/**
 * @description Используя rest оператор и деструктуризацию, создать функцию, 
 * которая принимает любое количество аргументов и возвращает объект,
 * содержащий первый аргумент и массив из остатка:
 * 
 * @returns {firstArgument, restArgumentsArray}
 */
function getFirstArgumentAndRestArray () {
    const [ first,...other ] = arguments;
    return {first, other};
}



/**
 * @description Организовать функцию getInfo, которая принимает объект вида
 * { name: ...,  info: { employees: [...], partners: [ … ]  } }
 * и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
 * @param {object} { name: ...,  info: { employees: [...], partners: [ … ]  } }
 * @returns {name, info.partners[0], info.partners[1]}
 */
function getInfo( object ) {

    const [objectName = "Unknown"] = [object.name] ;
    const [comp1, comp2] = object.info.partners;

    console.log({name: objectName, firstCompany: comp1, secondCompany:comp2});
    
}

const organisation = {  
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']} 
};

getInfo(organisation);




/**
 * @description Переделать функцию с использованием функции-стрелки 
 * (в методе reduce тоже использовать arrow function):
 * @param {Array or null} any array
 * @returns {Number} summary of number array values
 */
const sum = (...props) => { 
    let result = 0;
    if (!props.length) return 0;
    const func =(prop) => { 
        for (let i = 0; i < prop.length; i++) {
            if (typeof prop[i] === 'number') {
                result += prop[i];
            }
        }
    };
    func(props);
    return result;
};

sum(1, 6, 'fdghjk', 3, '654'); // result = 10