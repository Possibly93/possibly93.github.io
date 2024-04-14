var jpath = (function () {
    // Function to extract URLs from text
    function extractURLs(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.match(urlRegex) || [];
    }
    // Function to convert nested JSON to desired format
    function convertToDesiredFormat(nestedJSON) {
        // Recursive function to traverse the nested JSON and convert it to desired format
        function convert(obj) {
            var newObj = {};
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    // If the current value is an object, recursively call convert on it
                    newObj[key] = convert(obj[key]);
                } else {
                    // If the current value is not an object, directly assign it to newObj
                    newObj[key] = 0;
                }
            }
            return newObj;
        }
        // Start conversion from the root of the nested JSON
        return convert(nestedJSON);
    }
    // Function to remove unnecessary nesting for items while retaining folder structure
    function generateJSON(inputText) {
        let urls = extractURLs(inputText.trim());
        let nestedJSON = {};
        let jpathStructure = {}; // Initialize JPath structure
        urls.forEach(url => {
            let parts = url.split('/');
            let currentNode = nestedJSON;
            let currentPath = jpathStructure; // Initialize current path for JPath
            for (let i = 3; i < parts.length; i++) {
                if (!currentNode[parts[i]]) {
                    if (i === parts.length - 1) {
                        currentNode[parts[i]] = 0; // Set value directly for leaf nodes
                    } else {
                        currentNode[parts[i]] = {}; // Create an empty object for non-leaf nodes
                    }
                }
                currentNode = currentNode[parts[i]];
                if (!currentPath[parts[i]]) {
                    currentPath[parts[i]] = {};
                }
                currentPath = currentPath[parts[i]];
            }
        });
        let finalJSON = convertToDesiredFormat(nestedJSON);
        return JSON.stringify(finalJSON);
    }
    return {
        create: function (inputText) {
            return generateJSON(inputText);
        }
    };
})();
