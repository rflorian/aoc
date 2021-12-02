export default (rawInput: string) => {
    const input = rawInput.split('\r\n').map(v => v.split(' '));

    // PART 1
    let horizontal = 0;
    let depth = 0;
    for (const [instruction, value] of input) {
        switch (instruction) {
            case 'forward':
                horizontal += +value;
                break;
            case 'down':
                depth += +value;
                break;
            case 'up':
                depth -= +value;
                break;
            default:
                throw new Error(`unsupported operation "${instruction}"`);

        }
    }
    console.log('Part 1:', horizontal * depth);

    // PART 2
    horizontal = 0;
    depth = 0;
    let aim = 0;
    for (const [instruction, value] of input) {
        switch (instruction) {
            case 'forward':
                horizontal += +value;
                depth += aim * +value;
                break;
            case 'down':
                aim += +value;
                break;
            case 'up':
                aim -= +value;
                break;
            default:
                throw new Error(`unsupported operation "${instruction}"`);

        }
    }
    console.log('Part 2:', horizontal * depth);
};
