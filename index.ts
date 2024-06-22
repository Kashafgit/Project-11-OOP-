import inquirer from "inquirer";
import chalk from "chalk";
class student{
    name: string;
    constructor(n:string){
        this.name = n
    }
}
class Person{
    students: student[] = []
    addStudent(obj: student){
        this.students.push(obj)
    }
}
let persons = new Person()
const programStart = async(persons: Person)=>{
    do{
    console.log(chalk.magenta("Wellcome"));
    const ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.yellow("would you like to interact with?"),
            choices: ["Staff", "Student", "Exit"]
        }
    ])
    if(ans.select == "Staff"){
        console.log(chalk.green("You approach the staff room. Please feel free to ask any question"));
        
    }
    else if(ans.select == "Student"){
        const ans = await inquirer.prompt([
            {
                name: "new_student", 
                type: "input",
                message: chalk.cyan("Enter the student name you wish to engage with:")
            }
        ])
        const f_Student = persons.students.find(value => value.name == ans.new_student)
        if(!f_Student){
            const my_name = new student(ans.new_student)
            persons.addStudent(my_name)
            console.log(chalk.blueBright(`Hello i am ${my_name.name} Nice to meet you`));
            console.log(chalk.magenta("New student added"));
            console.log(chalk.yellow("\n Current student list:"));
            console.log(persons.students);
            
        }
        else{
            console.log(chalk.blue(`Hello i am ${f_Student.name} Nice to see you again`));
            console.log("Existing student list:");
            console.log(persons.students);   
        }
    }else if(ans.select == "Exit"){
        console.log(chalk.red("Exiting the program..."));
        process.exit()
    }
 }while(true)

}
programStart(persons)