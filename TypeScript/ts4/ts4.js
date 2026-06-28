"use strict";
function castValue(value) {
    if (typeof value === "string") {
        let stringValue = value;
        console.log(stringValue);
    }
    else if (typeof value === "number") {
        let numberValue = value;
        console.log(numberValue);
    }
    else {
        console.log("Sorry, this is an unsupported type");
    }
}
castValue("hello");
castValue(123);
castValue(false);
