export var commands: Array<string> = [];

let api;
let helper;
let log;
let pubsub;

export function constructor(api: any, helper: any, log: any, pubsub: any) {
    this.api = api;
    this.helper = helper;
    this.log = log;
    this.pubsub = pubsub;
};