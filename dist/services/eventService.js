"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEvents = exports.getEventById = exports.deleteEvent = exports.updateEvent = exports.addEvent = void 0;
const event_1 = __importDefault(require("../models/event"));
const addEvent = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    const newEvent = new event_1.default(eventData);
    return yield newEvent.save();
});
exports.addEvent = addEvent;
const updateEvent = (id, eventData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_1.default.findByIdAndUpdate(id, eventData, { new: true });
});
exports.updateEvent = updateEvent;
const deleteEvent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_1.default.findByIdAndDelete(id);
    return !!result;
});
exports.deleteEvent = deleteEvent;
const getEventById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_1.default.findById(id);
});
exports.getEventById = getEventById;
const listEvents = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return yield event_1.default.find(filters);
});
exports.listEvents = listEvents;
