namespace Subjects {
    interface Teacher {
        experienceTeachingC: number;
    }
}

class Cpp extends Subjects.Subject{
    getRequirements():string{
        return 'Here is the list of requirements for Cpp'
    }
    getAvailableTeacher():string{
        if (this.teacher.experienceTeachingC < 1){
            return `No available teacher`
        }
        return `Available Teacher: ${this.teacher.firstName}`
    }
}