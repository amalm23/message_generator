function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
} 

const inspirationQuotes = {
    subject: [
        "You're",
        "You",
        "Your dreams",
        "Your hard work",
        "Your journey"
    ],
    action: [
        "can overcome any challenges",
        "are destined for greatness",
        "have the power to change the world",
        "are stronger than you think",
        "can achieve anything with persistance"
    ],
    advice: [
        "Believe in yourself!",
        "Never Give Up!",
        "Keep pushing forwards!",
        "Success is just around the corner!",
        "The best is yet to come!"
    ]
};

let personalInspiration = [];

for (let prop in inspirationQuotes) {
    let optionIndex = generateRandomNumber(inspirationQuotes[prop].length);

    switch (prop) {
        case "subject":
            personalInspiration.push(`${inspirationQuotes[prop][optionIndex]}`);
            break;
        case "action":
            personalInspiration.push(`${inspirationQuotes[prop][optionIndex]}`);
            break;          
        case "advice":
            personalInspiration.push(`${inspirationQuotes[prop][optionIndex]}`);
            break;  
        default: 
        personalInspiration.push("Something went wrong...");        
    }
}

function formatInspiration(inspiration) {
    const format = inspiration.join("\n");
    console.log("\n Your inspirational message! \n")
    console.log(format);
    console.log("\n Stay motivated!")
}

formatInspiration(personalInspiration);
