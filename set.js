class Set {
    constructor(props) {
        this.items = {};
        this.size = 0;
        this.init(props);
    }
    init(property) {
        this.items = {};
        property.forEach((element, index) => {
            if (!Object.values(this.items).includes(element)) {
                this.items[index] = element
            }
        });
        this.size = Object.keys(this.items).length
    }
    has(property) {
        return Object.values(this.items).includes(property)
    }
    clear() {
        this.items = {}
        this.size = 0
    }
    add(property) {
        if (!this.has(property)) {
            this.items[this.size] = property;
            this.size++
        }
    }
    delete(property) {
        if (this.has(property)) {
            delete this.items[Object.values(this.items).indexOf(property)]
            this.init(Object.values(this.items))
        }
    }
    size() {
        return this.size
    }
    entries() {
        let flag = 0
        return {
            next: () => {
                if (flag !== this.size) {
                    flag++
                    return {
                        value: [Object.values(this.items)[flag - 1], Object.values(this.items)[flag - 1]],
                        done: flag === this.size
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
    values() {
        let flag = 0
        return {
            next: () => {
                if (flag !== this.size) {
                    flag++
                    return {
                        value: Object.values(this.items)[flag - 1],
                        done: flag === this.size
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
    foreach(callback) {
        return Object.values(this.items).forEach((element, index) => {
            callback(element, element)
        })
    }
}