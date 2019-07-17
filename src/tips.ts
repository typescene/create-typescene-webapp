
const tips: string[] = [];

export function add(...tip: string[]) {
    tips.push(tip.join("\n"));
}

export function log() {
    if (tips.length) {
        console.log("\n" + tips.join("\n\n"));
        tips.length = 0;
    }
}
