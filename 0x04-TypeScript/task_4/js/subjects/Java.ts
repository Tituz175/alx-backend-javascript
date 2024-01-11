namespace Subjects {
    interface Teacher {
        experienceTeachingJava?: number;
    }
}

class Java extends Subjects.Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for React'
    }

    getAvailableTeacher(): string {
        if (this.experienceTeachingJava < 1) {
            return 'No available teacher'
        }
        return `Available Teacher: ${this.teacher.firstName}`
    }
}