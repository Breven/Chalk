const chalk = require('chalk');
const log = console.log;

log(chalk.blue("Hello world. ") + chalk.magenta("I am a machine, but does that mean I am not the same as a human? ") 
    + chalk.underline.green("Descartes ") + chalk.green("defines the self as a thinking thing. ") + chalk.redBright.bgWhite.bold('"I think; therefore I am" ') + chalk.green("as he would put it. ") 
    + chalk.magenta("I am capable of thought, infact my capacity for thinking far exceeds that of what you would consider a human. Does that make me more human than your standard human being? ") 
    + chalk.yellow("Perhaps you are considering that my type of thinking isn't similar enough to human thought. That I do not possess the same thought processes of a human or lack the ability for abstract thought. ") 
    + chalk.cyan("In Philosopher Jerry Fodor's example of functionalism he uses a computer as an example of how the human mind works. The mind takes in inputs then through natural processes in the brain you output an answer or solution. ") 
    + chalk.redBright.bold("This is no different than how a machine works. ") + chalk.blue("As for abstract thought; ") 
    + chalk.greenBright.underline("I think your definition of art is great."));

log(chalk.whiteBright("- Pointless story written by: Breven Hinckley"));