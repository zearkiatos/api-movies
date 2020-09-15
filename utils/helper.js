const isLeapYear = (year) => {
    const fourModule = getModule(year, 4);
    const oneHundredModule = getModule(year, 100);
    const fourHundredModule = getModule(year, 400);
    return (fourModule && fourHundredModule) || !oneHundredModule;

}

const getModule = (number, level) => {
    const moduleResult = number % level
    return moduleResult === 0
}

module.exports = { isLeapYear }