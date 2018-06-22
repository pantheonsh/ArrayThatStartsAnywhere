/*
    ArrayThatStartsAt by Pantheon
*/
(function(exports){
    class ArrayThatStartsAt extends Object {
        constructor (startIndex = 1) {
            super();
            this.startIndex = startIndex;
            this.length = 0;
        }
    
        keys () {
            return Object.keys(this).filter(i => !isNaN(parseFloat(i))).map(i => parseFloat(i)).sort((a, b) => a - b);
        }
    
        slice (start = 0, end = this.length) {
            // really buggy pls help fix
    
            let keys = this.keys();
            let newarr = new ArrayThatStartsAt(this.startIndex);
    
            keys.forEach(keyname => {
                if(keyname > (start - 1) && keyname < (end + 1)) newarr.push(this[keyname]);
            });
    
            return newarr;
        }
    
        push (item) {
            let keys = this.keys();
            this[keys.length + this.startIndex] = item;
            
            this.length = this.keys().length;
        }
    
        pop () {
            let keys = this.keys();
            let el = this[keys[keys.length - 1]];
    
            delete this[keys[keys.length - 1]];
    
            this.length = this.keys().length;
    
            return el;
        }
    
        shift () {
            // holy shit i spent almost 1 hour creating this fucking ugly hack
            let keys = this.keys();
            keys.reverse();
            keys.pop();
            keys.reverse();
    
            let e = this[this.startIndex];
            delete this[this.startIndex];
    
            this.forEach((key, ind) => {
                let clone = this[ind];
                delete this[ind];
                this[ind - 1] = clone;
            });
    
            this.length = this.keys().length;
    
            return e;
        }
    
        reverse () {
            let keys = this.keys();
            let keys_r = this.keys();
    
            keys.forEach(val => {
                this[val] = keys_r.pop();
            });
    
            return this;
        }
    
        forEach (cb, thisArg = undefined) {
            let keys = this.keys();
    
            keys.forEach(v => {
                if(cb) cb.apply(thisArg, [this[v], v, this]);
            });
        }
    
        findIndex (testFunc = () => {}, thisArg) {
            let found = false;
            let foundIndex = -1;
            
            this.forEach((value, index, arr) => {
                if(!found && testFunc.apply(thisArg, [value, index, arr])) {
                    found = true;
                    foundIndex = index;
                }
            });
    
            return foundIndex;
        }
    
        find (testFunc, thisArg) {
            return this[this.findIndex(testFunc, thisArg)];
        }
    
        map (testFunc = () => {}, thisArg = undefined) {
            let newarr = new ArrayThatStartsAt(this.startIndex);
    
            this.forEach((value, index, arr) => {
                let testResult = testFunc.apply(thisArg, [value, index, arr]);
                newarr.push(value);
            });
    
            return newarr;
        }
    
        filter (testFunc = () => {}, thisArg = undefined) {
            let keys = this.keys();
            let newarr = new ArrayThatStartsAt(this.startIndex);
    
            keys.forEach((value, index, arr) => {
                if(testFunc.apply(thisArg, [value, index, arr])) newarr.push(value);
            });
    
            return newarr;
        }
    
        asABoringJSArrayWhyAreYouEvenUsingThisFunctionIfYouCanHaveArraysThatStartWhereverYouWant () {
            // pls no
            return this.keys().map(i => this[i]);
        }
    }

    exports.ArrayThatStartsAt = ArrayThatStartsAt;
})(typeof exports === 'undefined' ? window : exports);
