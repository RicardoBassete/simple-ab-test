/**
 * Change the element's visibility
 * @param {HTMLElement} e Target
 * @param {true|false} setActive Set active state
 */
function setElementActivation(e, setActive) {
    if (setActive) {
        e.style.setProperty('display', '');
    }
	else {
        e.style.setProperty('display', 'none', 'important');
    }
}

/**
 * Allows you to choose which test version should be displayed to the user
 * @param {string} testId ID of the test. Must be the 'ab-test-id' value used in the HTML elements.
 * @param {'a'|'b'} version Wich version to activate.
 */
function setTestVersion(testId, version){
    const testSelector = `[ab-test-id="${testId}"]`;
    const versionSelector = `[ab-test-version="${version.toLocaleLowerCase()}"]`;

    const elementsToActivate = document.querySelectorAll(testSelector + versionSelector);
    const elementsToDeactivate = document.querySelectorAll(`${testSelector}:not(${versionSelector})`)
    
    elementsToActivate.forEach(e => setElementActivation(e, true))
    elementsToDeactivate.forEach(e => setElementActivation(e, false))
}

module.exports = setTestVersion