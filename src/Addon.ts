import { API } from "chatbotce/typings/lib/API";
import { Helper } from "chatbotce/typings/lib/Helpers";
import { PubSub } from "chatbotce/typings/lib/PubSub";

export var commands: Array<string> = [];

let api: API;
let helper: Helper;
let log;
let pubsub: PubSub;

export function constructor(api: API, helper: Helper, log: any, pubsub: PubSub) {
    this.api = api;
    this.helper = helper;
    this.log = log;
    this.pubsub = pubsub;
};
