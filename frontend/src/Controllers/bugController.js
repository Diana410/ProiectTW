import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data=[];

    data.push(new bugModel({
        _id:23456789,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open aplication and it will cresh",
        version:"V2.0",
        assigned:"Ryan Beasley",
        creator:"Joe Bloggs",
        priority:1,
        time:"23:38",
    }
    ))
    
    data.push(new bugModel({
        _id:23456789,
        name:"Wont Load",
        details:"Crashes after 3 seconds",
        steps:"Open aplication and it will cresh",
        version:"V2.0",
        assigned:"Chira",
        creator:"Ana",
        priority:3,
        time:"23:38",
    }
    ))

    let sorted = data.sort((a,b)=>{return a.priority-b.priority})
    return sorted;

}
