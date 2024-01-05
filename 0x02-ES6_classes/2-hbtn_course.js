export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = name;

        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = length;

        if (!Array.isArray(students) || !students.every(item => typeof item === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = value;
    }

    get students() {
        return this._students;
    }

    set students(value) {
        if (!Array.isArray(value)) {
            throw new TypeError('Students must be an array');
        }
    
        for (const item of value) {
            if (typeof item !== 'string') {
                throw new TypeError('Each student must be a string');
            }
        }
    
        this._students = value;
    }    
  
}