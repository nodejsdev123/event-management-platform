"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listEvents = exports.getEventById = exports.deleteEvent = exports.updateEvent = exports.addEvent = void 0;
const eventService = __importStar(require("../services/eventService"));
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEvent = yield eventService.addEvent(req.body);
        res.status(201).json({
            error: false,
            message: 'Event added successfully!',
            statusCode: 201,
            data: newEvent,
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error',
            statusCode: 500,
            data: {},
        });
    }
});
exports.addEvent = addEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedEvent = yield eventService.updateEvent(id, req.body);
        if (!updatedEvent) {
            return res.status(404).json({
                error: true,
                message: 'Event not found',
                statusCode: 404,
                data: {},
            });
        }
        res.status(200).json({
            error: false,
            message: 'Event updated successfully!',
            statusCode: 200,
            data: updatedEvent,
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error',
            statusCode: 500,
            data: {},
        });
    }
});
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const success = yield eventService.deleteEvent(id);
        if (!success) {
            return res.status(404).json({
                error: true,
                message: 'Event not found',
                statusCode: 404,
                data: {},
            });
        }
        res.status(200).json({
            error: false,
            message: 'Event deleted successfully!',
            statusCode: 200,
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error',
            statusCode: 500,
            data: {},
        });
    }
});
exports.deleteEvent = deleteEvent;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const event = yield eventService.getEventById(id);
        if (!event) {
            return res.status(404).json({
                error: true,
                message: 'Event not found',
                statusCode: 404,
                data: {},
            });
        }
        res.status(200).json({
            error: false,
            message: 'Event found successfully!',
            statusCode: 200,
            data: event,
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error',
            statusCode: 500,
            data: {},
        });
    }
});
exports.getEventById = getEventById;
const listEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    try {
        const events = yield eventService.listEvents(filters);
        res.status(200).json({
            error: false,
            message: 'Events found successfully!',
            statusCode: 200,
            data: events,
        });
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: 'Internal Server Error',
            statusCode: 500,
            data: {},
        });
    }
});
exports.listEvents = listEvents;
